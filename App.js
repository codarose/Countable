import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Insert screens into a stack
import { createDrawerNavigator, Header } from "@react-navigation/drawer";

import { LinearGradient } from "expo-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";

import HomeScreen from "./screens/HomeScreen";
import NewSession from "./screens/NewSession";
import ListAllTemplates from "./screens/ListAllTemplates";
import ListAllSubjects from "./screens/ListAllSubjects";
import ListAllSessions from "./screens/ListAllSessions";
import CreateBehavior from "./screens/CreateBehavior";
import CreateSubject from "./screens/CreateSubject";
import ActiveSession from "./screens/ActiveSession";
import Authentication from "./screens/Authentication";
import ViewBehavior from "./screens/ViewBehavior";
import ViewSubject from "./screens/ViewSubject";
import ViewTemplate from "./screens/ViewTemplate";
import CreateTemplate from "./screens/CreateTemplate";
import ListAllBehaviors from "./screens/ListAllBehaviors";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerStack = createDrawerNavigator();

export default function App() {
  // useEffect(() => {
  //   navigation.setOptions({
  //     // You can get the reference to navigation and route props here as well if you need it.
  //     header: ({ navigation, route }) => (
  //       <View
  //         style={{ height: 56, justifyContent: "center", alignItems: "center" }}
  //       >
  //         <Text>Custom Header on Search Screen</Text>
  //       </View>
  //     ),
  //   });
  // }, []);

  {
    return (
      <NavigationContainer>
        <DrawerStack.Navigator
          screenOptions={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={navigation.toggleDrawer}>
                <Entypo name="menu" color="#392F5A" size={45} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: "#9DD9D2",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
          })}
        >
          <DrawerStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Countability",
            }}
          />
          <DrawerStack.Screen
            name="NewSession"
            component={NewSession}
            options={{
              title: "Countability - New Session",
            }}
          />
          <DrawerStack.Screen
            name="ListAllTemplates"
            component={ListAllTemplates}
            options={{
              title: "Countability - Session Templates",
            }}
          />
          <DrawerStack.Screen
            name="ListAllSessions"
            component={ListAllSessions}
            options={{
              title: "Countability - All Sessions",
            }}
          />
          <DrawerStack.Screen
            name="ListAllSubjects"
            component={ListAllSubjects}
            options={{
              title: "Countability - All Subjects",
            }}
          />
          <DrawerStack.Screen
            name="CreateBehavior"
            component={CreateBehavior}
            options={{
              title: "Countability - Add New Behavior",
            }}
          />
          <DrawerStack.Screen
            name="CreateSubject"
            component={CreateSubject}
            options={{
              title: "Countability - Create New Subject",
            }}
          />
          <DrawerStack.Screen
            name="ActiveSession"
            component={ActiveSession}
            options={{
              title: "Countability - {sessionName}",
            }}
          />
          <DrawerStack.Screen
            name="Authentication"
            component={Authentication}
            options={{
              title: "Countability - Log In",
            }}
          />
          <DrawerStack.Screen
            name="CreateTemplate"
            component={CreateTemplate}
            options={{
              title: "Countability - Create New Template",
            }}
          />
          <DrawerStack.Screen
            name="ViewBehavior"
            component={ViewBehavior}
            options={{
              title: "Countability - {behaviorName}",
            }}
          />
          <DrawerStack.Screen
            name="ViewSubject"
            component={ViewSubject}
            options={{
              title: "Countability - {subjectName}",
            }}
          />
          <DrawerStack.Screen
            name="ViewTemplate"
            component={ViewTemplate}
            options={{
              title: "Countability - {templateName}",
            }}
          />
          <DrawerStack.Screen
            name="ListAllBehaviors"
            component={ListAllBehaviors}
            options={{
              title: "Countability - All Behaviors",
            }}
          />
        </DrawerStack.Navigator>
      </NavigationContainer>
    );
  }
}
