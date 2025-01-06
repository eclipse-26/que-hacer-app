import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../Context'

export default function TodosCounter() {
    const { todos, counterTodos } = useContext(TodoContext)
  return (
    <View>
      <Text>{counterTodos} / {todos.length}</Text>
    </View>
  )
}