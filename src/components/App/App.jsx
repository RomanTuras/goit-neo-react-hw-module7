import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "../Container/Container.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";
import NoContactsMsg from "../NoContactsMsg/NoContactsMsg.jsx";
import { fetchContacts } from "../../redux/operations.js";
import { getError, getIsLoading } from "../../redux/selectors.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      {!error && !isLoading && <ContactForm />}
      {!error &&
        !isLoading &&
        (contacts.length > 0 ? <SearchBox /> : <NoContactsMsg />)}
      {!error && !isLoading && <ContactList />}

      {isLoading && !error && <Loader />}
      {error && <ErrorMessage />}
    </Container>
  );
}

export default App;
