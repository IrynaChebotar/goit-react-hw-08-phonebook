import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import { StyledForm, Input, FormBtn } from './ContactForm.styled.jsx';
import { getContacts } from '../../redux/contacts/selectors.js';
import { addContact } from '../../redux/contacts/operations.js';
import { setFilter } from '../../redux/contacts/filterSlice.js';

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  })
  .required();

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    const contactExists = contacts.find(contact => contact.name === name);
    if (contactExists) {
      return Notiflix.Notify.failure(`${name} is already in contacts.`, 100);
    }
    dispatch(addContact({ name, number }));
    dispatch(setFilter(''));
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <Input
        {...register('name')}
        type="text"
        id="name"
        placeholder="enter the contact name"
      />
      <label htmlFor="number">Number</label>
      <Input
        {...register('number')}
        type="tel"
        id="number"
        placeholder="enter the contact number"
      />
      <FormBtn type="submit">Add contact</FormBtn>
    </StyledForm>
  );
}
