import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import axios from "axios";
import dataAPI from "../apis/dataAPI";

const { width, height } = Dimensions.get("window");
const sessionTemplateList = [
  { name: "Child Interaction Study", value: "1" },
  { name: "Group Home Patients", value: "2" },
  { name: "University Addiction Volunteers", value: "3" },
  { name: "Drug Trial Volunteers", value: "4" },
  { name: "Baby Attachment Study", value: "5" },
  { name: "Autistic Student Evaluation", value: "7" },
  { name: "Avoidant Behavior Screening", value: "8" },
  { name: "Autistic Spectrum Screening", value: "9" },
  { name: "ADHD Screening", value: "10" },
  { name: "Trauma Indicators", value: "11" },
];

//Get from: http://35.188.206.191/templates
// output:
// 		[{"id": 1,"title": "classroom","comment": "normal behaviors"},...]

const ListAllTemplates = ({ navigation }) => {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    //templateResponse();
    getTemplatesFromAPI();
  }, []);

  // const templateResponse = async () => {
  //   const response = await dataAPI.get("templates");
  //   console.log(response.data);
  // };

  const getTemplatesFromAPI = () => {
    dataAPI
      .get("templates")
      .then(function (response) {
        //     setTemplates(response.data);
        setTemplates(response.data);
        //console.log(allTemplates);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  if (!templates) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.screenHeader}>List of Existing Templates </Text>
      {console.log(templates)}
      <View style={styles.listContainer}>
        <FlatList
          data={templates}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.title}</Text>
          )}
        />
      </View>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => navigation.navigate("CreateTemplate")}
      >
        <Text>Create a New Template</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF5E5",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: 0.8 * width,
    borderRadius: width * 0.05,
    backgroundColor: "white",
    margin: 10,
    flex: 4,
    shadowColor: "000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
  },
  screenHeader: {
    padingTop: 5,
    fontSize: 20,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ListAllTemplates;
