import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const TodoContext = React.createContext()

export default function TodoProvider( { children } ) {

    const [todos, setTodos] = useState([])
    const [showAddTodoModal, setShowTodoModal] = useState(false)
    const [counterTodos, setCounterTodos] = useState(0)
    const [ viewTodoModal, setViewTodoModal ] = useState('')
    const [ currentIndexTodo, setCurrentIndexTodo ] = useState(0)

    useEffect(()=>{
      ( async ()=>{
      if(!await AsyncStorage.getItem("TODOS")){
        setTodos([])
      }else{
        const response = await AsyncStorage.getItem("TODOS")
        setTodos(JSON.parse(response))
      }
      return(
        getTodos()
      )
    })()
  },[])

    const addTodo = (newTodo) =>{
      const newTodos = [...todos]
      newTodos.push({text: newTodo, check: false})
      setTodos(newTodos)
      saveTodos(newTodos)
    }

    const deleteTodo = (index) =>{
      const newTodos = [...todos]
      newTodos.splice(index, 1)
      setTodos(newTodos)
      saveTodos(newTodos)
    }

    const updateTodo = (index, text) =>{
      const newTodos = [...todos]
      newTodos[index].text = text
      setTodos(newTodos)
      saveTodos(newTodos)
    }

    const checkTodo = (index) =>{
      const newTodos = [...todos]
      newTodos[index].check = !newTodos[index].check 
      setTodos(newTodos)
      saveTodos(newTodos)
    }

    const getTodos = async () =>{
      try {
        const todosLS = await AsyncStorage.getItem("TODOS")
        console.log(todosLS)
        return todosLS
      } catch (error) {
        console.log(error)
      }
    }

    const saveTodos = async (todos) =>{
      try {
        await AsyncStorage.setItem("TODOS", JSON.stringify(todos))
        // getTodos()
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(()=>{
      const checkTodosTotal = todos.filter(todo=> todo.check).length
      setCounterTodos(checkTodosTotal)
    },[todos])
    

  return (
    <TodoContext.Provider
        value={{
            todos,
            addTodo,
            deleteTodo,
            checkTodo,
            showAddTodoModal,
            setShowTodoModal,
            counterTodos,
            viewTodoModal,
            setViewTodoModal,
            currentIndexTodo,
            setCurrentIndexTodo,
            updateTodo,
        }}
    >
        {children}
    </TodoContext.Provider>
  )
}