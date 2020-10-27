import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
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
    if (newDeckTitle === '') {
      Alert.alert(
        'Alert',
        'Please enter a title for your new deck!',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false }
      );
    } else {
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

      this.props.navigation.navigate('Deck', {
        deckTitle: this.state.newDeckTitle,
      });
    }
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          justifyContent: 'space-around',
        }}
      >
        <View>
          <Text
            style={{ textAlign: 'center', paddingBottom: 10, fontSize: 21 }}
          >
            What is the title of your new deck?
          </Text>
          <TextInput
            style={styles.input}
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
          }}
        >
          <Text style={{ color: 'white' }}>ADD DECK</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    paddingVertical: 15,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    paddingLeft: 10,
  },
});

function mapStateToProps(state) {
  const deckTitles = Object.keys(state).map((deck) => ({
    title: state[deck].title,
    questions: state[deck].questions,
  }));

  return {
    deckTitles,
  };
}

export default connect(mapStateToProps)(AddDeck);
