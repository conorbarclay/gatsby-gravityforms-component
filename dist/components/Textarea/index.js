"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

const Textarea = props => {
  const regex = props.inputMaskValue ? new RegExp(props.inputMaskValue) : false;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(props.wrapClassName, props.errors && 'gravityform__field--error')
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label"
  }, props.label, props.maxLength > 0 && `(maxiumum ${props.maxLength} characters)`), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), _react.default.createElement("textarea", {
    id: props.name,
    type: props.type,
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${props.type}`),
    maxLength: props.maxLength > 0 ? props.maxLength : undefined,
    name: props.name,
    defaultValue: props.value,
    placeholder: props.placeholder,
    ref: props.register({
      required: props.required && _strings.default.errors.required,
      maxlength: {
        value: props.maxLength > 0 && props.maxLength,
        message: props.maxLength > 0 && `${_strings.default.errors.maxChar.front}  ${props.maxLength} ${_strings.default.errors.maxChar.back}`
      },
      pattern: {
        value: regex,
        message: regex && _strings.default.errors.pattern
      }
    })
  }), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'), props.errors && _react.default.createElement("div", {
    className: "gravityform__error_message"
  }, props.errors.message));
};

var _default = Textarea;
exports.default = _default;