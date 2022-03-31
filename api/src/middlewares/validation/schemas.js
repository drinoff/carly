const yup = require("yup");

const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please input a valid email")
        .required("Email field cannot be empty"),
    password: yup
        .string()
        .min(8, "Password should be longer than 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
        )
        .required("Test error validation"),
    rePass: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please input a valid email")
        .required("Email field cannot be empty"),
    password: yup.string().required("Password field cannot be empty"),
});

const addCarSchema = yup.object().shape({
    brand: yup.string().min(2).required("Brand field cannot be empty"),
    logo: yup
        .string()
        .matches(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            "Please enter a valid logo URL"
        )
        .required("Logo field cannot be empty"),
    brandHistory: yup
        .string()
        .min(100)
        .required("Brand History field cannot be empty"),
});

const addModelSchema = yup.object().shape({
    model: yup.string().min(2).required("Model Name field cannot be empty"),
    avgPrice: yup.number().required("Average Price field cannot be empty"),
    description: yup
        .string()
        .min(100)
        .required("Description field cannot be empty"),
    pictures: yup
        .string()
        .matches(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            "Please enter a valid URL"
        ),
});

const yupSchemas = {
    registerSchema,
    loginSchema,
    addCarSchema,
    addModelSchema,
};

module.exports = yupSchemas;
