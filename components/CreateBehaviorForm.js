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
  const [behavior, onAddBehavior] = useState("Type a Behavior Here");
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [focusBorderColor, setFocusBorderColor] = useState("black");

  function customOnFocus() {
    setFocusBorderColor("blue");
  }

  const renderLabel = () => {
    if (value || isFocus) {
      return <Text style={[styles.label, isFocus && { color: "blue" }]}></Text>;
    }
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputFields}>Behavior Name: </Text>

        <TextInput
          style={[{ borderColor: focusBorderColor }, styles.input]}
          onChangeText={onAddBehavior}
          value={behavior}
          onFocus={customOnFocus}
          placeHolder=""
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputFields}>Method: </Text>

        {/* Replace buttons with a drop down list */}
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
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
      </View>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
        <Pressable style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "50%",
    color: "grey",
    height: 50,
    // borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "50%",
  },

  inputFields: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 3,
    marginRight: 3,
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "auto",
    fontSize: "18px",
    textAlign: "left",
  },
  addButton: {
    backgroundColor: "rgba(0, 127, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: "1%",
    marginTop: "1%",
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
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: "1%",
    marginTop: "1%",
    marginRight: 10,
    borderRadius: 4,
    elevation: 3,
    width: "25%",
  },
  cancelButton: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: "1%",
    marginTop: "1%",
    borderRadius: 4,
    elevation: 3,
    width: "25%",
    marginLeft: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "50%",
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
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    textAlign: "center",
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
