"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/components/Radio/index.js";

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
  descriptionPlacement,
  visibility
}) => {
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(wrapClassName, errors && 'gravityform__field--error', visibility === 'hidden' && 'gravityform__field--hidden'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: void 0
  }, _react.default.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: void 0
  }, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), _react.default.createElement("ul", {
    className: "gravityform__field__options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: void 0
  }, options.map((choice, index) => {
    const choiceID = index + 1;
    return _react.default.createElement("li", {
      key: `${name}-${choiceID}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: void 0
    }, _react.default.createElement("input", {
      type: "radio",
      id: `${name}_${choiceID}`,
      className: (0, _classnames.default)('gravityform__field__input__radio', 'gravityform__field__input__radio--' + choiceID),
      name: `${name}`,
      value: choice.value,
      tabIndex: visibility === 'hidden' ? -1 : null,
      defaultChecked: choice.isSelected,
      ref: register({
        required: required && _strings.default.errors.required
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: void 0
    }), _react.default.createElement("label", {
      htmlFor: `${name}_${choiceID}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: void 0
    }, choice.text));
  })), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'), errors && _react.default.createElement("div", {
    className: "gravityform__error_message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: void 0
  }, errors.message));
};

var _default = Radio;
exports.default = _default;