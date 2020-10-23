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

    this.setState(() => ({
      newDeckTitle: '',
    }));

    saveDeckTitle(deck);
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
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.submit}>
          <Text>Press Here</Text>
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
