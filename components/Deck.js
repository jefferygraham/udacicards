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

function Deck({ route, navigation, decks }) {
  const { deckTitle } = route.params;
  const { navigate } = navigation;

  const deck = decks[deckTitle];
  let numCards = deck.questions.length;

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
        <Text style={{ textAlign: 'center' }}>{numCards} card(s)</Text>
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

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(Deck);
