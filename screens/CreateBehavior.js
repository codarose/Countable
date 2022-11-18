import React from "react";
import { Component } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

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
      <View style={styles.createButtonView}>
        {!isAdding ? (
          <Pressable style={styles.addButton} onPress={() => setIsAdding(true)}>
            <Text>Create a New Behavior</Text>
          </Pressable>
        ) : null}
      </View>
      {/* conditionally expose the form on press of button */}
      {isAdding ? <CreateBehaviorForm /> : null}

      <Text style={styles.behaviorText}>Choose from Existing Behaviors</Text>
      <SearchableBehaviorList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  createButtonView: {
    //flex: 0.1,
    width: "100%",
    maxWidth: 550,
  },

  behaviorText: {
    fontSize: "20px",
    color: "#001F54",
    textAlign: "center",
    opacity: 1,
    marginBottom: "2%",
    fontWeight: "bold",
    marginTop: 5,
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
    marginBottom: "3%",
    marginTop: "3%",
    marginLeft: "10%",
    marginRight: "10%",
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {},
});
export default CreateBehavior;
