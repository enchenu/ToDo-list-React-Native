import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Empty() {
  return (
    <View>
      <Text style={styles.title}>Sua lista de task está vazia!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlingn: "center",
    color: "white",
    marginTop: 25,
  },
});