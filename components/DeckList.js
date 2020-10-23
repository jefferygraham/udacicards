import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

class DeckList extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const renderDeck = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => navigate('Deck', { deckTitle: item.title })}
        >
          <Text style={{ textAlign: 'center' }}>{item.title}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
        }}
      >
        <FlatList
          data={DATA}
          renderItem={renderDeck}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default DeckList;
