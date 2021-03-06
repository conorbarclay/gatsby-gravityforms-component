import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import useForm from 'react-hook-form/dist/react-hook-form.ie11';
import FormGeneralError from './components/FormGeneralError';
import FieldBuilder from './container/FieldBuilder';
import getForm from './utils/getForm';
import { doesObjectExist } from './utils/helpers';
import { handleGravityFormsValidationErrors } from './utils/manageErrors';
import { submissionHasOneFieldEntry } from './utils/manageFormData';
import passToGravityForms from './utils/passToGravityForms';

/**
 * Component to take Gravity Form graphQL data and turn into
 * a fully functional form.
 * @param mixed     formData    Form dataset from graphQL
 * @param int       id          Form ID from Gravity Forms
 * @param string    lambda      API link for Lambda functions when working with
 *                              netlify or similar
 */

const GravityFormForm = ({ id, captchaSiteKey, formData, lambda, presetValues = {}, onSubmitSuccessCallback = () => {}, loader = null }) => {
  // Pull in form functions
  const { register, errors, handleSubmit, setError } = useForm();

  const [generalError, setGeneralError] = useState('');
  const [formLoading, setLoadingState] = useState(false);
  const recaptchaRef = useRef(null);
  const [formValues, setFormValues] = useState({});

  // State for confirmation message
  const [sent, setSent] = useState(false);

  // Take ID argument and graphQL Gravity Form data for this form
  const singleForm = getForm(formData, id);

  const onSubmitCallback = async values => {
    setFormValues(values);

    if (!formLoading) {
      setLoadingState(true);
      setGeneralError('');

      // Check that at least one field has been filled in
      if (submissionHasOneFieldEntry(values)) {
        recaptchaRef.current.execute();
      } else {
        setGeneralError('leastOneField');
      }
    }
  };

  const afterCaptchaCallback = async (captcha) => {
    await passToGravityForms(
      singleForm.apiURL,
      formValues,
      captcha,
      lambda,
    ).then((restResponse) => {
      setLoadingState(false);

      if (restResponse.status === 'error') {
        // Handle the errors
        // First check to make sure we have the correct data
        if (doesObjectExist(restResponse.data)) {
          // Validation errors passed back by Gravity Forms
          if (restResponse.data.status === 'gravityFormErrors') {
            // Pass messages to handle that sets react-hook-form errors
            handleGravityFormsValidationErrors(
              restResponse.data.validation_messages,
              setError,
            );

            recaptchaRef.current.reset();
          }
        } else {
          console.log(restResponse);
          setGeneralError('unknownError');
          recaptchaRef.current.reset();
        }
      }

      if (restResponse.status === 'success') {
        setSent(true);
        onSubmitSuccessCallback(restResponse.data);
      }
    });
  };

  if (!sent) {
    return (
      singleForm && (
        <form
          id={`gravityform--id-${id}`}
          className={
            formLoading
              ? `gravityform gravityform--loading gravityform--id-${id}`
              : `gravityform gravityform--id-${id}`
          }
          key={`gravityform--id-${id}`}
          onSubmit={handleSubmit(onSubmitCallback)}
        >
          {generalError && (
            <FormGeneralError errorCode={generalError} />
          )}

          <div className="gravityform__wrapper">
            <FieldBuilder
              formId={id}
              formData={singleForm}
              presetValues={presetValues}
              register={register}
              errors={errors}
            />
          </div>

          <div className="gravityform__footer">
            <button type="submit" className="gravityform__button" disabled={formLoading}>
              {!formLoading && (
                <span className="gravityform__button__default">
                                {singleForm.button.text
                                  ? singleForm.button.text
                                  : 'Submit'}{' '}
                            </span>
              )}
              {formLoading && (
                <span className="gravityform__button__loading">
                                {loader && loader}
                  {!loader && 'Loading'}
                            </span>
              )}
            </button>
          </div>

          <ReCAPTCHA
            sitekey={captchaSiteKey}
            ref={recaptchaRef}
            size="invisible"
            badge="bottomleft"
            onChange={(response) => {
              return afterCaptchaCallback(response);
            }}
          />
        </form>
      )
    );
  }

  return (
    <>
    </>
  );
};

export default GravityFormForm;

GravityFormForm.defaultProps = {
  lambda: '',
};

GravityFormForm.propTypes = {
  formData: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  lambda: PropTypes.string,
};
