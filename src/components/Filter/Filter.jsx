import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

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
