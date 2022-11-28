import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { MultiSelect } from "react-native-element-dropdown";
import dataAPI from "../apis/dataAPI";
import StartSessionButton from "../components/UI/Buttons/startSessionButton";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import CreateSubject from "./CreateSubject";
import CancelButton from "../components/UI/Buttons/cancelButton";
const subjectDropDown = [
  { label: "Add New", value: "1" },
  { label: "John Doe", value: "2" },
  { label: "Jane Johnson", value: "3" },
  { label: "Tenzin", value: "4" },
  { label: "Biruk", value: "5" },
  { label: "Armando Millifore", value: "6" },
];

const behaviorDropDown = [
  { label: "Add New", value: "1" },
  { label: "Pacing", value: "2" },
  { label: "Leaving the room", value: "3" },
  { label: "Putting head down", value: "4" },
  { label: "Asking a question", value: "5" },
  { label: "Ignoring direct questions", value: "6" },
];
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NewSession = ({ navigation }) => {
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [subjectName, setSubjectName] = useState(null);
  const [sessionNotes, setSessionNotes] = useState(null);
  const [sessionEnvironment, setSessionEnvironment] = useState(
    "Enter Environment Notes"
  );

  useEffect(() => {
    //templateResponse();
    // getTemplatesFromAPI();
  }, []);

  const addBehaviorToSession = () => {};
  const ifAddNewSubject = () => {
    return (
      // Need to add functionality here to expose
      //add subject if the "Add New" is selected from
      //Subject drop down
      <CreateSubject />
    );
  };

  const ifAddNewBehavior = ({ navigation }) => {
    return (
      // Need to add functionality here to expose
      //add behavior if the "Add New" is selected from
      //Subject drop down IF we go this route....
      <CreateBehavor />
    );
  };
  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: "blue" }]}></Text>;
    }
    return null;
  };
  {
    return (
      <View style={styles.container}>
        <View style={styles.formStyling}>
          <Text style={styles.startNewSession}>Set Up a New Session</Text>
          <Text style={styles.inputFields}>Session Name</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onAddBehavior}
            // value={sessionNotes}
            placeHolder="session notes"
          />
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputFields}>Choose or Create a Subject</Text>

            <Text style={styles.redAsterisk}>*</Text>
          </View>

          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={subjectDropDown}
            maxHeight={300}
            search
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Choose or Create a Subject" : "..."}
            searchPlaceholder="Search..."
            value={subjectName}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSubjectName(item.value);
              setIsFocus(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? "blue" : "black"}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />

          <View style={{ flexDirection: "row" }}>
            <Text style={styles.inputFields}>Choose or Create a Template</Text>
            <Text style={styles.redAsterisk}>*</Text>
          </View>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={subjectDropDown}
            maxHeight={300}
            search
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Choose or Create a Subject" : "..."}
            searchPlaceholder="Search..."
            value={subjectName}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setSubjectName(item.value);
              setIsFocus(false);
            }}
            // renderLeftIcon={() => (
            //   <AntDesign
            //     style={styles.icon}
            //     color={isFocus ? "blue" : "black"}
            //     name="Safety"
            //     size={20}
            //   />
            // )}
          />

          <Text style={styles.inputFields}>Session Environment (optional)</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onAddBehavior}
            value={sessionEnvironment}
            placeHolder="environment notes"
          />
          <Text style={styles.inputFields}>
            General Session Notes (optional)
          </Text>
          <TextInput
            style={[styles.input, { height: 65 }]}
            // onChangeText={onAddBehavior}
            value={sessionNotes}
            placeHolder="session notes"
          />
          {/* Data from this screen will have to populate the 
          active session in the next screen - possible? */}
          <View style={{ flexDirection: "row" }}>
            <CancelButton><Text>cancel</Text></CancelButton>
            <StartSessionButton>
              <Text>Start Session</Text>
            </StartSessionButton>
          </View>
        </View>

        {/* <Text style={styles.inputFields}>
          Did you mean to set up a recurring session? If so,
        </Text> */}
        {/* <View style={{ flexDirection: "row" }}>
          <Text style={styles.inputFields}>consider</Text>

          <Pressable
            style={styles.templateButton}
            onPress={() => navigation.navigate("CreateTemplate")}
          >
            <Text style={styles.templateButtonText}>creating a template</Text>
          </Pressable>
        </View> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({

  container: {
    height: windowHeight,
    flex: 1,
    backgroundColor: "#392F5A",
    alignItems: "center",
    justifyContent: "center",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  startNewSession: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FF8811",
    paddingTop: 15,
    paddingBottom: 4,
    paddingLeft: 0,
    fontWeight: "500",
    textAlign: "left",
    marginRight: 130,
    marginLeft: 5,
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
    backgroundColor: "#E8E9EC",
    color: "#222222",
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#222222",
  },
  formStyling: {
    height: 0.8 * windowHeight,
    borderStyle: "solid",
    borderWidth: ".4px",
    borderColor: "#222222",
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 0,
    marginRight: 0,
    padding: 2,
    width: "100%",
    overflow: "scroll",
    backgroundColor: "#FCF8F3",
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
    backgroundColor: "#E8E9EC",
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
  templateButton: {
    borderBottomWidth: 1,
    borderBottomColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    paddingBottom: 2,
    marginBottom: 24,
    marginTop: 8,
    borderRadius: 4,
    elevation: 3,
    width: "40%",
    marginLeft: 0,
  },
  templateButtonText: {
    textDecoration: "underline",
    color: "blue",
    fontSize: 16,
  },
});
export default NewSession;
