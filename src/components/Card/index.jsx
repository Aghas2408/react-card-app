import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

const Number = styled.div`
  width: 100%;
  background: #f4f4f4;
  margin-bottom: 5px;
  margin-left: 5%;
  margin-top: 5px;
  padding: 10px 20px;
  cursor: pointer;
  height: 100px;
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Card = ({ card, onDelete }) => {
  return (
    <Number>
      <h3>
        {card.number}{' '}
        <FaTimes style={{ cursor: 'pointer' }} onClick={() => onDelete(card)} />
      </h3>
    </Number>
  );
};

export default Card;
