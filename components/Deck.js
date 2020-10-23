import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { addDeck } from '../actions';

function Deck({ route, navigation }) {
  const { deckTitle } = route.params;
  const { navigate } = navigation;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <View>
        <Text style={{ textAlign: 'center' }}>{deckTitle}</Text>
        <Text style={{ textAlign: 'center' }}># of cards</Text>
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('AddCard', { deckTitle })}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('Quiz', { deckTitle })}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('deleting deck!')}>
          <Text style={{ textAlign: 'center' }}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Deck;
