import { useId } from 'react';

import style from './SearchBox.module.css';

const SearchBox = ({ handleChange, value }) => {
  const searchId = useId();

  return (
    <label htmlFor={searchId}>
      Find contacts by name
      <input className={style.input} onChange={handleChange} value={value} type="text" name="search" id={searchId} />
    </label>
  );
};

export default SearchBox;