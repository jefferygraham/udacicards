import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {
  state = {
    showAnswer: false,
    questionIdx: 0,
  };

  nextQuestion = (decks, deckTitle) => {
    let numQuestions = decks[deckTitle].questions.length;
    if (this.state.questionIdx < numQuestions - 1) {
      this.setState(() => ({
        questionIdx: this.state.questionIdx + 1,
      }));
    }
  };

  render() {
    const { navigation, route, decks } = this.props;
    const { deckTitle } = route.params;

    const deck = decks[deckTitle];

    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
        }}
      >
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>
            {this.state.questionIdx + 1}/{deck.questions.length}
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          {this.state.showAnswer ? (
            <View>
              <Text style={{ textAlign: 'center' }}>
                {deck.questions[this.state.questionIdx].answer}
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ showAnswer: false })}
              >
                <Text style={{ textAlign: 'center' }}>Question</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={{ textAlign: 'center' }}>
                {deck.questions[this.state.questionIdx].question}
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ showAnswer: true })}
              >
                <Text style={{ textAlign: 'center' }}>Answer</Text>
              </TouchableOpacity>
            </View>
          )}
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={{ textAlign: 'center' }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{ textAlign: 'center' }}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.nextQuestion(decks, deckTitle)}
            >
              <Text style={{ textAlign: 'center' }}>Next</Text>
            </TouchableOpacity>
          </View>
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

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(Quiz);
