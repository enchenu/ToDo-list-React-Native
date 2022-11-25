import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


export default function Task({ item, deleteItem }) {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <View 
      style={[
        styles.taskContainer, 
        {backgroundColor: check === false ? "#23395d" : "green"},
      ]}
    >

      {
        check === false ? (
          <TouchableOpacity style={styles.checkCircle} onPress={handleCheck} />
        ) : (
          <TouchableOpacity onPress={handleCheck}>
            <Image 
              style={styles.iconImage}
              source={require("../assets/verify-verified-check-icon.png")}
            />
         </TouchableOpacity>
        )
      }

      
      <View>
        <Text style={styles.tasktTitle}>{item.value}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteItem(item.key)}>
      <Image 
        style={styles.iconImage} 
        source={require("../assets/trash-icon.png")}
      />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    marginTop: 20,
    // backgroundColor: "#23395d",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  checkCircle: {
    borderWidth: 1,
    width: 25,
    height:25,
    borderRadius: 12,
    borderColor: "white",
  },
  tasktTitle: {
    color: "white",
    fontSize: 16,
    minWidth: 180,
    maxWidth: 180,
    paddingHorizontal: 15,
  },
  iconImage:{
    width: 25,
    height:25,
  },
});