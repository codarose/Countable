import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class NewSession extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose or Create a Subject: </Text>
        <Text>Session Environment: </Text>
        <Text>Choose a Template or </Text>
       
        <Button
          title="Add Behaviors"
          onPress={() => this.props.navigation.navigate("CreateBehavior")}
        />

        <Button
          title="Start Session"
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
export default NewSession;
