import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { TodoContext } from "../Context";

export default function Todo({ index, text, check }) {
  const { deleteTodo, checkTodo, setShowTodoModal, setViewTodoModal, setCurrentIndexTodo, isDeleteOption } = useContext(TodoContext);

  const handleCheck = () => {
    checkTodo(index - 1);
  }

  const showModal = () =>{
    setViewTodoModal('view-edit')
    setShowTodoModal(true)
    setCurrentIndexTodo(index - 1)
  }

  return (
    <View style={[styles.content, check ? { ...styles.contentCheck } : null]}>
      <Text style={[styles.index, check ? { ...styles.indexCheck } : null]}>
        {index}.
      </Text>
      <Text
        style={[styles.text, check ? { ...styles.textCheck } : null]}
        onPress={() => handleCheck()}
      >
        {text}
      </Text>
      {
        isDeleteOption ?
          <MaterialIcons
            name="close"
            size={24}
            color={check ? "#000000" : "#FF0000"}
            onPress={() => {
              deleteTodo(index - 1);
            }}
          />
        :
        <MaterialIcons
          name="edit"
          size={24}
          color={check ? "#AAAAAA" : "#CCCCCC"}
          onPress={() => showModal()}
        />
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    maxWidth: "100%",
    marginBottom: 15,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: '#F2F2F2',
    shadowColor: '#000',
    shadowOffset: {width: 4, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 5.84,
    elevation: 2,
    borderRadius: 50,
  },
  contentCheck: {
    backgroundColor: '#A6DD40'
  },
  index: {
    width: 25,
    fontSize: 16,
    fontFamily: 'jost-medium'
  },
  indexCheck:{
    color: '#646464',
  },
  text: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'jost-regular'
  },
  textCheck: {
    textDecorationLine: 'line-through',
    color: '#646464',
  },
});
