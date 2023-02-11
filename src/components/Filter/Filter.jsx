import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Label } from './Filter.styled';
import { Form, InputStyled } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    <Form>
      <Label htmlFor="filter">
        Find contact by name
        <InputStyled
          type="text"
          name="filter"
          value={value}
          onChange={e => changeFilter(e.target.value)}
        />
      </Label>
    </Form>
  );
};
