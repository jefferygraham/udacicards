import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeckList from './DeckList';
import AddDeck from './AddDeck';

const Tab = createBottomTabNavigator();

class Main extends React.Component {
  render() {
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

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
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
}

export default Main;
