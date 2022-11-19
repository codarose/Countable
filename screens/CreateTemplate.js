import { useState, useEffect } from "react";
import { Component } from "react";
import { MultiSelect } from "react-native-element-dropdown";
import dataAPI from "../apis/dataAPI";
import axios from "axios";
import _ from "lodash";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
const behaviorDropDown = [
  { label: "Add New", value: "1" },
  { label: "Pacing", value: "2" },
  { label: "Leaving the room", value: "3" },
  { label: "Putting head down", value: "4" },
  { label: "Asking a question", value: "5" },
  { label: "Ignoring direct questions", value: "7" },
  { label: "Coughing", value: "8" },
  { label: "Scribbling on Wall", value: "9" },
  { label: "Tantrum", value: "10" },
  { label: "Asking for Food", value: "11" },
];

//sample data to send to the new_template end point
// sampleTemplate = {
//   title: "Sample Title",
//   duration: 3600,
//   behaviors_object: [
//     { behavior_id: id1, class_id: id2 },
//     { behavior_id: id1, class_id: id2 },
//   ],
// };
const CreateTemplate = ({ navigation }) => {
  const [duration, setDuration] = useState("00:00:00");
  const [templateName, setTemplateName] = useState("Add a Name");
  const [newTemplate, setNewTemplate] = useState({});
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [behaviorList, setBehaviorList] = useState([]);
  const [allBehaviors, setAllBehaviors] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    getBehaviorsFromAPI();
    filterBehaviorsForTemplate();
    if (formSubmitted) {
      pushTemplateToAPI();
    }
  }, [selectedBehaviors, formSubmitted]);

  // I will attempt to create the API fn to
  // send the new template to the server here (still not working)
  const pushTemplateToAPI = () => {
    dataAPI
      .post("new_template", {
        title: "Template Test",
        duration: 4000,
        behaviors_object: [],
      })
      .then(function (response) {
        //console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //We will need a function to convert our time input into
  //seconds

  //fetch the behaviors to populate
  //the dropdown selection menu
  const getBehaviorsFromAPI = async () => {
    dataAPI
      .get("behaviors")
      .then(function (response) {
        setAllBehaviors(response.data);
        let extractedTitles = response.data.map(function (item) {
          return {
            label: item.title,
            value: item.id,
          };
        });

        setBehaviorList(extractedTitles);
        // console.log(behaviorList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //we will need a function to filter the objects for the
  //template based on the array created by multiselect dropdown.
  //this array value is being stored in variable "selectedBehaviors",
  //it is a list of select "id" values from the behavior object.
  //can do a filter on all behaviors and use these id values to filter.
  const filterBehaviorsForTemplate = () => {
    let value = allBehaviors.filter(function (item) {
      return _.includes(selectedBehaviors, item.id);
    });
    // console.log(allBehaviors);
    // console.log(selectedBehaviors);
    // console.log(value);
    return value;
  };
  //data structure: selectedBehaviors = [1,2,3,4]

  {
    return (
      <View style={styles.container}>
        <View style={styles.formStyling}>
          <Text style={styles.createTemplate}>
            Create a New Reusable Template
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputFields}>Session Template Title</Text>
            <Text style={styles.redAsterisk}>*</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setTemplateName}
            value={templateName}
            placeHolder="session notes"
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputFields}>
              Duration of Session (hours, min and sec)
            </Text>
            <Text style={styles.redAsterisk}>*</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setDuration}
            value={duration}
            placeHolder="session notes"
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputFields}>Behaviors to Track</Text>
            <Text style={styles.redAsterisk}>*</Text>
          </View>

          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            data={behaviorList}
            labelField="label"
            valueField="value"
            placeholder="Select behaviors"
            searchPlaceholder="Search..."
            value={selectedBehaviors}
            onChange={(item) => {
              setSelectedBehaviors(item);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color="black"
            //     name="Safety"
            //     size={20}
            //   />
            // )}
            selectedStyle={styles.selectedStyle}
          />
          {/* {console.log(selectedBehaviors)} */}
          <Pressable title="Save" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={styles.cancelButton}>
            <Text style={styles.buttonText}>Clear Form</Text>
          </Pressable>
          <Pressable
            style={styles.startButton}
            onPress={() => {
              setFormSubmitted(true),
                pushTemplateToAPI,
                navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timeStyle: {
    marginBottom: 3,
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
  timeInput: {
    width: "15%",
    backgroundColor: "#D3D3D3",
    paddingRight: 2,
    marginLeft: 8,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,

    color: "#222222",
    height: 40,
    backgroundColor: "#D3D3D3",
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 12,
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
  redAsterisk: {
    color: "red",
    fontSize: "18px",
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 1,
    marginRight: 3,
  },
});
export default CreateTemplate;
