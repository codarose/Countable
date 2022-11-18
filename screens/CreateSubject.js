import React, { useState } from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button, TextInput } from "react-native";

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
      <TextInput
        style={styles.inputText}
        placeholder="Enter Subject Name"
        value={subjectName}
        onChangeText={(subjectName) => setSubjectName(subjectName)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Notes"
        value={subjectName}
        onChangeText={(subjectName) => setSubjectName(subjectName)}
      />
      {/* do we want input here? Maybe yes but with drop down menu of selections */}

      <Button
        title=""
        // onPress={handleSubmitSubject}
        onPress={() => this.props.navigation.navigate("ActiveSession")}
      />
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

  inputText: {
    height: 45,
    marginBottom: 15,
  },
});
export default CreateSubject;
