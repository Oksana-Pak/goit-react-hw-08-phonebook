import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Container,
  FormTitle,
  Input,
  Button,
  DropFirst,
  DropSecond,
  DropThird,
  DropForth,
  DropFifth,
} from '../LoginForm/LoginForm.styled';
import { FormRegister } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <section>
      <Container>
        <FormRegister onSubmit={handleSubmit} autoComplete="off">
          <FormTitle>Welcome</FormTitle>
          <Input type="text" name="name" placeholder="Username" />

          <Input type="email" name="email" placeholder="Email" />

          <Input type="password" name="password" placeholder="Password" />

          <Button type="submit">Sign Up</Button>
        </FormRegister>
        <div>
          <DropFirst></DropFirst>
          <DropSecond></DropSecond>
          <DropThird></DropThird>
          <DropForth></DropForth>
          <DropFifth></DropFifth>
        </div>
      </Container>
    </section>
  );
};
