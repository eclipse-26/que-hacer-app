import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync();

export default function TextHeaderTitle({children}) {

    const [isLoaded] = useFonts({
    "bebas-neue": require("../../../assets/fonts/BebasNeue-Regular.ttf"),
    });

    const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
        await SplashScreen.hideAsync(); //oculta la pantalla de salpicaduras
    }
    }, [isLoaded]);

    if(!isLoaded){
    return null
    }

  return (
    <View onLayout={handleOnLayout}>
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