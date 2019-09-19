import React from 'react'
import { Formik, Field, Form } from 'formik'
import logo from './fotoLogin/foto.png'
import './Form.scss'
import BasicFormSchema from './BasicFormSchema'

const FormLogin = () => {
  return (
    <div className="wrapper">
      <h2 className="header">
        <img src={logo} alt="" />
        Log-in to your account
      </h2>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={BasicFormSchema}
        onSubmit={value => {
          setTimeout(() => {
            alert(JSON.stringify(value, null, 2))
          }, 500)
        }}
        render={({ errors, touched }) => (
          <Form className="wrapper-form">
            <Field
              name="email"
              placeholder="E-mail address"
              type="email"
              className="address"
            />
            {errors.email && touched.email && (
              <div className="field-errors">{errors.email}</div>
            )}

            <Field
              name="password"
              placeholder="Password"
              type="password"
              className="password"
            />
            {errors.password && touched.password && (
              <div className="field-errors">{errors.password}</div>
            )}
            <button type="submit" className="push">
              Login
            </button>
          </Form>
        )}
      />
      <div className="text-link">
        New to us?
        <a href="#" className="link-up">
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default FormLogin
