import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { connect, useDispatch } from "react-redux";

import * as Yup from "yup";
import { login } from '../redux/authReducer';

const Login = () => {

 
    const dispatch = useDispatch()
 
 
    return (
       <div>
          <h2> Login </h2>
 
          <Formik
             initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                general: '',
                captcha: ''
             }}
            //  validate={validateEmailField}
            //  validationSchema={validationSchema}
 
             onSubmit={(
                values,
                submitMethods) => {
 
                let {setFieldValue, setSubmitting} = submitMethods
 
                dispatch(login(
                   values,
                   setFieldValue,
                   setSubmitting))
             }}
          >
             {(propsF) => {
                let {status, values, isSubmitting} = propsF
                //console.log( status );
                //console.log( values.general );
                //console.log( propsF.isSubmitting );
 
                return (
                   <Form>
                      <div>
 
                         {values.general &&
                            <div>
                               _.{values.general} - with setFieldValue
                            </div>}
 
                         {status &&
                            <div className="validationErrorMessage">
                               ..{status}
                            </div>}
 
                         <div>
                            <Field
                               name={'email'}
                               type={'text'}
                               placeholder={'email'} />
                         </div>
                         <ErrorMessage name='email'>
                           
                         </ErrorMessage>
 
                         <div>
                            <Field
                               name={'password'}
                               type={'password'}
                               placeholder={'password'} />
                         </div>
                         <ErrorMessage name='password'>
                          
                         </ErrorMessage>
 
                         <div>
                            <Field
                               type={'checkbox'}
                               name={'rememberMe'}
                               id='rememberMe' />
                            <label htmlFor={'rememberMe'}> remember me </label>
                         </div>
 
                         <button type={'submit'}
                                 disabled={isSubmitting}
                                 className="submit-button"
                         >{isSubmitting ? 'Please wait...' : 'Submit'}</button>
                         <br /><br />
 
                      </div>
                   </Form>
                )
             }
             }
          </Formik>
 
       </div>
    )
 }

export default Login;
