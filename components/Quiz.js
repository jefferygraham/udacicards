import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

class Quiz extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          alignItems: 'center',
        }}
      >
        <View style={{ alignSelf: 'flex-start' }}>
          <Text>1/5</Text>
        </View>
        {true ? (
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View>
              <Text style={{ textAlign: 'center' }}>QUESTION TEXT</Text>
              <TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>Answer</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: 'center' }}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: 'center' }}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <View>
              <Text style={{ textAlign: 'center' }}>YES/NO</Text>
              <TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>Question</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: 'center' }}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={{ textAlign: 'center' }}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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

export default Quiz;
