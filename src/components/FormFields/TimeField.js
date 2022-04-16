import React from "react";
import DataPicker from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Fields.module.scss";
import ErrorField from "./ErrorField";

const TimeField = (props) => {
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
                            <DataPicker
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={(val) => setFieldValue(name, val)}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="h:mm aa"
                                className={styles.timeField}
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

export default TimeField;
