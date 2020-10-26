import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';

class AddDeck extends Component {
  state = {
    newDeckTitle: '',
  };

  submit = () => {
    const { newDeckTitle } = this.state;

    const deck = {
      [newDeckTitle]: {
        title: newDeckTitle,
        questions: [],
      },
    };

    this.props.dispatch(addDeck(deck));

    saveDeckTitle(newDeckTitle);

    this.setState(() => ({
      newDeckTitle: '',
    }));
  };

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
          <Text>TITLE OF NEW DECK</Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ newDeckTitle: text })}
            value={this.state.newDeckTitle}
            placeholder='Deck Title'
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          delayPressIn={0}
          onPress={() => {
            this.submit();
            this.props.navigation.navigate('Deck', {
              deckTitle: this.state.newDeckTitle,
            });
          }}
        >
          <Text>ADD DECK</Text>
        </TouchableOpacity>
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

export default connect()(AddDeck);
