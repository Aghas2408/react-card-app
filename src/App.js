import  Header  from "./components/Header";
import Cards from "./components/Cards";
import {useState} from 'react'
import Footer from "./components/Footer";
import Instruction from './components/Instruction'

function App() {

  const [cards,setCards] = useState([
    {
        id: 1,
        number: Math.floor(Math.random()*100), 
    },
    {
        id: 2,
        number: Math.floor(Math.random()*100), 
    },
    
    {
        id: 3,
        number: Math.floor(Math.random()*100), 
    }]) 

//Delete Card
const deleteCard = (id) =>{
 setCards(cards.filter((card) => card.id !==id))
}

//Add Card 
const addCard = () => {
  setCards(card => [...cards, {
    id: cards.length+1,
    number: Math.floor(Math.random()*100)
  }]);
}

//Sort Cards
const sortCard = () => {
  console.log('sort')
  const sorted = [...cards].sort((a, b) => {
      return b.number - a.number;
    });
    setCards(sorted);
}

  return (
    <div className='container'>
      <div className = 'leftdiv'>
        <div className='header'>
          <Header onAdd={addCard} onSort ={sortCard} />
        </div>
        {cards.length >0 ? <Cards cards={cards} onDelete = {deleteCard}/> : <div className = 'main'><h1>No Cards To Show</h1></div>}
        <Footer/>
      </div>
      <div className='rightdiv'>
        <Instruction/>
      </div>
    </div>
  );
}

export default App;
