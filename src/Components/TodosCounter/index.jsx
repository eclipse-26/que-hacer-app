import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../Context'

export default function TodosCounter() {
  const { todos, counterTodos } = useContext(TodoContext)
  return (
    <View>
      <Text style={styles.text}>Tareas Completadas</Text>
      <Text style={[styles.text, {...styles.textCounter}]}>
        <Text style={styles.textCount}>{counterTodos}</Text> / {todos.length}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'jost-medium',
    fontSize: 18
  },
  textCounter: {
    color: "#646464",
  },
  textCount: {
    color: '#FF5C00'
  }
})