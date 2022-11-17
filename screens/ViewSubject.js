import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class ViewSubject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Subject Name: </Text>
        <Text>Notes: </Text>
        <Button title="Edit" />
        <Button title="Save" />
        <Button title="Delete" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ViewSubject;
