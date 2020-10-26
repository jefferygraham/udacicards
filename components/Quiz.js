import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {
  state = {
    showQuestion: true,
    answered: false,
    questionIdx: 0,
    right: 0,
    wrong: 0,
  };

  nextQuestion = (decks, deckTitle) => {
    let numQuestions = decks[deckTitle].questions.length;
    if (this.state.questionIdx < numQuestions - 1) {
      this.setState(() => ({
        questionIdx: this.state.questionIdx + 1,
        showQuestion: true,
        answered: false,
      }));
    } else {
      Alert.alert(
        'Score',
        `${this.state.right} out of ${
          this.state.right + this.state.wrong
        } correct. \n${(
          (this.state.right / (this.state.right + this.state.wrong)) *
          100
        ).toFixed(0)}%`,
        [
          {
            text: 'Restart Quiz',
            onPress: () =>
              this.setState({
                showQuestion: true,
                answered: false,
                questionIdx: 0,
                right: 0,
                wrong: 0,
              }),
            style: 'cancel',
          },
          {
            text: 'Back to Deck',
            onPress: () =>
              this.props.navigation.navigate('Deck', { deckTitle }),
          },
        ],
        { cancelable: false }
      );
    }
  };

  handlePress = (choice) => {
    this.setState(() => ({
      answered: true,
      [choice]: this.state[choice] + 1,
    }));
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
          <Text>Right: {this.state.right}</Text>
          <Text>Wrong: {this.state.wrong}</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          {this.state.showQuestion ? (
            <View>
              <Text style={{ textAlign: 'center' }}>
                {deck.questions[this.state.questionIdx].question}
              </Text>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => this.setState({ showQuestion: false })}
              >
                <Text style={{ textAlign: 'center' }}>Answer</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={{ textAlign: 'center' }}>
                {deck.questions[this.state.questionIdx].answer}
              </Text>
              <TouchableOpacity
                delayPressIn={0}
                onPress={() => this.setState({ showQuestion: true })}
              >
                <Text style={{ textAlign: 'center' }}>Question</Text>
              </TouchableOpacity>
            </View>
          )}
          <View>
            <TouchableOpacity
              style={styles.button}
              delayPressIn={0}
              onPress={() => this.handlePress('right')}
              disabled={this.state.showQuestion || this.state.answered}
            >
              <Text style={{ textAlign: 'center' }}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              delayPressIn={0}
              onPress={() => this.handlePress('wrong')}
              disabled={this.state.showQuestion || this.state.answered}
            >
              <Text style={{ textAlign: 'center' }}>Incorrect</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              delayPressIn={0}
              style={styles.button}
              onPress={() => this.nextQuestion(decks, deckTitle)}
              disabled={!this.state.answered}
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
