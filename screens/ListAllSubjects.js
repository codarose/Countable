import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class ListAllSubjects extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Choose or Create a Subject: </Text>
        

        <Button
          title="Add New Subject"
          onPress={() => this.props.navigation.navigate("CreateSubject")}
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
export default ListAllSubjects;
