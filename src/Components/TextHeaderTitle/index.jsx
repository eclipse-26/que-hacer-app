import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TextHeaderTitle({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontFamily:"bebas-neue",
    fontSize: 24
  }
})