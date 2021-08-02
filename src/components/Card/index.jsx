import { FaTimes } from 'react-icons/fa';
import './styles.css';

const Card = ({ card, onDelete }) => {
  return (
    <div className='card'>
      <h3>
        {card.number}{' '}
        <FaTimes style={{ cursor: 'pointer' }} onClick={() => onDelete(card)} />
      </h3>
    </div>
  );
};

export default Card;
