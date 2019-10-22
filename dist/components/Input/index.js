"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/components/Input/index.js";

function CustomPhoneField(props) {
  return _react.default.createElement("input", {
    id: props.name,
    type: "tel",
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${props.type}`),
    name: props.name,
    value: phoneNumber,
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
    }),
    onFocus: e => {
      console.log(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
}

const Input = props => {
  const regex = props.inputMaskValue ? new RegExp(props.inputMaskValue) : false;
  const [phoneNumber, setPhoneNumber] = (0, _react.useState)(props.value);
  let inputType;
  const {
    type
  } = props;

  switch (type) {
    case 'phone':
      inputType = 'tel';
      break;

    case 'website':
      inputType = 'url';
      break;

    default:
      inputType = type;
      break;
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(props.wrapClassName, props.errors && 'gravityform__field--error'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: void 0
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: void 0
  }, props.label, props.maxLength > 0 && maxLengthSentence(props.maxLength, props.type)), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), type === 'phone' && _react.default.createElement(_reactPhoneNumberInput.default, {
    numberInputComponent: _react.default.createElement(CustomPhoneField, (0, _extends2.default)({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: void 0
    })),
    country: "CA",
    value: phoneNumber,
    onChange: value => setPhoneNumber(value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: void 0
  }), type !== 'phone' && _react.default.createElement("input", {
    id: props.name,
    type: inputType,
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
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: void 0
  }), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'), props.errors && _react.default.createElement("div", {
    className: "gravityform__error_message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: void 0
  }, props.errors.message));
};

var _default = Input;
exports.default = _default;

const maxLengthSentence = (length, type) => {
  let word = type === 'number' ? 'numbers' : 'characters';
  return length && ` (maxiumum ${length} ${word})`;
};