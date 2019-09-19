import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';


function LoginForm({ values, errors, touched }) {
    return (
        <Form>
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
            <label>
                Accept TOS
            <input type="checkbox" name="tos" checked={values.tos} onChange={(event) => console.log(event)}></input>
            </label>
            <button type="submit">Submit!</button>
        </Form>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ username, email, password, tos }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            tos: tos || false,
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

    // SUBMIT POST REQ
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "alreadytaken@atb.dev") {
          setErrors({ email: "That email is already taken" });
        } else {
          axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
              console.log(res); // Data was created successfully and logs to console
              resetForm();
              setSubmitting(false);
            })
            .catch(err => {
              console.log(err); // There was an error creating the data and logs to console
              setSubmitting(false);
            });
        }
      }
    // END POST

})(LoginForm);

export default FormikLoginForm;