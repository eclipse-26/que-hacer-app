import { View, StyleSheet, FlatList, Button, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useCallback } from "react";
import Todo from "../Components/Todo";
import { TodoContext } from "../Components/Context";
import AddTodoModal from "../Components/AddTodoModal";
import TodosCounter from "../Components/TodosCounter";
import TextDefault from "../Components/TextDefault";
import TextHeaderTitle from "../Components/TextHeaderTitle";
import HeaderBar from "../Components/HeaderBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function AppUI() {
  const { todos, showAddTodoModal, setShowTodoModal } = useContext(TodoContext);

  const [isLoaded] = useFonts({
    "jost-regular": require("../../assets/fonts/Jost-Regular.ttf"),
    "jost-medium": require("../../assets/fonts/Jost-Medium.ttf"),
    "bebas-neue": require("../../assets/fonts/BebasNeue-Regular.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //oculta la pantalla de salpicaduras
      console.log("fuente");
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
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
        />
        <Button title="Agregar Tarea" onPress={() => setShowTodoModal(true)} />
        <Modal visible={showAddTodoModal}>
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
    paddingVertical: 60,
    paddingHorizontal: 10,
  },
  flatListContentContainer: {
    marginTop: 20,
    paddingHorizontal: 5,
  },
  addTodoModal: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#000",
    height: 100,
  },
});
