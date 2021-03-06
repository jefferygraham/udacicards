import * as React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import DeckList from './DeckList';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import Deck from './Deck';
import Quiz from './Quiz';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName='DeckList'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = focused ? 'cards' : 'cards-outline';
          } else if (route.name === 'Add Deck') {
            iconName = focused ? 'plus' : 'plus-outline';
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Decks' component={DeckList} />
      <Tab.Screen name='Add Deck' component={AddDeck} />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

class Main extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    getDecks().then((decks) => dispatch(receiveDecks(decks)));
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen
          name='Deck'
          component={Deck}
          options={({ route, navigation }) => ({
            headerTitle: route.params.deckTitle,
            headerLeft: () => (
              <HeaderBackButton
                onPress={() => {
                  navigation.push('Home');
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name='AddCard'
          component={AddCard}
          options={({ route }) => ({
            headerTitle: route.params.deckTitle,
          })}
        />
        <Stack.Screen
          name='Quiz'
          component={Quiz}
          options={({ route }) => ({
            headerTitle: `${route.params.deckTitle} Quiz`,
          })}
        />
      </Stack.Navigator>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(Main);
