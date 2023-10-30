import React from 'react';
import { SearchForm, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const handleFilterChange = evt => {
    dispatch(setFilter(evt.currentTarget.value.toLowerCase()));
  };

  return (
    <SearchForm>
      <p>Find contacts by name</p>
      <Input
        name="search"
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </SearchForm>
  );
};
