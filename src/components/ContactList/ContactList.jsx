import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);
  const filteredContacts = filter
    ? getFilteredContacts(contacts, filter)
    : contacts;

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
