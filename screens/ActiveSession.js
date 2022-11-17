import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class ActiveSession extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Time: </Text>

        <Button title="Pause/Resume" />
        <Button title="{Behavior1}" />
        <Button title="{Behavior2}" />

        <Button title="Cancel Session" />

        <Button title="Save Session" />
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
export default ActiveSession;
