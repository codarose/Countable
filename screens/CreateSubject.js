import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class CreateSubject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose or Create a Subject: </Text>
        <Text>Choose a Template or </Text>
        <Button title="Add Behaviors" />
        <Button
          title=""
          onPress={() => this.props.navigation.navigate("ActiveSession")}
        />
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
export default CreateSubject;
