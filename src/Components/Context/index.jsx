import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const TodoContext = React.createContext()

export default function TodoProvider( { children } ) {

    const [todos, setTodos] = useState({})

    useEffect(()=>{
      setTodos([{text: "Recoger papá"}, {text: "Estudiar"}])
    },[])

  return (
    <TodoContext.Provider
        value={{
            todos,
        }}
    >
        {children}
    </TodoContext.Provider>
  )
}