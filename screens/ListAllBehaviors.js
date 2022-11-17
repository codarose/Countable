import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Button } from "react-native";

class ListAllBehaviors extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of Behaviors</Text>

        <Button
          title="Add New Behavior"
          onPress={() => this.props.navigation.navigate("CreateBehavior")}
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
export default ListAllBehaviors;
