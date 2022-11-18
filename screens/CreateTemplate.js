import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

class CreateBehavior extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formStyling}>
          <Text style={styles.createTemplate}>
            Create a New Reusable Template
          </Text>
          <Text style={styles.inputFields}>Session Template Title</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onAddBehavior}
            //  value={sessionNotes}
            placeHolder="session notes"
          />
          <Text>Duration of Session</Text>
          <Text>Behaviors Associated to this Session Type </Text>
          <Pressable title="Save" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    margin: 8,
    marginTop: 0,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 12,
    width: "95%",
    backgroundColor: "#D3D3D3",
    color: "#222222",
  },
  formStyling: {
    borderStyle: "solid",
    borderWidth: ".4px",
    borderColor: "#222222",
    margin: 4,
    marginRight: 0,
    padding: 4,
    width: "93%",
    overflow: "scroll",
  },
  inputFields: {
    height: 40,
    marginTop: 4,
    marginBottom: 0,
    marginLeft: 3,
    marginRight: 0,
    paddingTop: 12,
    paddingBottom: 0,
    paddingRight: 0,
    textAlignVertical: "auto",
    fontSize: 16,
    textAlign: "left",
  },
  createTemplate: {
    fontSize: 20,
    color: "#222222",
    paddingTop: 15,
    paddingBottom: 4,
    paddingLeft: 10,
    fontWeight: "500",
    textAlign: "left",
    marginRight: 130,
  },
  buttonText: {
    fontSize: "15px",
    color: "white",
  },
  input: {
    marginLeft: 8,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    width: "95%",
    color: "#222222",
    height: 40,
    backgroundColor: "#D3D3D3",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  selectedTextStyle: {
    fontSize: 15,
  },
  redAsterisk: {
    color: "red",
    fontSize: "18px",
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 1,
    marginRight: 3,
  },
  startButton: {
    backgroundColor: "green",
    alignItems: "center",
    padding: 8,
    marginBottom: 4,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 4,
    elevation: 3,
    width: "30%",
    marginLeft: 160,
  },
  cancelButton: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    marginBottom: 4,
    marginTop: 10,
    borderRadius: 4,
    elevation: 3,
    width: "20%",
    marginLeft: 8,
  },
});
export default CreateBehavior;
