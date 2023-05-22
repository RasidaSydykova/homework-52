import Card from "./Card";

class CardDeck {
  private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  private readonly suits = ['diams', 'hearts', 'clubs', 'spades'];
  public deck: Card[] = [];

  constructor() {
    this.suits.forEach(suit => {
      this.ranks.forEach(rank => {
        const card = new Card(rank, suit);
        this.deck.push(card);
      });
    });
  }

  getCard(): Card[] {
    const array = this.deck;
    const random = Math.floor(Math.random() * array.length);
    array.splice(random, 1);
    return [array[random]];
  };

  getCards(howMany: number): Card[] {
    const array = this.deck;
    const unique = new Set()
    const newArray = []
    do {
      const random = Math.floor(Math.random() * array.length);
      if (unique.has(random)) continue
      unique.add(random);
      newArray.push(array[random]);
      array.splice(random, howMany);
    } while (unique.size < howMany)
    return newArray;
  };
};

export default CardDeck;