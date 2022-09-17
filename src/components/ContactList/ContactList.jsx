import { useSelector, useDispatch } from 'react-redux';
import {
  removeContact,
  getContacts,
  getFilter,
} from '../../redux/contactsSlice';
import { List, ListItem, Btn } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return result;
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  let renderContacts = filter === '' ? contacts : getFilteredContacts();

  return (
    <List>
      {renderContacts.map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number}>
          {name}: {number}
          <Btn type="button" onClick={() => deleteContact(id)}>
            Delete
          </Btn>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
