import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TodoContext } from "../Context";
import TextDefault from "../TextDefault";

export default function Todo({ index, text, check }) {
  const { deleteTodo, checkTodo } = useContext(TodoContext);

  const handleCheck = () => {
    checkTodo(index - 1);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.index}>{index}</Text>
      <Text
        style={[styles.text, check ? { ...styles.check } : null]}
        onPress={() => handleCheck()}
      >
        {text}
      </Text>
      <Ionicons
        name="close"
        size={24}
        color="red"
        onPress={() => {
          deleteTodo(index - 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "100%",
    marginBottom: 20,
  },
  index: {
    width: 15,
  },
  text: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  check: {
    backgroundColor: "lime",
  },
});
