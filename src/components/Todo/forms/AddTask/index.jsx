import React from 'react'
import { Formik, Form, Field } from 'formik'
import AddIcon from '@material-ui/icons/Add'
import IconButton from 'components/Todo/IconButton'
import style from './AddTask.module.sass'

const initial = {
  taskField: "",
  submitButton: ""
};

function AddTask ({ handler }) {

  return (
    <Formik initialValues={initial}>
      <Form className={style.addTask}>
        <div className={style.flexRow}>
          <Field
            name='taskField'
            className={style.formInput}
            placeholder='Enter your task'
          />
          <Field component={CustomInputComponent} />
        </div>
      </Form>
    </Formik>
  )
}

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div>
    {console.log(field)}
    {console.log(props)}
    {/*<input type="text" {...field} {...props} />*/}
    <button name="submitButton" type="submit" {...field} {...props}>
      <AddIcon/>
    </button>
  </div>
);

export default AddTask
