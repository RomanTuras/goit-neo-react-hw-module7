import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps.js";
import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactCard}>
      <div className={css.contactInfo}>
        <div className={css.infoRow}>
          <FaUser />
          <span>{contact.name}</span>
        </div>
        <div className={css.infoRow}>
          <FaPhoneAlt />
          <span>{contact.number}</span>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
