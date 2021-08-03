import Card from '../Card';
import styled from 'styled-components';

const List = styled.div`
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  > div {
    flex: 0 40%;
  }
  h1 {
    text-align: center;
    margin-top: 40%;
  }
`;

const Cards = ({ cards, onDelete }) => {
  return (
    <List>
      {cards.map((card) => (
        <Card card={card} onDelete={onDelete} />
      ))}
    </List>
  );
};

export default Cards;
