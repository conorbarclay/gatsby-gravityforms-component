"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));

var _flags = _interopRequireDefault(require("react-phone-number-input/flags"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

var _jsxFileName = "/Users/design3/Desktop/gatsby-gravityforms-component/src/components/Input/index.js";

const Input = props => {
  const regex = props.inputMaskValue ? new RegExp(props.inputMaskValue) : false;
  const [phoneNumber, setPhoneNumber] = (0, _react.useState)(props.value || '');
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
    className: (0, _classnames.default)(props.wrapClassName, props.errors && 'gravityform__field--error', props.visibility === 'hidden' && 'gravityform__field--hidden'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: void 0
  }, !!(type !== 'hidden' && type !== 'phone') && _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: void 0
  }, props.label, props.maxLength > 0 && maxLengthSentence(props.maxLength, props.type)), !!(type === 'phone') && _react.default.createElement("label", {
    htmlFor: `${props.name}_phone_number`,
    className: "gravityform__label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: void 0
  }, props.label, props.maxLength > 0 && maxLengthSentence(props.maxLength, props.type)), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), type === 'phone' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactPhoneNumberInput.default, {
    country: "CA",
    placeholder: props.placeholder,
    value: phoneNumber,
    flags: _flags.default,
    countrySelectTabIndex: -1,
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${props.type}`),
    id: `${props.name}_phone_number`,
    onChange: value => setPhoneNumber(value || ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: void 0
  }), _react.default.createElement("input", {
    type: "hidden",
    tabIndex: -1,
    id: props.name,
    name: props.name,
    value: phoneNumber,
    title: props.label,
    ref: props.register({
      required: props.required && _strings.default.errors.required
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: void 0
  })), type !== 'phone' && _react.default.createElement("input", {
    id: props.name,
    type: inputType,
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${props.type}`),
    maxLength: props.maxLength > 0 ? props.maxLength : undefined,
    name: props.name,
    defaultValue: props.value,
    placeholder: props.placeholder,
    tabIndex: props.visibility === 'hidden' ? -1 : null,
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
      lineNumber: 86
    },
    __self: void 0
  }), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'), props.errors && _react.default.createElement("div", {
    className: "gravityform__error_message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
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