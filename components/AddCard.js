import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

import { addCard } from '../actions';
import { addCardToDeck } from '../utils/api';

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
  };

  handlePress = (deckTitle) => {
    if (this.state.question === '' || this.state.answer === '') {
      Alert.alert(
        'Alert',
        'You must enter a question and answer!',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      const card = this.state;

      this.props.dispatch(addCard(deckTitle, card));

      this.setState({
        question: '',
        answer: '',
      });

      addCardToDeck(deckTitle, card);

      this.props.navigation.goBack();
    }
  };

  render() {
    const { deckTitle } = this.props.route.params;
    const {
      navigation: { goBack },
    } = this.props;

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
          <TextInput
            placeholder='Question?'
            value={this.state.question}
            style={[styles.input, { marginBottom: 15 }]}
            onChangeText={(question) => this.setState({ question: question })}
          />
          <TextInput
            placeholder='Answer'
            value={this.state.answer}
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer: answer })}
          />
        </View>
        <TouchableOpacity
          delayPressIn={0}
          style={styles.button}
          onPress={() => {
            this.handlePress(deckTitle);
          }}
        >
          <Text style={{ color: 'white' }}>SUBMIT</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 20,
    paddingLeft: 10,
  },
});

export default connect()(AddCard);
