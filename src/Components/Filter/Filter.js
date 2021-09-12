import { useSelector, useDispatch } from "react-redux";
import { phonebookActions, phonebookSelectors } from "Redux/phonebook";

import styles from "./Filter.module.scss";

const Filter = () => {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = (event) =>
    dispatch(phonebookActions.changeFilter(event.target.value));

  return (
    <label className={styles.filter}>
      <p className={styles.text}>Search Contact</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
