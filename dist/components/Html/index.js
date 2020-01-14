"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _reactHtmlParser = _interopRequireDefault(require("react-html-parser"));

var _inputSettings = require("../../utils/inputSettings");

const Html = props => {
  return _react.default.createElement("div", {
    className: props.wrapClassName
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label"
  }, props.label), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), _react.default.createElement("div", {
    className: (0, _classnames.default)('gravityform__' + props.type + '__wrap')
  }, (0, _reactHtmlParser.default)(props.content)), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'));
};

var _default = Html;
exports.default = _default;