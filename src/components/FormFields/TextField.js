import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorField from "./ErrorField";
import styles from "./Fields.module.scss";

function TextField(props) {
    const { label, name, ...rest } = props;
    return (
        <div>
            <div className={styles.fieldsWithLabel}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                <Field className={styles.textField} id={name} name={name} {...rest} />
            </div>
            <div>
                <ErrorMessage component={ErrorField} name={name} />
            </div>
        </div>
    );
}

export default TextField;
