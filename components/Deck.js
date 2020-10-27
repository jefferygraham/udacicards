import React from 'react';
import { connect } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { deleteDeck } from '../utils/api';

function Deck({ route, navigation, decks }) {
  const { deckTitle } = route.params;
  const { navigate } = navigation;

  const deck = decks[deckTitle];
  let numCards = deck.questions.length;

  handlePress = (deckTitle) => {
    deleteDeck(deckTitle);
  };

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
        <Text style={{ textAlign: 'center', fontSize: 21, marginBottom: 5 }}>
          {deckTitle}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          {numCards} card(s)
        </Text>
      </View>

      <View>
        <TouchableOpacity
          delayPressIn={0}
          style={styles.button}
          onPress={() => navigate('AddCard', { deckTitle })}
        >
          <Text style={{ color: 'white' }}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          delayPressIn={0}
          style={styles.button}
          onPress={() => navigate('Quiz', { deckTitle })}
        >
          <Text style={{ color: 'white' }}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => {
            handlePress(deckTitle);
          }}
        >
          <Text style={{ textAlign: 'center', color: 'black' }}>
            Delete Deck
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(Deck);
