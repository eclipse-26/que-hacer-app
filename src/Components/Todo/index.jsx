import { View, Text } from 'react-native'
import React from 'react'

export default function Todo({text}) {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}