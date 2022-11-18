import React, { useState } from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios"; //will need to have axios installed and imported into file

const CreateSubject = ({ navigation }) => {
  const [templates, setTemplates] = useState(null); //list of templates
  const [subjects, setSubjects] = useState(null); //list of subjets
  const [subName, setSubName] = useState(""); //subject's name
  const [description, setDescription] = useState(""); //subject's description
  const [behaviors, setBehaviors] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  // function to submit subjects to the database
  //   const handleSubmitSubject = (e) => {
  //     e.preventDefault();
  //     const reqBody = { subName, description }; //This will be the object sent with the user input name and desc.
  //     axios
  //       .post("http://35.188.206.191/------", reqBody)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  //get request for all templates
  //   const getAllTemplates = () => {
  //     axios
  //       .get("http://35.188.206.191/templates")
  //       .then((response) => {
  //         setTemplates(response.data); //that should set the response's data to "templates,"  an array templates
  //       })
  //       .catch((error) => console.log(error));
  //   };

  // get request for all subjects
  //   const getAllSubjects = () => {
  //     axios
  //       .get("http://35.188.206.191/------------")
  //       .then((response) => {
  //         setSubjects(response.data); //that should set the response's data to "subjects,"  an array of subjects
  //       })
  //       .catch((error) => console.log(error));
  //   }; //and then will need to map through them (see code in "render")

  //get request for all behaviors
  //   const getAllBehaviors = () => {
  //     axios
  //       .get("")
  //       .then((response) => {
  //         setBehaviors(response.data); //should set the response's data to "behaviors," an array of behaviors
  //       })
  //       .catch((error) => console.log(error));
  //   };

  {
    return (
      <View style={styles.container}>
        <Text>Choose or Create a Subject: </Text>
        {/* map through subjects from data received in API call*/}
        {/* subjects.map((subject) =>{
  return (
    //we will need to make these selectable
    <Text>{subject.name}</Text>
    <Text>{subject.description}</Text>
  )
}) */}
        {/* A form will need to be built that will run the function handleSubmitSubject to post to API

<input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />

              <input
                type="text"
                name="description"
                value={description}
                onChange={handleDescription}
              />
 */}
        <Text>Choose a Template </Text>
        {/* templates.map((template) => {
  return (
    //these will need to be made selectable
    <Text>{template.title}</Text>
    <Text>{template.comment}</Text>
  )
}) */}
        <Button title="Add Behaviors" />
        {/* map through data from API call */}
        {/* behaviors.map((behavior) =>{
  return (
    //we will need to make this selectable
    <Text>{behavior.name}</Text>
  )
}) */}
        <Button
          title="Begin Session"
          onPress={() => navigation.navigate("ActiveSession")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CreateSubject;
