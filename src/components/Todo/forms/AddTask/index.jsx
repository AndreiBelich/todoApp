import React from 'react';
import { Formik, Form, Field } from 'formik';
import { v4 as uuid } from "uuid";
import AddIcon from '@material-ui/icons/Add';
import useTask from "components/hooks/useTask";
import style from './AddTask.module.sass';

const initial = {
  taskField: "",
  submitButton: ""
};

function AddTask ({ handler }) {
  //const newTask = useTask();
  return (
    <Formik initialValues={initial} onSubmit={(values, actions) => {
      const { taskField } = values;
      //newTask.changeTitle(taskField);
      const newTask = {
        id: uuid(),
        isFinish: false,
        title: taskField
      };
      handler(newTask);
      actions.setSubmitting(false);
      actions.resetForm(initial);
    }}>
      <Form className={style.addTask}>
        <div className={style.flexRow}>
          <Field
            name='taskField'
            className={style.formInput}
            placeholder='Enter your task'
          />
          <Field name="submitButton" component={CustomInputComponent} />
        </div>
      </Form>
    </Formik>
  )
}

const CustomInputComponent = ({
  field,
  form,
  ...props
}) => (
  <div>
    {/*<input type="text" {...field} {...props} />*/}
    <button  type="submit" {...field} {...props}>
      <AddIcon/>
    </button>
  </div>
);

export default AddTask
