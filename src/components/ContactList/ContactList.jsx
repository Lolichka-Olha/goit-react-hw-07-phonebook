import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsSlice';
import {
  useGetContactsQuery,
  useDeleteContactsMutation,
} from '../../redux/services';
import { List, ListItem, Btn } from './ContactList.styled';

const ContactList = () => {
  const { data: contacts, isSuccess } = useGetContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();

  const filter = useSelector(getFilter);

  if (!isSuccess) {
    return;
  }

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return result;
  };
  // const getFilteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <List>
      {contacts &&
        getFilteredContacts().map(({ id, name, number }) => (
          <ListItem key={id} id={id} name={name} number={number}>
            {name}: {number}
            <Btn
              type="button"
              onClick={() => deleteContact(id)}
              disabled={isLoading}
            >
              Delete
            </Btn>
          </ListItem>
        ))}
    </List>
  );
};

export default ContactList;
