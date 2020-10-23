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

function AddCard() {
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
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          placeholder='Answer'
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text>SUBMIT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default AddCard;
