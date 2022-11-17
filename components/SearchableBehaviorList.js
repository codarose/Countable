import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";

function SearchableBehaviorList() {
  const [behavior, onAddBehavior] = React.useState("Type a Behavior Here");
  return (
    <View style={styles.container}>
      {/* We would be extracting data and populating rows of
        behaviors here.  */}
      <View style={styles.behaviorRow}>
        <Text style={styles.behaviors}>Biting or hitting other students </Text>
        <Pressable style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.behaviorRow}>
        <Text style={styles.behaviors}>Biting or hitting other students </Text>
        <Pressable style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.behaviorRow}>
        <Text style={styles.behaviors}>Biting or hitting other students </Text>
        <Pressable style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={styles.behaviorRow}>
        <Text style={styles.behaviors}>Biting or hitting other students </Text>
        <Pressable style={styles.addButton}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  behaviorRow: {
    flexDirection: "row",
    borderBottomWidth: "1px",
    width: "100%",
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
  behaviors: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 3,
    marginRight: 3,
    borderColor: "transparent",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "auto",
    fontSize: "18px",
    textAlign: "left",
    color: "white",
  },
  addButton: {
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 18,
    margin: "4%",
    borderRadius: 6,
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
export default SearchableBehaviorList;
