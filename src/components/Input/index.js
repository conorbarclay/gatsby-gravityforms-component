import classnames from 'classnames'
import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import { outputDescription } from '../../utils/inputSettings'
import strings from '../../utils/strings'

const Input = props => {
    const regex = props.inputMaskValue
      ? new RegExp(props.inputMaskValue)
      : false

    const [phoneNumber, setPhoneNumber] = useState(props.value);

    let inputType;
    const {type} = props;

    switch(type) {
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

    return (
      <div
        className={classnames(
          props.wrapClassName,
          props.errors && 'gravityform__field--error'
        )}
      >
          <label htmlFor={props.name} className="gravityform__label">
              {props.label}
              {props.maxLength > 0 &&
               maxLengthSentence(props.maxLength, props.type)}
          </label>
          {outputDescription(
            props.description,
            props.descriptionPlacement,
            'above'
          )}
          {type === 'phone' && (
            <PhoneInput
              id={props.name}
              country="CA"
              placeholder={props.placeholder}
              value={phoneNumber}
              className={classnames(
                'gravityform__field__input',
                `gravityform__field__input__${props.type}`,
              )}
              name={props.name}
              onChange={ value => setPhoneNumber(value) }
              ref={props.register({
                  required: props.required && strings.errors.required,
              })}
            />
          )}
          {type !== 'phone' && (
            <input
              id={props.name}
              type={inputType}
              className={classnames(
                'gravityform__field__input',
                `gravityform__field__input__${props.type}`,
              )}
              maxLength={props.maxLength > 0 ? props.maxLength : undefined}
              name={props.name}
              defaultValue={props.value}
              placeholder={props.placeholder}
              ref={props.register({
                  required: props.required && strings.errors.required,
                  maxlength: {
                      value: props.maxLength > 0 && props.maxLength,
                      message:
                        props.maxLength > 0 &&
                        `${strings.errors.maxChar.front}  ${
                          props.maxLength
                        } ${strings.errors.maxChar.back}`,
                  },
                  pattern: {
                      value: regex,
                      message: regex && strings.errors.pattern,
                  },
              })}
            />
          )
          }
          {outputDescription(
            props.description,
            props.descriptionPlacement,
            'below'
          )}
          {props.errors && (
            <div className="gravityform__error_message">
                {props.errors.message}
            </div>
          )}
      </div>
    )
}

export default Input

const maxLengthSentence = (length, type) => {
    let word = type === 'number' ? 'numbers' : 'characters'
    return length && ` (maxiumum ${length} ${word})`
}
