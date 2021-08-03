import styled from 'styled-components';

const ButtonSub = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  background-color: green;
  :focus {
    outline: none;
  }
  :active {
    transform: scale(0.98);
  }
`;

const Button = ({ color, text, onClick }) => {
  return <ButtonSub onClick={onClick}>{text}</ButtonSub>;
};

export default Button;
