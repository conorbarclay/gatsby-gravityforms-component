"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "/Volumes/Toshi One/Users/Conor/Documents/Honeycomb/gatsby-gravityforms-component/src/components/Checkbox/index.js";

const Checkbox = ({
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
      lineNumber: 21
    },
    __self: void 0
  }, _react.default.createElement("legend", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: void 0
  }, label), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'above'), _react.default.createElement("ul", {
    className: "gravityform__field__options",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: void 0
  }, options.map((choice, index) => {
    const choiceID = index + 1;
    return _react.default.createElement("li", {
      key: `${name}-${index + 1}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: void 0
    }, _react.default.createElement("input", {
      type: "checkbox",
      id: `${name}_${choiceID}`,
      className: (0, _classnames.default)('gravityform__field__input__checkbox', 'gravityform__field__input__checkbox--' + choiceID),
      name: `${name}_${choiceID}`,
      value: choice.value,
      defaultChecked: choice.isSelected,
      ref: register({
        required: required && _strings.default.errors.required
      }),
      tabIndex: visibility === 'hidden' ? -1 : null,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: void 0
    }), _react.default.createElement("label", {
      htmlFor: `${name}_${choiceID}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: void 0
    }, (0, _reactHtmlParser.default)(choice.text)));
  })), (0, _inputSettings.outputDescription)(description, descriptionPlacement, 'below'), errors && _react.default.createElement("div", {
    className: "gravityform__error_message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: void 0
  }, errors.message));
};

var _default = Checkbox;
exports.default = _default;