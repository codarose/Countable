import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

const CancelButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CancelButton;

const styles = {
  buttonStyle: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#9DD9D2",
    borderRadius: 10,
    borderColor: "#007aff",
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  textStyle: {
    flex: 1,
    flexDirection: "row",
    color: "#392F5A",
    fontSize: 20,
    fontWeight: "600",
    padding: 2,
    paddingLeft: 8,
    textAlign: "center",
  },
};
