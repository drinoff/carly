const yup = require("yup");

const registerSchema = yup.object().shape({
    email: yup.string().email("Please input a valid email").required(),
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
    email: yup.string().email("Please input a valid email").required(),
    password: yup.string().required(),
});

const yupSchemas = {
    registerSchema,
    loginSchema,
};

module.exports = yupSchemas;
