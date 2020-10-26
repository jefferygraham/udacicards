import React, { Component } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
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
    const card = this.state;

    this.props.dispatch(addCard(deckTitle, card));

    this.setState({
      question: '',
      answer: '',
    });

    addCardToDeck(deckTitle, card);
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
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(question) => this.setState({ question: question })}
          />
          <TextInput
            placeholder='Answer'
            value={this.state.answer}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(answer) => this.setState({ answer: answer })}
          />
        </View>
        <TouchableOpacity
          delayPressIn={0}
          style={styles.button}
          onPress={() => {
            this.handlePress(deckTitle);
            goBack();
          }}
        >
          <Text>SUBMIT</Text>
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

export default connect()(AddCard);
