import Card from '../Card'
import './styles.css';

const Cards = ({cards, onDelete}) => {
    return (
        <div className='main'>
            {cards.map((card) => (
                <Card key={card.id} card={card}
                onDelete = {onDelete}/>
            ))}
        </div>
    )
}

export default Cards
