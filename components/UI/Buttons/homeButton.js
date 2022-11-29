import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

const HomeButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
      <AntIcon name="arrowright" color="#392F5A" size={35} />
    </TouchableOpacity>
  );
};

export default HomeButton;

const styles = {
  buttonStyle: {
    // width: "30%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 10,
    margin: 10,
  },
  textStyle: {
    color: "#392F5A",
    fontSize: 18,
    fontWeight: "600",
    padding: 2,
  },
};
