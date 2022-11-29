import React from "react";
import { Text, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";

const CancelButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <AntIcon name="closecircle" color="#9DD9D2" size={45} />
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
    backgroundColor: "#392F5A",
    borderRadius: 10,
    borderColor: "#007aff",
    margin: 15,
    marginRight: 35,
    marginLeft: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  textStyle: {
    flex: 1,
    flexDirection: "row",
    color: "#9DD9D2",

    fontSize: 20,
    fontWeight: "600",
    padding: 2,
    paddingLeft: 0,
    textAlign: "center",
  },
};
