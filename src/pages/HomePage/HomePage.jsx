import { ContainerWrap, Container, Title, SubTitle } from './HomePage.styled';
const HomePage = () => {
  return (
    <main>
      <ContainerWrap>
        <Container>
          <Title>Your personal Phone Book</Title>
          <SubTitle>
            You no longer need to use a notebook. With our site, all your phone
            numbers are collected in one convenient application
          </SubTitle>
        </Container>
      </ContainerWrap>
    </main>
  );
};

export default HomePage;
