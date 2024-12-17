import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {selectFilteredContacts} from "../../redux/contactsSlice.js";
import css from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts ? (
        filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} />;
        })
      ) : (
        <li>No results found</li>
      )}
    </ul>
  );
};

export default ContactList;
