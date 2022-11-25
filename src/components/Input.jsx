import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native'

export default function input({ submitHandler }) {
  const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  }
  const handleAddHabit = () => {
    setValue(submitHandler(value));
    setValue("");
    Keyboard.dismiss();
  };

  return (
    <View>
      <View>
        <TextInput
          placeholder="Adicione sua task!"
          placeholderTextColor="#bbbb"
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddHabit} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    witdth: 200,
    color: "white",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  button: {
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingVertical:15,
    marginTop: 25,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});