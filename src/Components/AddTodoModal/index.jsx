import { View, Text, TextInput, StyleSheet, ToastAndroid } from 'react-native'
import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context'
import AddTodoButton from '../AddTodoButton'

export default function AddTodoModal() {
  const { setShowTodoModal, addTodo, viewTodoModal, currentIndexTodo, todos, updateTodo, deleteTodo } = useContext(TodoContext)
  const [newTodo, setNewTodo] = useState('')

  useState(()=>{
    console.log(todos[currentIndexTodo].text)
    setNewTodo(todos[currentIndexTodo].text)
  },[])

  console.log(newTodo)

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

  const updateTodoHandle = () =>{
    if(!newTodo){
      ToastAndroid.showWithGravity('Escribe una tarea', ToastAndroid.SHORT, ToastAndroid.CENTER)

    }
    else if(newTodo.length < 3){
      ToastAndroid.showWithGravity('Escribe una tarea más larga', ToastAndroid.SHORT, ToastAndroid.CENTER)
    }else{
      updateTodo(currentIndexTodo, newTodo)
      setShowTodoModal(false)
    }
  }

  
  const deleteTodoHandle = () =>{
    ToastAndroid.showWithGravity(`Item "${newTodo}" borrado`, ToastAndroid.SHORT, ToastAndroid.CENTER)
    deleteTodo(currentIndexTodo)
    setShowTodoModal(false)
  }

  const addTodoView = () =>(
    <>
      <Text style={styles.modalText}>Escribe el nuevo Item</Text>
      <TextInput
        editable
        placeholder='Nueva tarea...'
        style={styles.modalTextInput}
        maxLength={40} 
        textAlignVertical='top'
        rows={4}
        onChangeText={text=>setNewTodo(text)}
      />
      <AddTodoButton 
        touchFunction={()=>addTodoHandle()}
        icon="add"
        text="Agregar Item"
      />
    </>
  )

  const editTodoView = () =>(
    <>
      <Text style={styles.modalText}>Editar Item</Text>
      <TextInput
        editable
        placeholder='Nueva tarea...'
        style={styles.modalTextInput}
        maxLength={40} 
        textAlignVertical='top'
        rows={4}
        onChangeText={text=>setNewTodo(text)}
        value={newTodo}
        
      />
      <View style={styles.buttons}>
        <AddTodoButton touchFunction={()=>deleteTodoHandle()} icon="delete" text="Borrar" textColor="#aaa"/>
        <AddTodoButton touchFunction={()=>updateTodoHandle()} icon="update" text="Actualizar"/>
      </View>
    </>
  )
  const renderView = () => viewTodoModal === 'view-add' ? addTodoView() : editTodoView() 

  return (
    <View>
      <View style={styles.bg} onTouchEnd={()=>setShowTodoModal(false)}></View>
      <View style={styles.content} >
        <View style={styles.modal}>
          {renderView()}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
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
    marginBottom: 20
  },
  bg: {
    backgroundColor: '#0005',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row'
  }
})