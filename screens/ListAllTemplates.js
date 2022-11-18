import React from "react";
import { Component } from "react";

import { StyleSheet, Text, View, Pressable } from "react-native";

const ListAllTemplates = ({ navigation }) => {
  {
    return (
      <View style={styles.container}>
        <Text>List of Existing Templates </Text>
        <Pressable onPress={() => navigation.navigate("CreateTemplate")}>
          <Text>Create a New Template</Text>
        </Pressable>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ListAllTemplates;
