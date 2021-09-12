import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { phonebookOperations, phonebookSelectors } from "Redux/phonebook";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);

  const contacts = useSelector(phonebookSelectors.getVisibleContacts);
  const onDeleteContact = (id) =>
    dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p className={styles.contact}>
            {name}: <span className={styles.number}>{number}</span>
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
