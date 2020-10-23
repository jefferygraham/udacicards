import AsyncStorage from '@react-native-async-storage/async-storage';

import { DECK_STORAGE_KEY, setData } from './_DATA';

// getDecks(): return all of the decks along with their titles, questions, and answers.
// getDeck(deckId): take in a single id argument and return the deck associated with that id.
// saveDeckTitle(title): take in a single title argument and add it to the decks.
// addCardToDeck(title, card): take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

// Notice each deck creates a new key on the object. Each deck has a title and a questions key. title is the title for the specific deck and questions is an array of questions and answers for that deck.

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(setData);
}
