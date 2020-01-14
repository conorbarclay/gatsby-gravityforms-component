"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactGoogleRecaptcha = _interopRequireDefault(require("react-google-recaptcha"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form/dist/react-hook-form.ie11"));

var _FormGeneralError = _interopRequireDefault(require("./components/FormGeneralError"));

var _FieldBuilder = _interopRequireDefault(require("./container/FieldBuilder"));

var _getForm = _interopRequireDefault(require("./utils/getForm"));

var _helpers = require("./utils/helpers");

var _manageErrors = require("./utils/manageErrors");

var _manageFormData = require("./utils/manageFormData");

var _passToGravityForms = _interopRequireDefault(require("./utils/passToGravityForms"));

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/index.js";

/**
 * Component to take Gravity Form graphQL data and turn into
 * a fully functional form.
 * @param mixed     formData    Form dataset from graphQL
 * @param int       id          Form ID from Gravity Forms
 * @param string    lambda      API link for Lambda functions when working with
 *                              netlify or similar
 */
const GravityFormForm = ({
  id,
  captchaSiteKey,
  formData,
  lambda,
  presetValues = {},
  onSubmitSuccessCallback = () => {},
  loader = null
}) => {
  // Pull in form functions
  const {
    register,
    errors,
    handleSubmit,
    setError
  } = (0, _reactHookForm.default)();
  const [generalError, setGeneralError] = (0, _react.useState)('');
  const [formLoading, setLoadingState] = (0, _react.useState)(false);
  const recaptchaRef = (0, _react.useRef)(null);
  const [formValues, setFormValues] = (0, _react.useState)({}); // State for confirmation message

  const [sent, setSent] = (0, _react.useState)(false); // Take ID argument and graphQL Gravity Form data for this form

  const singleForm = (0, _getForm.default)(formData, id);

  const onSubmitCallback = async values => {
    setFormValues(values);

    if (!formLoading) {
      setLoadingState(true);
      setGeneralError(''); // Check that at least one field has been filled in

      if ((0, _manageFormData.submissionHasOneFieldEntry)(values)) {
        recaptchaRef.current.execute();
      } else {
        setGeneralError('leastOneField');
      }
    }
  };

  const afterCaptchaCallback = async captcha => {
    await (0, _passToGravityForms.default)(singleForm.apiURL, formValues, captcha, lambda).then(restResponse => {
      setLoadingState(false);

      if (restResponse.status === 'error') {
        // Handle the errors
        // First check to make sure we have the correct data
        if ((0, _helpers.doesObjectExist)(restResponse.data)) {
          // Validation errors passed back by Gravity Forms
          if (restResponse.data.status === 'gravityFormErrors') {
            // Pass messages to handle that sets react-hook-form errors
            (0, _manageErrors.handleGravityFormsValidationErrors)(restResponse.data.validation_messages, setError);
          }
        } else {
          console.log(restResponse); // Seemed to be an unknown issue

          setGeneralError('unknownError');
        }
      }

      if (restResponse.status === 'success') {
        setSent(true);
        onSubmitSuccessCallback(restResponse.data);
      }
    });
    recaptchaRef.current.reset();
  };

  if (!sent) {
    return singleForm && _react.default.createElement("form", {
      id: `gravityform--id-${id}`,
      className: formLoading ? `gravityform gravityform--loading gravityform--id-${id}` : `gravityform gravityform--id-${id}`,
      key: `gravityform--id-${id}`,
      onSubmit: handleSubmit(onSubmitCallback),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: void 0
    }, generalError && _react.default.createElement(_FormGeneralError.default, {
      errorCode: generalError,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: void 0
    }), _react.default.createElement("div", {
      className: "gravityform__wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: void 0
    }, _react.default.createElement(_FieldBuilder.default, {
      formId: id,
      formData: singleForm,
      presetValues: presetValues,
      register: register,
      errors: errors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: void 0
    })), _react.default.createElement("div", {
      className: "gravityform__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: void 0
    }, _react.default.createElement("button", {
      type: "submit",
      className: "gravityform__button",
      disabled: formLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: void 0
    }, !formLoading && _react.default.createElement("span", {
      className: "gravityform__button__default",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: void 0
    }, singleForm.button.text ? singleForm.button.text : 'Submit', ' '), formLoading && _react.default.createElement("span", {
      className: "gravityform__button__loading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: void 0
    }, loader && loader, !loader && 'Loading'))), _react.default.createElement(_reactGoogleRecaptcha.default, {
      sitekey: captchaSiteKey,
      ref: recaptchaRef,
      size: "invisible",
      badge: "bottomleft",
      onChange: response => {
        return afterCaptchaCallback(response);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: void 0
    }));
  }

  return _react.default.createElement(_react.default.Fragment, null);
};

var _default = GravityFormForm;
exports.default = _default;
GravityFormForm.defaultProps = {
  lambda: ''
};
GravityFormForm.propTypes = {
  formData: _propTypes.default.object.isRequired,
  id: _propTypes.default.number.isRequired,
  lambda: _propTypes.default.string
};