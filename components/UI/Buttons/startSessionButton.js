import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

const StartSessionButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
      <AntIcon name="arrowright" color="#392F5A" size={45} />
    </TouchableOpacity>
  );
};

export default StartSessionButton;

const styles = {
  buttonStyle: {
    flex: 0.8,
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
    fontSize: 24,
    fontWeight: "600",
    padding: 2,
    paddingLeft: 8,
  },
};
