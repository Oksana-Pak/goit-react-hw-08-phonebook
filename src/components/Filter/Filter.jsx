import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const changeFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    <Label htmlFor="filter">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => changeFilter(e.target.value)}
      />
    </Label>
  );
};
