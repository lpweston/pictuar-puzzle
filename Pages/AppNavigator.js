import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../Pages/HomeScreen";
import SignUp from "../Pages/SignUp";
import ChooseGame from "../Pages/ChooseGame";
import GameAR from "../Pages/GameAR";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUp,
    ChooseGame: ChooseGame,
    GameAR: GameAR
  },
  {
    initalRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#E0DACC"
      },
      headerTintColor: "black",
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      }
    }
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
