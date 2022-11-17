import React from "react";
import { Component } from "react";
import { Video, AVPlaybackStatus } from "expo-av";

import videoBackground from "./../assets/child-puzzle.mp4";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
      <Text>Hi</Text>
        <Text>Welcome to Countability!</Text>
        <Text>A Clinical Behavior Tracking App</Text>
        <Button
          title="Start Session"
          onPress={() => this.props.navigation.navigate("NewSession")}
        />
        <Button
          title="Select/Create Session Template"
          onPress={() => this.props.navigation.navigate("ListAllTemplates")}
=======
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
>>>>>>> 0bb7780ea275f02adcd1dd9c6b59ace61a616e2b
        />
        <View>
          <Text style={styles.welcomeMessage}>Welcome to Countability!</Text>
          <Text style={styles.subHeading}>
            A Clinical Behavior Tracking App
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate("NewSession")}
          >
            <Text style={styles.buttonText}>Start a Session</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate("ListAllTemplates")}
          >
            <Text style={styles.buttonText}>View Session Templates</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate("ListAllSessions")}
          >
            <Text style={styles.buttonText}>View Past Sessions</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate("ListAllSubjects")}
          >
            <Text style={styles.buttonText}>View Subjects</Text>
          </Pressable>
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
  button: {
    backgroundColor: "rgba(0, 127, 255, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: "8%",
    marginBottom: "3%",
    marginTop: "2%",
    marginRight: "8%",
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: "18px",
  },

  welcomeMessage: {
    fontSize: "28px",
    color: "#001F54",
    textAlign: "center",
    opacity: 1,
    marginBottom: "2%",
    fontWeight: "bold",
  },
  subHeading: {
    color: "#001F54",
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: "15%",
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
