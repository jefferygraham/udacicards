import AsyncStorage from '@react-native-async-storage/async-storage';

import { DECK_STORAGE_KEY, setData } from './_DATA';

// getDecks(): return all of the decks along with their titles, questions, and answers.
// getDeck(deckId): take in a single id argument and return the deck associated with that id.
// saveDeckTitle(title): take in a single title argument and add it to the decks.
// addCardToDeck(title, card): take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(setData);
}

export function saveDeckTitle(title) {
  const deck = {
    [title]: {
      title: title,
      questions: [],
    },
  };
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
}

export function addCardToDeck(title, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const decks = JSON.parse(results);

    decks[title] = {
      ...decks[title],
      quetsions: [
        ...decks[title].questions,
        { question: card.question, answer: card.answer },
      ],
    };

    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
  });
}

export function deleteDeck(title) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then((results) => {
    const decks = JSON.parse(results);
    decks[title] = undefined;
    delete decks[title];
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
  });
}
