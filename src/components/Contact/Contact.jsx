import { FaUser } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';

import style from './Contact.module.css';

const Contact = ({ contact: { id, name, number }, handleDelete }) => {
  return (
    <div className={style.item}>
      <div>
        <h2 className={style.title}>
          <span className={style.icon}>
            <FaUser />
          </span>
          {name}
        </h2>
        <p className={style.tel}>
          <span className={style.icon}>
            <BsFillTelephoneFill />
          </span>
          {number}
        </p>
      </div>
      <button className={style.btnDel} onClick={() => handleDelete(id)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;