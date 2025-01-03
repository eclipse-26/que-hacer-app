import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import Todo from '../Components/Todo'
import { TodoContext } from '../Components/Context'

export default function AppUI() {


  const { todos } = useContext(TodoContext)

  console.log("TODOS", todos)

  return (
    <View style={styles.content}>
      <View style={styles.todosContent}>
        <Text>Tareas Completadas</Text>
        <FlatList 
          data={todos}
          renderItem={({item})=><Todo  text={item.text}/>}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
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
})