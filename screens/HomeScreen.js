import React from "react";
import { Component } from "react";
import { Video, AVPlaybackStatus } from "expo-av";

import videoBackground from "./../assets/child-puzzle.mp4";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          // ref={React.useRef(null)}
          source={videoBackground}
          style={styles.backgroundVideo}
          useNativeControls={false}
          shouldPlay
          isMuted
          resizeMode="cover"
          isLooping
          //  onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View>
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

  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    height: "100%",
    bottom: 0,
    right: 0,
    opacity: 0.3,
  },
});
export default HomeScreen;
