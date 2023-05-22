import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import './App.css';
import './cards.css';


const App = () => {
  const [cards, setCards] = useState<Card[]>([]);

  const getCards = () => {
    const cardDeck = new CardDeck();
    const newCards = cardDeck.getCards(5);
    setCards(newCards);
  };

  if (cards.length === 0) {
    return <button onClick={getCards}>Deal cards</button>;
  }

  return (
    <div className="App">
      <CardView rank={cards[0].rank} suit={cards[0].suit} />
      <CardView rank={cards[1].rank} suit={cards[1].suit} />
      <CardView rank={cards[2].rank} suit={cards[2].suit} />
      <CardView rank={cards[3].rank} suit={cards[3].suit} />
      <CardView rank={cards[4].rank} suit={cards[4].suit} />
      <div>
        <button onClick={getCards}>Deal cards</button>
      </div>
    </div>
  );
};

export default App;