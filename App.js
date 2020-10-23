import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import Main from './components/Main';
import reducer from './reducers';

export default function App() {
  return (
    <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
