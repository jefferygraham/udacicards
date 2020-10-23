// getDecks(): return all of the decks along with their titles, questions, and answers.
// getDeck(deckId): take in a single id argument and return the deck associated with that id.
// saveDeckTitle(title): take in a single title argument and add it to the decks.
// addCardToDeck(title, card): take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

// Notice each deck creates a new key on the object. Each deck has a title and a questions key. title is the title for the specific deck and questions is an array of questions and answers for that deck.

export function decks() {
  return {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer:
            'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  };
}
