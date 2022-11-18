import React, { useState } from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

const CreateSubject = () => {
  const [subjectName, setSubjectName] = useState("");
  const handleSubjectName = (e) => setSubjectName(e.target.value);

  const [template, setTemplate] = useState(null);
  const handleSubjectTemplate = (e) => setTemplate(e.target.value);

  //would useState(behaviors) make it display what we want?
  const [behaviors, setBehaviors] = useState("");
  const handleBehaviors = (e) => setTemplate(e.target.value);

  const handleSubmitSubject = (event) => {
    event.preventDefault();
    const requestBody = { subjectName, template };

    axios
      .post(`${API_URL}/api/-----------`, requestBody, {
        // headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}`}
      })
      .then((response) => {
        console.log(response.data);
        //nav to new active session
      })
      .catch((err) => setMessage(err.response.data.message));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.createNewSubject}>Create New Subject</Text>
      <View style={styles.formStyling}>
        <View style={{ flexDirection: "row", alignItems: "left" }}>
          <Text style={styles.inputFields}>Enter Subject's Name or Alias</Text>
          <Text style={styles.redAsterisk}>*</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Subject Name"
          value={subjectName}
          onChangeText={(subjectName) => setSubjectName(subjectName)}
        />

        <Text style={styles.inputFields}>Notes (optional)</Text>

        <TextInput
          style={styles.input}
          placeholder="Notes"
          value={subjectName}
          onChangeText={(subjectName) => setSubjectName(subjectName)}
        />
        {/* do we want input here? Maybe yes but with drop down menu of selections */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable style={styles.saveButton}>
            {/* */}
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
      {/* <Button
        title=""
        // onPress={handleSubmitSubject}
        onPress={() => this.props.navigation.navigate("ActiveSession")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  createNewSubject: {
    fontSize: 20,
    color: "#222222",
    paddingTop: 15,
    paddingBottom: 4,
    paddingLeft: 10,
    fontWeight: "500",
    marginRight: 165,
  },
  formStyling: {
    borderStyle: "solid",
    borderWidth: ".4px",
    borderColor: "#222222",
    margin: 4,
    marginRight: 0,
    padding: 1,
    width: "93%",
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
  redAsterisk: {
    color: "red",
    fontSize: "18px",
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 1,
    marginRight: 3,
  },
  inputText: {
    height: 45,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: "15px",
    color: "white",
  },
  saveButton: {
    backgroundColor: "blue",
    alignItems: "center",
    padding: 8,
    marginBottom: 4,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 4,
    elevation: 3,
    width: "20%",
    marginLeft: 190,
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
export default CreateSubject;
