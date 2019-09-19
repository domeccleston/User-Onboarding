import React from 'react';
import { withFormik, Form, Field } from "formik";

function LoginForm() {
    return (
        <form>
            <Field
            type="text"
            name="username"
            placeholder="Name:"
            />
            <Field
            type="email"
            name="email"
            placeholder="Email:"
            />
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

    handleSubmit(values) {
        console.log(values);
    }

})(LoginForm);

export default FormikLoginForm;