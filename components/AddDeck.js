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

class AddDeck extends Component {
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
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('pressed!')}
        >
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

export default AddDeck;
