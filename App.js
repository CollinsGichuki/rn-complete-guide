import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


function CounterButton({ title, onIncrement}) {
  return <Button title={title} onPress={onIncrement} />
}

//Function Components take parameters(props) and returns a React Element
export default function App() {
  const add = (myNumber) => (myNumber + 5);

  const subtract = (myOtherNumber, myOtherOtherNumber) => {
    if (myOtherNumber > myOtherOtherNumber) {
      return myOtherNumber - myOtherOtherNumber;
    } else {
      return myOtherOtherNumber - myOtherNumber;
    }
  }

  const [count, setCount] = useState(0)

  const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text> { [10, 56, 98].map(add)}</Text>
      <Text style={{fontSize : 120 }}>{ subtract(23, 34)}</Text>
      <CounterButton 
      title={`Click the button to increase the count: ${count}`} 
      onIncrement = {() => setCount(count + 1)}/>
      <TextInput 
      value={text}
      style={{ fontSize: 32, color: 'steelblue'}}
      placeholder="Type here.."
      onChangeText={ (text) => {
        setText (text)
      }}
      />
      <Text style={{ fontSize: 21}}>{'\n'} You entered; {text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
