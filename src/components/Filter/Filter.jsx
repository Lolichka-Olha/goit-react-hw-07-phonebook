import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={value} onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
