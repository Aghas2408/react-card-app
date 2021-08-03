import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Instruction from './components/Instruction';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .container {
    display: flex;
    width: 100%;
    margin: 30px auto;
    min-height: 500px;
    overflow: auto;
    border: 1px solid steelblue;
    border-radius: 5px;
  }

  .emptymain {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leftdiv {
    width: 70%;
  }

  .rightdiv {
    width: 30%;
    border-left: 1px solid steelblue;
  }
`;

const App = () => {
  const [cards, setCards] = useState([]);

  //Delete Card
  const deleteCard = (card) => {
    var array = [...cards];
    var index = array.indexOf(card);
    if (index === -1) {
      return;
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
    const newArr = [...cards];
    const sorted = newArr.sort((a, b) => b.number - a.number);
    setCards(sorted);
  };

  return (
    <>
      <GlobalStyle />
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
    </>
  );
};

export default App;
