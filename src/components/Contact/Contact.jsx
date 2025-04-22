import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

import style from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, handleDelete }) => {
  return (
    <div className={style.item}>
      <div>

        <h2 className={style.title}>
          <span className={style.icon}> <FaUserAlt /></span>
          {name}
        </h2>

        <p className={style.phone}>
          <span className={style.icon}><FaPhone /></span>
          {number}
        </p>

      </div>

      <button className={style.button__delete} onClick={() => handleDelete(id)} type="button">
        Delete
      </button>

    </div>
  );
};

export default Contact;