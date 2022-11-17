import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";
function CreateBehaviorForm(props) {
  const [behavior, onAddBehavior] = React.useState("Type a Behavior Here");

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputFields}>Behavior Name: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onAddBehavior}
          value={behavior}
          placeHolder=""
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputFields}>Choose</Text>
        <Pressable style={styles.freqDurButton}>
          <Text style={styles.buttonText}>Frequency</Text>
        </Pressable>
        <Text style={styles.inputFields}>or</Text>

        <Pressable style={styles.freqDurButton}>
          <Text style={styles.buttonText}>Duration</Text>
        </Pressable>
      </View>
      <Pressable style={styles.saveButton}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    color: "grey",
  },
  inputFields: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 3,
    marginRight: 3,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "auto",
    fontSize: "18px",
    textAlign: "left",
  },
  addButton: {
    backgroundColor: "rgba(0, 127, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: "1%",
    marginTop: "1%",
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: "15px",
    color: "white",
  },
  freqDurButton: {
    flexDirection: "row",
    // width: "20%",
    backgroundColor: "blue",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
  },
  saveButton: {
    backgroundColor: "rgba(0, 127, 255)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: "1%",
    marginTop: "1%",
    borderRadius: 4,
    elevation: 3,
  },
});

export default CreateBehaviorForm;
