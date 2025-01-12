import { View, StyleSheet, FlatList, Button, Modal, TouchableHighlight, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useCallback } from "react";
import Todo from "../components/Todo";
import { TodoContext } from "../components/Context";
import AddTodoModal from "../components/AddTodoModal";
import TodosCounter from "../components/TodosCounter";
import HeaderBar from "../components/HeaderBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import AddTodoButton from "../components/AddTodoButton";


SplashScreen.preventAutoHideAsync();

export default function AppUI() {
  const { todos, showAddTodoModal, setShowTodoModal, setViewTodoModal } = useContext(TodoContext);

  const [isLoaded] = useFonts({
    "jost-regular": require("../../assets/fonts/Jost-Regular.ttf"),
    "jost-medium": require("../../assets/fonts/Jost-Medium.ttf"),
    "bebas-neue": require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  const showModal = () =>{
    setViewTodoModal('view-add')
    setShowTodoModal(true)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderBar />
      <View style={styles.content} onLayout={handleOnLayout}>
        <TodosCounter />
        <FlatList
          data={todos}
          renderItem={({ item, index }) => (
            <Todo index={index + 1} text={item.text} check={item.check} />
          )}
          contentContainerStyle={styles.flatListContentContainer}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.addTodoFloatButton}>
          <AddTodoButton 
            touchFunction={()=>showModal()}
            icon="add"
            text="Agregar"
          />
        </View>
        <Modal 
          visible={showAddTodoModal}
          animationType='slide'
          transparent={true}          
        >
          <AddTodoModal />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    display: "flex",
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 10,
    position: 'relative',
    gap: 10,
  },
  flatListContentContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
    paddingBottom: 100
  },
  addTodoFloatButton:{
    position: 'absolute',
    right: 10,
    bottom: 30
  },
  addTodoModal: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#000",
    height: 100,
  },
});
