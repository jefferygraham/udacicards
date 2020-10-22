import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class Deck extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
        }}
      >
        <View>
          <Text>DECK 1</Text>
          <Text># of cards</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Deck;
