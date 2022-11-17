import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class CreateBehavior extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <Text>Password </Text>
        <Text>Create Account</Text>
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
