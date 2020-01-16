"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _inputSettings = require("../../utils/inputSettings");

var _jsxFileName = "/Volumes/Toshi One/Users/Conor/Documents/Honeycomb/gatsby-gravityforms-component/src/components/Html/index.js";

const Html = props => {
  return _react.default.createElement("div", {
    className: props.wrapClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
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
  }, props.label), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), _react.default.createElement("div", {
    className: (0, _classnames.default)('gravityform__' + props.type + '__wrap'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: void 0
  }, (0, _reactHtmlParser.default)(props.content)), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'));
};

var _default = Html;
exports.default = _default;