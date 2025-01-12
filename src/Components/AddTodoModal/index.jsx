import { View, Text, Button, TextInput, StyleSheet, TouchableWithoutFeedback, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context'
import AddTodoButton from '../AddTodoButton'

export default function AddTodoModal() {
  const { setShowTodoModal, addTodo } = useContext(TodoContext)

  const [newTodo, setNewTodo] = useState('')

  const addTodoHandle = () =>{
    if(!newTodo){
      ToastAndroid.showWithGravity('Escribe una tarea', ToastAndroid.SHORT, ToastAndroid.CENTER)

    }
    else if(newTodo.length < 3){
      ToastAndroid.showWithGravity('Escribe una tarea más larga', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      addTodo(newTodo)
      setShowTodoModal(false)
    }
    
  }

  return (
    <View>
      <View style={styles.bg} onTouchEnd={()=>setShowTodoModal(false)}></View>
      <View style={styles.content} >
        <View style={styles.modal}>
          <Text style={styles.modalText}>Escribe la tarea</Text>
          <TextInput
            editable
            placeholder='Nueva tarea...'
            style={styles.modalTextInput}
            multiline
            numberOfLines={4}
            maxLength={40} 
            textAlignVertical='top'
            rows={4}
            onChangeText={text=>setNewTodo(text)}
            
          />
          <AddTodoButton touchFunction={()=>addTodoHandle()}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    // backgroundColor: "#0005",
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontFamily: 'jost-medium',
    fontSize: 16,
    marginBottom: 10
  },
  modalTextInput:{
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#efefef',
    fontSize: 16,
    height: 100,
    marginBottom: 20
  },
  bg: {
    backgroundColor: '#0005',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
})