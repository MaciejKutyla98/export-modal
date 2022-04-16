import * as Yup from "yup";

export const validationSchema = Yup.object({
    reportName: Yup.string()
        .min(3, 'Report name must contain at least 3 letters')
        .max(255, 'Report name is too long')
        .required('Report name is required'),
    format: Yup.string()
        .required('Choose format'),
    emailTo: Yup.string()
        .required('Email is required')
        .email('Must be a valid email')
        .max(255),
    schedule: Yup.string()
        .required('Choose one schedule')
})