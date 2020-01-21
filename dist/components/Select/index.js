"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/components/Select/index.js";

const Select = props => {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(props.wrapClassName, visibility === 'hidden' && 'gravityform__field--hidden'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: void 0
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: void 0
  }, props.label), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), _react.default.createElement("select", {
    id: props.name,
    name: props.name,
    className: (0, _classnames.default)('gravityform__field__input', 'gravityform__field__input__select'),
    ref: props.register({
      required: props.required && 'This field is required'
    }),
    onChange: props.handleChange,
    tabIndex: props.visibility === 'hidden' ? -1 : null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: void 0
  }, props.options.map((choice, index) => {
    return _react.default.createElement("option", {
      key: `${props.name}-${index}`,
      value: choice.value,
      defaultValue: choice.isSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: void 0
    }, choice.text);
  })), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'));
};

var _default = Select;
exports.default = _default;