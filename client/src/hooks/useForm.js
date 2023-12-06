import { useState } from "react"

function useForm(submitHandler, initialValues, validationRules = {}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const validate = () => {
        const newErrors = {};
        Object.keys(validationRules).forEach((fieldName) => {
            if (validationRules[fieldName].required && !values[fieldName]) {
                newErrors[fieldName] = "This field is required";
            }
            if (validationRules[fieldName].email && values[fieldName]) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(values[fieldName])) {
                    newErrors[fieldName] = "Invalid email address";
                }
            }
            if (validationRules[fieldName].imageUrl && values[fieldName]) {
                const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                if (!urlRegex.test(values[fieldName])) {
                    newErrors[fieldName] = "Invalid URL";
                }
            }
            if (validationRules[fieldName].notNegative && values[fieldName] < 0) {
                newErrors[fieldName] = "Number must not be negative";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            submitHandler(values);
        }
    };

    return {
        values,
        onChange,
        errors,
        onSubmit,
        setValues
    }
}

export default useForm;