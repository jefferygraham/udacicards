import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Card, Tile } from 'react-native-elements';

class DeckList extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const renderDeck = ({ item }) => {
      return (
        <TouchableOpacity
          delayPressIn={0}
          onPress={() =>
            navigate('Deck', { deckTitle: item.title, deck: item })
          }
        >
          <Card containerStyle={{ alignItems: 'center' }}>
            <Card.Title>{item.title.toUpperCase()}</Card.Title>
            <Card.Divider />
            <Image
              source={require('./images/flash-card.png')}
              resizeMode='contain'
            />
          </Card>
        </TouchableOpacity>
      );
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'stretch',
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

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
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

export default connect(mapStateToProps)(DeckList);
