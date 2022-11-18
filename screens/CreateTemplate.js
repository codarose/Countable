import { useState } from "react";
import { Component } from "react";
import { MultiSelect } from "react-native-element-dropdown";

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
const CreateTemplate = ({ navigation }) => {
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);

  {
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

          <Text style={styles.inputFields}>Duration of Session</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onAddBehavior}
            //  value={sessionNotes}
            placeHolder="session notes"
          />
          <Text style={styles.inputFields}>
            Behaviors Associated to this Session Template
          </Text>

          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            data={behaviorDropDown}
            labelField="label"
            valueField="value"
            placeholder="Select item"
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
          <Pressable title="Save" />
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
export default CreateTemplate;
