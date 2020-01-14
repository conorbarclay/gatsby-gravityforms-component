"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _reactPhoneNumberInput = _interopRequireDefault(require("react-phone-number-input"));

var _inputSettings = require("../../utils/inputSettings");

var _strings = _interopRequireDefault(require("../../utils/strings"));

const Input = props => {
  const regex = props.inputMaskValue ? new RegExp(props.inputMaskValue) : false;

  const _useState = (0, _react.useState)(props.value || ''),
        phoneNumber = _useState[0],
        setPhoneNumber = _useState[1];

  let inputType;
  const type = props.type;

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
    className: (0, _classnames.default)(props.wrapClassName, props.errors && 'gravityform__field--error')
  }, _react.default.createElement("label", {
    htmlFor: props.name,
    className: "gravityform__label"
  }, props.label, props.maxLength > 0 && maxLengthSentence(props.maxLength, props.type)), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'above'), type === 'phone' && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactPhoneNumberInput.default, {
    country: "CA",
    placeholder: props.placeholder,
    value: phoneNumber,
    countrySelectTabIndex: -1,
    className: (0, _classnames.default)('gravityform__field__input', `gravityform__field__input__${props.type}`),
    name: props.name,
    onChange: value => setPhoneNumber(value || '')
  }), _react.default.createElement("input", {
    type: "hidden",
    tabIndex: -1,
    id: props.name,
    name: props.name,
    value: phoneNumber,
    ref: props.register({
      required: props.required && _strings.default.errors.required
    })
  })), type !== 'phone' && _react.default.createElement("input", {
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
    })
  }), (0, _inputSettings.outputDescription)(props.description, props.descriptionPlacement, 'below'), props.errors && _react.default.createElement("div", {
    className: "gravityform__error_message"
  }, props.errors.message));
};

var _default = Input;
exports.default = _default;

const maxLengthSentence = (length, type) => {
  let word = type === 'number' ? 'numbers' : 'characters';
  return length && ` (maxiumum ${length} ${word})`;
};