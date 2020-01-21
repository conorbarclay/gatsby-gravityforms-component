import classnames from 'classnames';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { outputDescription } from '../../utils/inputSettings';
import strings from '../../utils/strings';

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
                    visibility,
                  }) => {
  return (
    <div
      className={classnames(
        wrapClassName,
        errors && 'gravityform__field--error',
        visibility === 'hidden' && 'gravityform__field--hidden',
      )}
    >
      <label>{label}</label>
      {outputDescription(description, descriptionPlacement, 'above')}
      <ul className="gravityform__field__options">
        {options.map((choice, index) => {
          const choiceID = index + 1;
          return (
            <li key={`${name}-${index + 1}`}>
              <input
                type="checkbox"
                id={`${name}_${choiceID}`}
                className={classnames(
                  'gravityform__field__input__checkbox',
                  'gravityform__field__input__checkbox--' +
                  choiceID,
                )}
                name={`${name}_${choiceID}`}
                value={choice.value}
                defaultChecked={choice.isSelected}
                ref={register({
                  required: required && strings.errors.required,
                })}
                tabIndex={visibility === 'hidden' ? -1 : null}
              />
              <label htmlFor={`${name}_${choiceID}`}>
                {ReactHtmlParser(choice.text)}
              </label>
            </li>
          );
        })}
      </ul>
      {outputDescription(description, descriptionPlacement, 'below')}
      {errors && (
        <div className="gravityform__error_message">
          {errors.message}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
