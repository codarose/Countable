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
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import dataAPI from "../apis/dataAPI";
import SelectItemButton from "../components/UI/Buttons/selectItemButton";
import HomeButton from "../components/UI/Buttons/homeButton";
import { stubFalse } from "lodash";
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
      .get("/templates")
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
      {console.log(templates)}
      <View style={styles.listContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.screenHeader}>Observation Templates</Text>
          <HomeButton>Home</HomeButton>
        </View>
        <View style={styles.subText}>
          <Text style={styles.nameText}>Name: </Text>
          <Text style={styles.behaviorText}>Behaviors:</Text>
        </View>

        <FlatList
          data={templates}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <SelectItemButton
              //this is where pressing a template should populate a individual template
              //view
              onClick={() => {}}
            >
              <Text>{item.title}</Text>
            </SelectItemButton>
          )}
        />
      </View>
      <Pressable
        style={{ flex: 0.6 }}
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
    backgroundColor: "#392F5A",

    // backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 5,
    paddingRight: 60,
    marginTop: 20,
  },
  nameText: {
    marginRight: 130,
  },
  listContainer: {
    marginTop: 20,
    padding: 5,
    width: width,
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
    padding: 10,
    fontSize: 25,
    marginTop: 10,
    color: "#FF8811",
    fontWeight: "bold",
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
