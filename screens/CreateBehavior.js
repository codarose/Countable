import React from "react";
import { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
} from "react-native";

import CreateBehaviorForm from "../components/CreateBehaviorForm.js";
import SearchableBehaviorList from "../components/SearchableBehaviorList";
// We might want to extract "createbehavior" into a reusable component
// that can be made visible on multiple screens, rather than always navigating to
// a separate screen... not sure
const CreateBehavior = () => {
  const [isAdding, setIsAdding] = React.useState(false);

  return (
    <View style={styles.container}>
      {!isAdding ? (
        <Pressable style={styles.addButton} onPress={() => setIsAdding(true)}>
          <Text>Create a New Behavior</Text>
        </Pressable>
      ) : null}

      {/* conditionally expose the form on press of button */}
      {isAdding ? <CreateBehaviorForm /> : null}

      <Text>Choose from Existing Behaviors</Text>
      <SearchableBehaviorList />
    </View>
  );
};

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
  buttonText: {},
});
export default CreateBehavior;
