"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

const Radio = ({
  name,
  label,
  errors,
  options,
  wrapClassName,
  className,
  register,
  required,
  description,
  descriptionPlacement
}) => {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, errors && 'gravityform__field--error')
  }, _react.default.createElement("legend", null, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), options.map((choice, index) => {
    const choiceID = index + 1;
    return _react.default.createElement("div", {
      key: `${name}-${choiceID}`
    }, _react.default.createElement("input", {
      type: "radio",
      id: `${name}_${choiceID}`,
      className: (0, _classnames.default)('gravityform__field__input__radio', 'gravityform__field__input__radio--' + choiceID, className),
      name: `${name}`,
      value: choice.value,
      defaultChecked: choice.isSelected,
      ref: register({
        required: required && _strings.default.errors.required
      })
    }), _react.default.createElement("label", {
      htmlFor: `${name}_${choiceID}`
    }, choice.text));
  }), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'), errors && _react.default.createElement("div", {
    className: "gravityform__error_message"
  }, errors.message));
};

var _default = Radio;
exports.default = _default;