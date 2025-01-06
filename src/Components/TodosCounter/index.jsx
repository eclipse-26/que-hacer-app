import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { TodoContext } from '../Context'
import TextDefault from '../TextDefault'

export default function TodosCounter() {
    const { todos, counterTodos } = useContext(TodoContext)
  return (
    <View>
      <TextDefault>{counterTodos} / {todos.length}</TextDefault>
    </View>
  )
}