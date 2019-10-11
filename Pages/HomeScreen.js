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
          style={styles.logo}
          source={require("../assets/pictuar-puzzle_logo-2.png")}
        />
        <Text style={styles.subHeading}>Login or create new a user below:</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#BEBEBE"
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#BEBEBE"
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
    backgroundColor: "#75A0B9"
  },
  title: {
    paddingTop: 30,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  subHeading: {
    textAlign: "center",
    marginBottom: 5,
    fontWeight: "bold",
    paddingTop: 50,
    color: "white"
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
    backgroundColor: "#92BFD7",
    padding: 15,
    width: "45%",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  logo: {
    width: "95%",
    height: "30%"
  }
});
