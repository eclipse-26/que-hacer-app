import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function AddTodoButton({ touchFunction, icon, text, textColor="#646464" }) {
  return (
    <TouchableHighlight style={styles.content} onPress={touchFunction}>
      <View style={styles.button}>
        <MaterialIcons name={icon} size={20} color={textColor} />
        <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: "auto",
    borderRadius: 11,
    height: 40,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    flex: 1,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "jost-regular",
  },
});
