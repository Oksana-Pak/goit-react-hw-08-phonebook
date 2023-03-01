import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Container,
  Form,
  FormTitle,
  Input,
  Button,
  DropFirst,
  DropSecond,
  DropThird,
  DropForth,
  DropFifth,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section>
      <Container>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormTitle>Welcome</FormTitle>
          <Input type="email" name="email" placeholder="Email" />

          <Input type="password" name="password" placeholder="Password" />

          <Button type="submit">Log In</Button>
        </Form>
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
