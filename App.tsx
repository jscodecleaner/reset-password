/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import ForgotPasswordPhoneScreen from "./src/screens/ForgotPasswordPhoneScreen/ForgotPasswordPhoneScreen";
import ForgotPasswordCodeScreen from "./src/screens/ForgotPasswordCodeScreen/ForgotPasswordCodeScreen";
import CreatePasswordScreen from "./src/screens/CreatePasswordScreen/CreatePasswordScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordPhoneScreen"
          component={ForgotPasswordPhoneScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPasswordCodeScreen"
          component={ForgotPasswordCodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePasswordScreen"
          component={CreatePasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
