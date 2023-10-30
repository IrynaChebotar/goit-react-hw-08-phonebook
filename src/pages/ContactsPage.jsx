import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Filter } from '../components/ContactFilter/ContactFilter';
import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';

function Contacts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section>
      <ContactForm />
      <Filter />
      <ContactList />
    </section>
  );
}

export default Contacts;
