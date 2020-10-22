import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeckList from './DeckList';
import AddDeck from './AddDeck';
import AddQuestion from './AddQuestion';
import Deck from './Deck';
import Quiz from './Quiz';

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
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
  render() {
    return (
      // <Stack.Navigator>
      //   <Stack.Screen name='Home' component={Home} />
      //   <Stack.Screen name='Deck 1' component={Deck} />
      //   <Stack.Screen name='Deck 1' component={AddQuestion} />
      //   <Stack.Screen name='Quiz' component={Quiz} />
      // </Stack.Navigator>
      <Deck />
    );
  }
}

export default Main;
