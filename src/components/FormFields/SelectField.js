import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "./ErrorField";
import styles from "./Fields.module.scss";

function Select(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <div className={styles.fieldsWithLabel}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                <Field
                    className={styles.selectField}
                    as="select"
                    id={name}
                    name={name}
                    {...rest}
                >
                    {options.map((option) => {
                        return (
                            <option name={option.value} value={option.value}>
                                {option.key}
                            </option>
                        );
                    })}
                </Field>
            </div>
            <div>
                <ErrorMessage component={ErrorField} name={name} />
            </div>
        </div>
    );
}

export default Select;
