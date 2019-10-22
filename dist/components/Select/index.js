"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

const Select = props => {
  return _react.default.createElement("div", {
    className: props.wrapClassName
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label"
  }, props.label), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), _react.default.createElement("select", {
    id: props.name,
    name: props.name,
    className: (0, _classnames.default)('gravityform__field__input', 'gravityform__field__input__select'),
    ref: props.register({
      required: props.required && 'This field is required'
    }),
    onChange: props.handleChange
  }, props.options.map((choice, index) => {
    return _react.default.createElement("option", {
      key: `${props.name}-${index}`,
      value: choice.value,
      defaultValue: choice.isSelected
    }, choice.text);
  })), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'));
};

var _default = Select;
exports.default = _default;