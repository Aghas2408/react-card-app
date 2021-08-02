import { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Instruction from './components/Instruction';

const App = () => {
  const [cards, setCards] = useState([]);

  //Delete Card
  const deleteCard = (card) => {
    var array = [...cards];
    var index = array.indexOf(card);
    if (index == -1) {
      throw new Error('Indxes not fount');
    }
    array.splice(index, 1);
    setCards(array);
  };

  //Add Card
  const addCard = () => {
    const newArr = [...cards];
    newArr.push({
      number: Math.floor(Math.random() * 100),
    });
    setCards(newArr);
  };

  //Sort Cards
  const sortCard = () => {
    const newArr = [...cards]
    const sorted = newArr.sort((a, b) =>  b.number - a.number);
    setCards(sorted);
  };

  return (
    <div className='container'>
      <div className='leftdiv'>
        <div className='header'>
          <Header onAdd={addCard} onSort={sortCard} />
        </div>
        {cards.length > 0 ? (
          <Cards cards={cards} onDelete={deleteCard} />
        ) : (
          <div className='emptymain'>
            <h1>No Cards To Show</h1>
          </div>
        )}
        <Footer />
      </div>
      <div className='rightdiv'>
        <Instruction />
      </div>
    </div>
  );
};

export default App;
