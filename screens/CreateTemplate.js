import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class CreateBehavior extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Session Template Title</Text>
        <Text>Duration of Session</Text>
        <Text>Behaviors Associated to this Session Type </Text>
        <Button title="Save" />
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
export default CreateBehavior;
