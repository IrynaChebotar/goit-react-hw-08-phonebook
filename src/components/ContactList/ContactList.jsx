import { useDispatch, useSelector } from 'react-redux';
import { List, Item, ContactName, DeleteButton } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <ContactName>
              {name}: {number}
            </ContactName>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            ></DeleteButton>
          </Item>
        );
      })}
    </List>
  );
};
