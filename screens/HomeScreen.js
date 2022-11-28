import React, { useEffect } from "react";
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
  Platform,
  Dimensions,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const webScreenWidth = windowWidth * 0.8;
const HomeScreen = ({ navigation }) => {
  {
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
          <Text style={styles.welcomeMessage}>Welcome to Countability!</Text>
          <Text style={styles.subHeading}>
            A Clinical Behavior Tracking App
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("NewSession")}
          >
            <Text style={styles.buttonText}>Start an Observation Session</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("ListAllSessions")}
          >
            <Text style={styles.buttonText}>View Previous Data</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("ListAllTemplates")}
          >
            <Text style={styles.buttonText}>
              Create/Edit Observation Templates
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("ListAllSubjects")}
          >
            <Text style={styles.buttonText}>Create/Edit Subjects</Text>
          </Pressable>
        </View>
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
    marginLeft: Platform.OS === "web" ? "auto" : 0,
    marginRight: Platform.OS === "web" ? "auto" : 0,
    width: Platform.OS === "web" ? "80%" : "100%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "rgba(244, 208, 111, .8)",
    //  backgroundColor: "rgba(0, 127, 255, 0.6)",
    borderWidth: 1,
    borderColor: "#392F5A",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginLeft: "8%",
    marginBottom: "3%",
    marginTop: "5%",
    marginRight: "8%",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#392F5A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: "777777",
    // color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  },

  welcomeMessage: {
    fontSize: "28px",
    color: "#FF8811",
    // color: "#001F54",
    textAlign: "center",
    opacity: 1,
    marginBottom: "2%",
    fontWeight: "bold",
    fontFamily: "Arial",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.4 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  subHeading: {
    color: "#392F5A",
    // color: "#001F54",
    //fontStyle: "italic",
    textAlign: "center",
    marginBottom: "15%",
    fontSize: "16px",
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
