import styled from 'styled-components';

export const ContactContainer = styled.ul`
  margin: 15px auto 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
`;
