import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';
import { useId } from 'react';

import style from './ContactForm.module.css';

const initValues = {
  name: '',
  number: '',
};

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required(),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone must be in format 111-11-11')
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required(),
});

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    addContact(newContact);

    actions.resetForm();
  };

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      <Form className={style.form}>
        <div className={style.fieldWrapper}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.field} name="name" type="text" id={nameId} />
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>

        <div className={style.fieldWrapper}>
          <label htmlFor={numberId}>Number</label>
          <Field className={style.field} name="number" type="text" id={numberId} />
          <ErrorMessage className={style.error} name="number" component="span" />
        </div>

        <button className={style.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;