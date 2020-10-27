import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import Main from './components/Main';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk, logger))}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </Provider>
    );
  }
}
