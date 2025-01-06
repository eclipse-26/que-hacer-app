import { View, Text, SafeAreaView, StyleSheet, FlatList, Button, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import Todo from '../Components/Todo'
import { TodoContext } from '../Components/Context'
import AddTodoModal from '../Components/AddTodoModal'
import TodosCounter from '../Components/TodosCounter'

export default function AppUI() {


  const { todos, showAddTodoModal, setShowTodoModal } = useContext(TodoContext)

  return (
    <View style={styles.content}>
      <View style={styles.todosContent}>
        <Text>Tareas Completadas</Text>
        <TodosCounter />
        <FlatList 
          data={todos}
          renderItem={({item, index})=><Todo 
            index={index+1}  
            text={item.text}
            check={item.check}
          />}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
      <Button 
        title='Agregar Tarea'
        onPress={()=>setShowTodoModal(true)}
      />
      {
        showAddTodoModal ? <AddTodoModal style={styles.addTodoModal}/> : null
      }
      <Modal
        visible={showAddTodoModal}
        >
        <AddTodoModal />
      </Modal>
      
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  todosContent:{
    backgroundColor: '#ccc',
    maxHeight: '50%',
    display: 'flex',
    width: '100%',
    padding: 15,
  },
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  addTodoModal: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#000',
    height: 100
  },
})