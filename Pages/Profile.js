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

export default class Profile extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        style={{ width: 100, height: "100%", padding: 20 }}
        source={require("../assets/pictuar-puzzle_logo.png")}
      />
    )
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.leaderboardTitle}>User Profile</Text>
          </View>

          <View style={styles.leaderboardDiv}>
            <Text style={styles.leaderboardComplete}>
              John Smith | Johnsmith19
            </Text>
            <Text style={styles.leaderboardText}>johnsmith@email.com</Text>
            <Image
              source={require("../assets/man_photo.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 3,
                borderRadius: 5,
                borderColor: "white",
                marginTop: 15,
                justifyContent: "center"
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: 95,
                right: 25,
                color: "white",
                fontWeight: "bold"
              }}
            >
              Best score (easy): 00:42:31
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 130,
                right: 25,
                color: "white",
                fontWeight: "bold"
              }}
            >
              Best score (hard): 01:59:18
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
    color: "white",
    fontWeight: "bold"
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
    paddingTop: 0
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
  leaderboard: {
    backgroundColor: "#92BFD7",
    margin: 10,
    padding: 5,
    width: "90%",
    borderRadius: 20
  },
  leaderboardDiv: {
    backgroundColor: "#92BFD7",
    margin: 20,
    padding: 10,
    width: "90%",
    borderRadius: 20,
    position: "absolute",
    top: 80
  },
  leaderboardTitle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  },
  leaderboardText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  textBox: {
    marginRight: "auto",
    color: "white",
    fontWeight: "bold",
    fontSize: 12
  },
  leaderboardComplete: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 10
  }
});
