import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import TextHeaderTitle from '../TextHeaderTitle'

export default function HeaderBar() {
  return (
    <View style={styles.header}>
        <Image style={styles.icon} source={require('../../../assets/icon.png')} />
        <TextHeaderTitle>¿Qué hacer hoy?</TextHeaderTitle>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icon:{
        width: 50,
        height: 50,
    }
})