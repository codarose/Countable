import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SelectItemButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SelectItemButton;

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#DDFFFB",
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#B7B7B7",
    marginLeft: 15,
    marginBottom: 10,
    marginRight: 15,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .6,
    shadowRadius: 4,
    
  },
  textStyle: {
    alignSelf: "left",
    color: "#000",
    fontSize: 16,
    fontWeight: "400",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
};
