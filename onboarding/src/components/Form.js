import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';


function LoginForm({ errors, touched }) {
    return (
        <form>
            <div>
            {touched.username && errors.username && <p>{errors.username}</p>} 
            </div>
            <Field
            type="text"
            name="username"
            placeholder="Name:"
            />
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}    
            </div>
            <Field
            type="email"
            name="email"
            placeholder="Email:"
            />
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
            <Field
            type="password"
            name="password"
            placeholder="Password:"
            />
            <input type="checkbox" name="tos" onChange={event => console.log(event)}></input>
            <button>Submit!</button>
        </form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },

    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required("Error 1: username is required"),
        email: Yup.string()
            .email()
            .required("Error 2: email is required"),
        password: Yup.string()
            .min(6)
            .required("Error 3: password is required")
    }),
    //======END VALIDATION SCHEMA======

    handleSubmit(values) {
        console.log(values);
    }

})(LoginForm);

export default FormikLoginForm;