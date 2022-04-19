import React from "react";
import { Formik, Form } from "formik";
import DateField from "../FormFields/DateField";
import TimeField from "../FormFields/TimeField";
import TextField from "../FormFields/TextField";
import RadioField from "../FormFields/RadioField";
import SelectField from "../FormFields/SelectField";
import styles from "./ReportForm.module.scss";
import { validationSchema } from "../../validation/ValidationSchema";

async function sendForm(url, data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const ReportForm = (props) => {
    const url = "https://postman-echo.com/post";

    const initialValues = {
        reportName: "",
        format: "",
        emailTo: "",
        schedule: "",
    };

    const formatOptions = [
        { key: "Excel", value: "excel" },
        { key: "CSV", value: "csv" },
    ];

    const scheduleOptions = [
        { key: "No repeat", value: "noRepeat" },
        { key: "Specific Date", value: "specificDate" },
        { key: "Daily", value: "daily" },
        { key: "Weekly", value: "weekly" },
    ];

    const dayOption = [
        { key: "Select a day", value: "" },
        { key: "Monday", value: "monday" },
        { key: "Tuesday", value: "tuesday" },
        { key: "Wednesday", value: "wednesday" },
        { key: "Thursday ", value: "thursday" },
        { key: "Friday ", value: "friday" },
        { key: "Saturday", value: "saturday" },
        { key: "Sunday", value: "sunday" },
    ];

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                // sendForm(url, {
                //     ...values,
                // }).then(props.onClose);
                console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            }}
        >
            {({ values }) => (
                <Form id="reportForm">
                    <div>
                        <TextField
                            name="reportName"
                            label="Report name"
                            placeholder="Shareablee Report"
                        />
                    </div>
                    <div>
                        <RadioField label="Format" name="format" options={formatOptions} />
                    </div>
                    <div>
                        <TextField
                            label="E-mail to"
                            name="emailTo"
                            placeholder="client@comapny.com"
                        />
                    </div>
                    <div>
                        <RadioField
                            label="Schedule "
                            name="schedule"
                            options={scheduleOptions}
                        />
                    </div>
                    {values.schedule === "specificDate" && (
                        <div className={styles.specificDate}>
                            <DateField label="Date" name="specificDate" />
                            <TimeField label="at" name="specificTime" />
                        </div>
                    )}
                    {values.schedule === "daily" && (
                        <div>
                            <TimeField label="Everyday at" name="dailyTime" />
                        </div>
                    )}
                    {values.schedule === "weekly" && (
                        <div className={styles.weeklyDate}>
                            <SelectField label="Every" name="weeklyDay" options={dayOption} />
                            <TimeField label="at" name="weeklyTime" />
                        </div>
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default ReportForm;
