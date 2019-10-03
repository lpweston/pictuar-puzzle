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

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../assets/boat_logo.png")}
        />
        <Text style={styles.title}>PictuAR Puzzle!</Text>
        <Text style={styles.subHeading}>Login or create new user below:</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("ChooseGame")}
          >
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userBtn}>
            <Text
              style={styles.textBtn}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E0DACC"
  },
  title: {
    paddingTop: 30,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  subHeading: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    width: "60%",
    backgroundColor: "#F0F0F0",
    padding: 10,
    margin: 4,
    borderRadius: 8
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    width: "60%"
  },
  userBtn: {
    backgroundColor: "#F0ECE4",
    padding: 15,
    width: "45%",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center"
  }
});
