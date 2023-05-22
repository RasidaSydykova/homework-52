import React from 'react';

interface ICardViewProps extends React.PropsWithChildren{
  rank: string;
  suit: string;
  children?: string;
}

const СardView: React.FC<ICardViewProps> = props => {
  const cardClasses = `card rank-${props.rank} ${props.suit}`;

  const suits = ['♦', '♥', '♣', '♠'];

  if (`${props.suit}` === 'diams') {
    return (
      <div className="playingCards faceImages">
        <span className={cardClasses.toLowerCase()}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suits[0]}</span>
        </span>
      </div>
    );
  } else {
    if (`${props.suit}` === 'hearts') {
      return (
        <div className="playingCards faceImages">
          <span className={cardClasses.toLowerCase()}>
            <span className="rank">{props.rank}</span>
            <span className="suit">{suits[1]}</span>
          </span>
        </div>
      );
  }
} if (`${props.suit}` === 'clubs') {
    return (
      <div className="playingCards faceImages">
        <span className={cardClasses.toLowerCase()}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suits[2]}</span>
        </span>
      </div>
    );
  } if (`${props.suit}` === 'spades') {
    return (
      <div className="playingCards faceImages">
        <span className={cardClasses.toLowerCase()}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suits[3]}</span>
        </span>
      </div>
    );
  }
  return null;
};
  export default СardView;