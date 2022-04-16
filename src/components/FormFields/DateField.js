import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Fields.module.scss";
import ErrorField from "./ErrorField";

const DateField = (props) => {
    const { label, name, ...rest } = props;
    return (
        <div>
            <div className={styles.fieldsWithLabel}>
                <label className={styles.label} htmlFor={name}>
                    {label}
                </label>
                <Field name={name}>
                    {({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;
                        return (
                            <DateView
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={(val) => setFieldValue(name, val)}
                                className={styles.dateField}
                            />
                        );
                    }}
                </Field>
            </div>
            <div>
                <ErrorMessage component={ErrorField} name={name} />
            </div>
        </div>
    );
};

export default DateField;
