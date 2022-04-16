import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "./ErrorField";
import styles from "./Fields.module.scss";

function RadioButtons(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <div className={styles.fieldsWithLabel}>
                <label className={styles.label}>{label}</label>
                <Field name={name}>
                    {({ field }) => {
                        return options.map((option) => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                        className={styles.radioField}
                                    />
                                    <label
                                        className={styles.radioFieldLabel}
                                        htmlFor={option.value}
                                    >
                                        {option.key}
                                    </label>
                                </React.Fragment>
                            );
                        });
                    }}
                </Field>
            </div>
            <div>
                <ErrorMessage component={ErrorField} name={name} />
            </div>
        </div>
    );
}

export default RadioButtons;
