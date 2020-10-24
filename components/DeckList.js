import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class DeckList extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const renderDeck = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() =>
            navigate('Deck', { deckTitle: item.title, deck: item })
          }
        >
          <Text style={{ textAlign: 'center' }}>{item.title}</Text>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
        }}
      >
        <FlatList
          data={this.props.deckTitles}
          renderItem={renderDeck}
          keyExtractor={(item) => item.title}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const deckTitles = Object.keys(state).map((deck) => ({
    title: state[deck].title,
    questions: state[deck].questions,
  }));

  return {
    deckTitles,
  };
}

export default connect(mapStateToProps)(DeckList);
