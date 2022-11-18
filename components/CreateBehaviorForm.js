import { useState, React } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Button,
} from "react-native";

const data = [
  { label: "Frequency", value: "1" },
  { label: "Duration", value: "2" },
];

function CreateBehaviorForm(props) {
  const [behavior, onAddBehavior] = useState("Enter Behavior Name");
  const [behaviorNotes, onAddBehaviorNotes] = useState("Enter Behavior Notes");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [borderColor, setBorderColor] = useState("gray");

  function customOnFocus() {
    setBorderColor("orange");
    onAddBehavior("");
  }

  function customOnBlur() {
    setBorderColor("gray");
    // onAddBehavior("Enter Behavior Name");
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: "blue" }]}></Text>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.createNewBehavior}>Create a new Behavior</Text>
      <View style={styles.formStyling}>
        <Text style={styles.specify}>
          Create a name and set the type of measurement for your behavior.
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.inputFields}>Name</Text>
          <Text style={styles.redAsterisk}>*</Text>
        </View>
        <TextInput
          style={[{ borderColor: borderColor }, styles.input]}
          onChangeText={onAddBehavior}
          value={behavior}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          placeHolder=""
        />

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.inputFields}>Type of Measurement</Text>
          <Text style={styles.redAsterisk}>*</Text>
        </View>
        {/* Replace buttons with a drop down list */}
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "orange" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "..."}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setValue(item.value);
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
        <Text style={styles.inputFields}>
          Notes (optional)</Text>
        <TextInput
          style={styles.input}
          onChangeText={onAddBehavior}
          value={behaviorNotes}
          onFocus={customOnFocus}
          onBlur={customOnBlur}
          placeHolder="behavior notes"
        />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
  createNewBehavior: {
    fontSize: 20,
    color: "#222222",
    paddingTop: 15,
    paddingBottom: 4,
    paddingLeft: 10,
    fontWeight: "500",
    marginRight: 165,
  },
  specify: {
    paddingLeft: 10,
    fontSize: 15,
    color: "#222222",
    paddingRight: 20,
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
  redAsterisk: {
    color: "red",
    fontSize: "18px",
    marginTop: 16,
    marginBottom: 6,
    marginLeft: 1,
    marginRight: 3,
  },
  addButton: {
    backgroundColor: "rgba(0, 127, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 1,
    marginTop: 1,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: "15px",
    color: "white",
  },
  freqDurButton: {
    flexDirection: "row",
    // width: "20%",
    backgroundColor: "blue",
    alignItems: "center",
    padding: 2,
    borderRadius: 4,
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

  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color: "#222222",
  },
  selectedTextStyle: {
    fontSize: 14,
    textAlign: "left",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default CreateBehaviorForm;
