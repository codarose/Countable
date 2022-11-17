import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Countability!</Text>
        <Text>A Clinical Behavior Tracking App</Text>
        <Button
          title="Start Session"
          onPress={() => this.props.navigation.navigate("NewSession")}
        />
        <Button
          title="Select/Create Session Template"
          onPress={() => this.props.navigation.navigate("ListAllTemplates")}
        />

        <Button
          title="View Past Sessions"
          onPress={() => this.props.navigation.navigate("ListAllSessions")}
        />

        <Button
          title="View Subjects"
          onPress={() => this.props.navigation.navigate("ListAllSubjects")}
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
export default HomeScreen;
