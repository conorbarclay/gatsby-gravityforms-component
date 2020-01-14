"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form/dist/react-hook-form.ie11"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _FormGeneralError = _interopRequireDefault(require("./components/FormGeneralError"));

var _FieldBuilder = _interopRequireDefault(require("./container/FieldBuilder"));

var _getForm = _interopRequireDefault(require("./utils/getForm"));

var _helpers = require("./utils/helpers");

var _manageErrors = require("./utils/manageErrors");

var _manageFormData = require("./utils/manageFormData");

var _passToGravityForms = _interopRequireDefault(require("./utils/passToGravityForms"));

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
  formData,
  lambda,
  presetValues = {},
  onSubmitSuccessCallback = () => {},
  loader = null
}) => {
  // Pull in form functions
  const _useForm = (0, _reactHookForm.default)(),
        register = _useForm.register,
        errors = _useForm.errors,
        handleSubmit = _useForm.handleSubmit,
        setError = _useForm.setError;

  const _useState = (0, _react.useState)(''),
        generalError = _useState[0],
        setGeneralError = _useState[1];

  const _useState2 = (0, _react.useState)(false),
        formLoading = _useState2[0],
        setLoadingState = _useState2[1]; // State for confirmation message


  const _useState3 = (0, _react.useState)(false),
        sent = _useState3[0],
        setSent = _useState3[1]; // Take ID argument and graphQL Gravity Form data for this form


  const singleForm = (0, _getForm.default)(formData, id);

  const onSubmitCallback =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(function* (values) {
      if (!formLoading) {
        setLoadingState(true); // Clean error

        setGeneralError(''); // Check that at least one field has been filled in

        if ((0, _manageFormData.submissionHasOneFieldEntry)(values)) {
          yield (0, _passToGravityForms.default)(singleForm.apiURL, values, lambda).then(restResponse => {
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
        } else {
          setGeneralError('leastOneField');
        }
      }
    });

    return function onSubmitCallback(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  if (!sent) {
    return singleForm && _react.default.createElement("form", {
      id: `gravityform--id-${id}`,
      className: formLoading ? `gravityform gravityform--loading gravityform--id-${id}` : `gravityform gravityform--id-${id}`,
      key: `gravityform--id-${id}`,
      onSubmit: handleSubmit(onSubmitCallback)
    }, generalError && _react.default.createElement(_FormGeneralError.default, {
      errorCode: generalError
    }), _react.default.createElement("div", {
      className: "gravityform__wrapper"
    }, _react.default.createElement(_FieldBuilder.default, {
      formId: id,
      formData: singleForm,
      presetValues: presetValues,
      register: register,
      errors: errors
    })), _react.default.createElement("div", {
      className: "gravityform__footer"
    }, _react.default.createElement("button", {
      type: "submit",
      className: "gravityform__button",
      disabled: formLoading
    }, !formLoading && _react.default.createElement("span", {
      className: "gravityform__button__default"
    }, singleForm.button.text ? singleForm.button.text : 'Submit', ' '), formLoading && _react.default.createElement("span", {
      className: "gravityform__button__loading"
    }, loader && loader, !loader && 'Loading'))));
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