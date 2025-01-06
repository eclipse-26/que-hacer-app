import { View, Text, Button, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context'

export default function AddTodoModal() {
  const { setShowTodoModal, addTodo } = useContext(TodoContext)

  const [newTodo, setNewTodo] = useState('')

  const addTodoHandle = () =>{
    addTodo(newTodo)
    setShowTodoModal(false)
  }

  return (
    <View>
      <Text>Escribe la tarea</Text>
      <TextInput 
        placeholder='Nueva tarea...'
        onChangeText={text=>setNewTodo(text)}
      />
      <Button 
        title='Agregar'
        onPress={()=>{addTodoHandle()}}
      />
    </View>
  )
}