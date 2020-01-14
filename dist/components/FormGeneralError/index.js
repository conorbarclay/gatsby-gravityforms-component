"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/components/FormGeneralError/index.js";

const FormGeneralError = props => {
  let errorMessage = '';

  if (props.errorCode === 'formHasError') {
    errorMessage = _strings.default.errors.general;
  }

  if (props.errorCode === 'unknownError') {
    errorMessage = _strings.default.errors.unknownError;
  }

  if (props.errorCode === 'leastOneField') {
    errorMessage = _strings.default.errors.leastOneField;
  }

  if (errorMessage) {
    return _react.default.createElement("div", {
      className: "gravityform__error_inform",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: void 0
    }, _react.default.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: void 0
    }, errorMessage));
  } else {
    return false;
  }
};

var _default = FormGeneralError;
exports.default = _default;