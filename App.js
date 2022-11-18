import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Insert screens into a stack

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

const Stack = createNativeStackNavigator();

export default function App() {
  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Countability" }}
          />
          <Stack.Screen
            name="NewSession"
            component={NewSession}
            options={{ title: "Countability - New Session" }}
          />
          <Stack.Screen
            name="ListAllTemplates"
            component={ListAllTemplates}
            options={{ title: "Countability - Session Templates" }}
          />
          <Stack.Screen
            name="ListAllSessions"
            component={ListAllSessions}
            options={{ title: "Countability - All Sessions" }}
          />
          <Stack.Screen
            name="ListAllSubjects"
            component={ListAllSubjects}
            options={{ title: "Countability - All Subjects" }}
          />
          <Stack.Screen
            name="CreateBehavior"
            component={CreateBehavior}
            options={{ title: "Countability - Add New Behavior" }}
          />
          <Stack.Screen
            name="CreateSubject"
            component={CreateSubject}
            options={{ title: "Countability - Create New Subject" }}
          />
          <Stack.Screen
            name="ActiveSession"
            component={ActiveSession}
            options={{ title: "Countability - {sessionName}" }}
          />
          <Stack.Screen
            name="Authentication"
            component={Authentication}
            options={{ title: "Countability - Log In" }}
          />
          <Stack.Screen
            name="CreateTemplate"
            component={CreateTemplate}
            options={{ title: "Countability - Create New Template" }}
          />
          <Stack.Screen
            name="ViewBehavior"
            component={ViewBehavior}
            options={{ title: "Countability - {behaviorName}" }}
          />
          <Stack.Screen
            name="ViewSubject"
            component={ViewSubject}
            options={{ title: "Countability - {subjectName}" }}
          />
          <Stack.Screen
            name="ViewTemplate"
            component={ViewTemplate}
            options={{ title: "Countability - {templateName}" }}
          />
          <Stack.Screen
            name="ListAllBehaviors"
            component={ListAllBehaviors}
            options={{ title: "Countability - All Behaviors" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
