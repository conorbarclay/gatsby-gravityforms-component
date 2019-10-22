"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash"));

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../components/Checkbox"));

var _Html = _interopRequireDefault(require("../../components/Html"));

var _Input = _interopRequireDefault(require("../../components/Input"));

var _Multiselect = _interopRequireDefault(require("../../components/Multiselect"));

var _Radio = _interopRequireDefault(require("../../components/Radio"));

var _Select = _interopRequireDefault(require("../../components/Select"));

var _Textarea = _interopRequireDefault(require("../../components/Textarea"));

var _helpers = require("../../utils/helpers");

var _inputSettings = require("../../utils/inputSettings");

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/container/FieldBuilder/index.js";

const FieldBuilder = ({
  formId,
  formData,
  presetValues = {},
  register,
  errors
}) => {
  // The top level settings for the whole form
  const formSettings = {
    descriptionPlacement: formData.descriptionPlacement
  }; // Loop through fields and create

  return formData.formFields.map(field => {
    // Set the wrapper classes
    let inputWrapperClass = (0, _classnames.default)('gravityform__field', 'gravityform__field__' + field.type, 'gravityform__field--' + field.size, field.cssClass, {
      'field-required': field.isRequired
    }, {
      'hidden-label': (0, _inputSettings.islabelHidden)(field.labelPlacement)
    });
    let errorKey = '';

    switch (field.type) {
      // Add note for unsupported captcha field
      case 'captcha':
        return _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: void 0
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: void 0
        }, "Gatsby Gravity Form Component currently does not support the CAPTCHA field. Form will not submit with this field present. Remove this field from the Gravity Form."));
      // Start with the standard fields

      case 'text':
      case 'email':
      case 'phone':
      case 'website':
        return _react.default.createElement(_Input.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          placeholder: field.placeholder,
          maxLength: field.maxLength,
          inputMaskValue: field.inputMaskValue,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: void 0
        });

      case 'textarea':
        return _react.default.createElement(_Textarea.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          placeholder: field.placeholder,
          maxLength: field.maxLength,
          inputMaskValue: field.inputMaskValue,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: void 0
        });

      case 'select':
        return _react.default.createElement(_Select.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          value: (0, _inputSettings.ifDefaultValue)(field),
          options: JSON.parse(field.choices),
          wrapClassName: inputWrapperClass,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: void 0
        });

      case 'multiselect':
        return _react.default.createElement(_Multiselect.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          value: (0, _inputSettings.ifDefaultValue)(field),
          options: JSON.parse(field.choices),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: void 0
        });

      case 'number':
        return _react.default.createElement(_Input.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          placeholder: field.placeholder,
          maxLength: field.maxLength,
          inputMaskValue: field.inputMaskValue,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: void 0
        });

      case 'checkbox':
        errorKey = (0, _helpers.filteredKeys)(errors, RegExp(`input_${field.id}_`));
        return _react.default.createElement(_Checkbox.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          options: JSON.parse(field.choices),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          errors: errorKey.length > 0 ? errors[errorKey[0]] : null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: void 0
        });

      case 'radio':
        errorKey = (0, _helpers.filteredKeys)(errors, RegExp(`input_${field.id}_`));
        return _react.default.createElement(_Radio.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          options: JSON.parse(field.choices),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          errors: errorKey.length > 0 ? errors[errorKey[0]] : null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: void 0
        });

      case 'hidden':
        return _react.default.createElement(_Input.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          type: field.type,
          value: _lodash.default.get(presetValues, `input_${field.id}`, false) ? _lodash.default.get(presetValues, `input_${field.id}`, false) : (0, _inputSettings.ifDefaultValue)(field),
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          register: register,
          required: field.isRequired,
          placeholder: field.placeholder,
          errors: errors[`input_${field.id}`],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: void 0
        });

      case 'html':
        return _react.default.createElement(_Html.default, {
          key: field.id,
          name: `input_${field.id}`,
          label: field.label,
          type: field.type,
          description: field.description,
          descriptionPlacement: (0, _inputSettings.getPlacement)(formSettings.descriptionPlacement, field.descriptionPlacement),
          content: field.content,
          wrapClassName: inputWrapperClass,
          className: field.cssClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: void 0
        });

      default:
        return null;
    }
  });
};

var _default = FieldBuilder;
exports.default = _default;