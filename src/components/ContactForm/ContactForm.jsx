import { Formik, Form, ErrorMessage, Field  } from 'formik';
import * as Yup from 'yup';

import { nanoid } from 'nanoid';
import { useId } from 'react';

import style from './ContactForm.module.css';

const initialValue = {
  name: '',
  number: '',
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Format must be 111-11-11')
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
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
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValue}
      validationSchema={ValidationSchema}
    >
      <Form className={style.form}>

        <div className={style.form__wrapper}>
          <label htmlFor={nameId} className={style.label}>
            Name
          </label>
          <Field className={style.field} id={nameId} name="name" type="text"  />
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>

        <div className={style.form__wrapper}>
          <label htmlFor={numberId} className={style.label}>
            Number
          </label>
          <Field className={style.field} id={numberId} name="number" type="text"  />
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