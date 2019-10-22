import classnames from 'classnames'
import _ from 'lodash'
import React from 'react'

import Checkbox from '../../components/Checkbox'
import Html from '../../components/Html'
import Input from '../../components/Input'
import Multiselect from '../../components/Multiselect'
import Radio from '../../components/Radio'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'
import { filteredKeys } from '../../utils/helpers'
import {
    getPlacement,
    ifDefaultValue,
    islabelHidden,
} from '../../utils/inputSettings'

const FieldBuilder = ({
    formId,
    formData,
    presetValues = {},
    register,
    errors,
}) => {
    // The top level settings for the whole form
    const formSettings = {
        descriptionPlacement: formData.descriptionPlacement,
    }

    // Loop through fields and create
    return formData.formFields.map(field => {
        // Set the wrapper classes
        let inputWrapperClass = classnames(
            'gravityform__field',
            'gravityform__field__' + field.type,
            'gravityform__field--' + field.size,
            field.cssClass,
            { 'field-required': field.isRequired },
            { 'hidden-label': islabelHidden(field.labelPlacement) }
        )

        let errorKey = ''

        switch (field.type) {
            // Add note for unsupported captcha field
            case 'captcha':
                return (
                    <p>
                        <strong>
                            Gatsby Gravity Form Component currently does not
                            support the CAPTCHA field. Form will not submit with
                            this field present. Remove this field from the
                            Gravity Form.
                        </strong>
                    </p>
                )
            // Start with the standard fields
            case 'text':
            case 'email':
            case 'phone':
            case 'website':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={
                            _.get(presetValues, `input_${field.id}`, false)
                                ? _.get(
                                      presetValues,
                                      `input_${field.id}`,
                                      false
                                  )
                                : ifDefaultValue(field)
                        }
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'textarea':
                return (
                    <Textarea
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={
                            _.get(presetValues, `input_${field.id}`, false)
                                ? _.get(
                                      presetValues,
                                      `input_${field.id}`,
                                      false
                                  )
                                : ifDefaultValue(field)
                        }
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'select':
                return (
                    <Select
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        value={ifDefaultValue(field)}
                        options={JSON.parse(field.choices)}
                        wrapClassName={inputWrapperClass}
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'multiselect':
                return (
                    <Multiselect
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        value={ifDefaultValue(field)}
                        options={JSON.parse(field.choices)}
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'number':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={
                            _.get(presetValues, `input_${field.id}`, false)
                                ? _.get(
                                      presetValues,
                                      `input_${field.id}`,
                                      false
                                  )
                                : ifDefaultValue(field)
                        }
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        inputMaskValue={field.inputMaskValue}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'checkbox':
                errorKey = filteredKeys(errors, RegExp(`input_${field.id}_`))
                return (
                    <Checkbox
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        options={JSON.parse(field.choices)}
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={
                            errorKey.length > 0 ? errors[errorKey[0]] : null
                        }
                    />
                )
            case 'radio':
                errorKey = filteredKeys(errors, RegExp(`input_${field.id}_`))
                return (
                    <Radio
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        options={JSON.parse(field.choices)}
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        errors={
                            errorKey.length > 0 ? errors[errorKey[0]] : null
                        }
                    />
                )
            case 'hidden':
                return (
                    <Input
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        value={
                            _.get(presetValues, `input_${field.id}`, false)
                                ? _.get(
                                      presetValues,
                                      `input_${field.id}`,
                                      false
                                  )
                                : ifDefaultValue(field)
                        }
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                        register={register}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        errors={errors[`input_${field.id}`]}
                    />
                )
            case 'html':
                return (
                    <Html
                        key={field.id}
                        name={`input_${field.id}`}
                        label={field.label}
                        type={field.type}
                        description={field.description}
                        descriptionPlacement={getPlacement(
                            formSettings.descriptionPlacement,
                            field.descriptionPlacement
                        )}
                        content={field.content}
                        wrapClassName={inputWrapperClass}
                        className={field.cssClass}
                    />
                )

            default:
                return null
        }
    })
}

export default FieldBuilder
