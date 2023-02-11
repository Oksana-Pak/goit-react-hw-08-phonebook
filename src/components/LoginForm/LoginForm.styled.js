import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  padding: 45px;
  height: 320px;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    margin: 4px;
  }
`;
export const FormTitle = styled.p`
  font-weight: 500;
  color: #fff;
  opacity: 0.7;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;
export const Input = styled.input`
  width: 200px;
  padding: 15px;
  margin-bottom: 35px;
  font-weight: 500;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);

  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const Drop = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: all 0.2s ease;
`;
export const DropFirst = styled(Drop)`
  height: 80px;
  width: 80px;
  top: -20px;
  left: -40px;
  z-index: -1;
`;

export const DropSecond = styled(Drop)`
  height: 80px;
  width: 80px;
  bottom: -30px;
  right: -10px;
`;
export const DropThird = styled(Drop)`
  height: 100px;
  width: 100px;
  bottom: 120px;
  right: -50px;
  z-index: -1;
`;

export const DropForth = styled(Drop)`
  height: 120px;
  width: 120px;
  top: -60px;
  right: -60px;
`;
export const DropFifth = styled(Drop)`
  height: 60px;
  width: 60px;
  bottom: 170px;
  left: 90px;
  z-index: -1;
`;
