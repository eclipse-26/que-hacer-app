import { View, Image, StyleSheet, Text } from 'react-native'
import React, { useState, useContext } from 'react'
import TextHeaderTitle from '../TextHeaderTitle'
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { TodoContext } from '../Context'

export default function HeaderBar() {

  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const {isDeleteOption, setIsDeleteOption} = useContext(TodoContext)

  const deleteOption = () =>{
    setIsOptionsOpen(false)
    setIsDeleteOption(!isDeleteOption)
  }

  // let ScreenHeight = Dimensions.get("window").height;

  return (
    
    <>
      <View style={styles.header}>
          <Image style={styles.icon} source={require('../../../assets/icon.png')} />
          <TextHeaderTitle>¿Qué hacer hoy?</TextHeaderTitle>
          <MaterialIcons 
            name="more-vert" 
            size={25} 
            onPress={()=>setIsOptionsOpen(!isOptionsOpen)} 
            style={[styles.options, isOptionsOpen && {backgroundColor:"#eee"}]}
          />
          { isOptionsOpen &&
            <>
              <View style={styles.optionsContent}>
                <Text style={styles.option} onPress={()=>deleteOption()}>
                  { isDeleteOption ? 
                    "Desactivar Modo Borrar"
                    :
                    "Activar Modo Borrar"
                  }
                </Text>
              </View>
              <View style={styles.bgTransparent} onTouchStart={()=>setIsOptionsOpen(false)}/>
            </>
          }
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        paddingRight: 3,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
        zIndex: 10
    },
    icon:{
      height: 50,
      width: 50,
    },
    options:{
      color: "#000",
      marginLeft: "auto",
      alignItems: "center",
      padding: 12,
      height: "100%",
      borderRadius: 50,
      position: 'relative',
    },
    optionsContent:{
      position: 'absolute',
      top: "140%",
      right: 5,
      width: "auto",
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 20},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      display: 'flex',
      marginLeft: 'auto',
      marginRight: 5,
      marginTop: -5,
      borderRadius: 7,
      zIndex: 12
  },
  option:{
      padding: 12
  },
  bgTransparent:{
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: 0,
    left: 0,
    zIndex: 11
  },
})