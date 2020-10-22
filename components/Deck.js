import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Deck extends Component {
  render() {
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
          <Text style={{ textAlign: 'center' }}>DECK 1</Text>
          <Text style={{ textAlign: 'center' }}># of cards</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('adding card!')}
          >
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('starting quiz!')}
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
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Deck;
