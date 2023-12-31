import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { StyledForm, Input, FormBtn, StyledError } from './ContactForm.styled';

import { createUser } from '../../redux/auth/authOperation';

export const registrationSchema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
      .string()
      .min(7, 'Password must be at least 7 characters long')
      .required('Password is required'),
  })
  .required();

export function RegisterForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', email: '', password: '' },
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = ({ name, email, password }) => {
    dispatch(createUser({ name, email, password }))
      .unwrap()
      .then(() => Notiflix.Notify.success('Account successfully created!'))
      .catch(e =>
        e === 'Request failed with status code 400'
          ? Notiflix.Notify.failure(
              'This user already exist! Use Log In button'
            )
          : Notiflix.Notify.failure('Something went wrong, try one nore time!')
      );
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <Input {...register('name')} type="text" id="name" />
        <StyledError>{errors.name?.message}</StyledError>
        <label htmlFor="email">Email</label>
        <Input {...register('email')} type="email" id="email" />
        <StyledError>{errors.email?.message}</StyledError>
        <label htmlFor="password">Password</label>
        <Input {...register('password')} type="password" id="password" />
        <StyledError>{errors.password?.message}</StyledError>
        <FormBtn type="submit">Register</FormBtn>
      </StyledForm>
    </>
  );
}
