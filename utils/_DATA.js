import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECK_STORAGE_KEY = 'UdaciCards:calendar';

let decks = {
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

export function setData() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));

  return decks;
}