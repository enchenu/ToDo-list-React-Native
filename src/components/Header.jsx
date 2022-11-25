import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default function Header() {
  return (
    <View>
      <Text style={styles.title}>Onebitcode ToDo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "white",
    fotnWeight: "Bolt",
    textAlingn: "center",
  },
});