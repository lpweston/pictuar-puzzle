import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class Leaderboard extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity
        style={{
          marginRight: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#92BFD7",
          backgroundColor: "#92BFD7"
        }}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={{ fontSize: 16, padding: 5, color: "white" }}>
          Profile
        </Text>
      </TouchableOpacity>
    ),
    headerTitle: (
      <Image
        style={{ width: 100, height: "100%", padding: 15 }}
        source={require("../assets/pictuar-puzzle_logo.png")}
      />
    )
  });

  render() {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();

    const newDate = hours + ":" + min + ":" + sec;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.leaderboard}>
            <Text style={styles.leaderboardTitle}>Leaderboards</Text>
          </View>

          <View style={styles.leaderboardDiv}>
            <Text style={styles.leaderboardComplete}>Time to complete:</Text>
            <Text style={styles.leaderboardText}>
              Best current time: {newDate}
            </Text>
            <Image
              source={require("../assets/game_parrots.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 3,
                borderRadius: 5,
                borderColor: "white",
                marginTop: 15,
                marginLeft: 10,
                marginRight: "auto"
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: 80,
                right: 50,
                color: "white",
                fontWeight: "bold"
              }}
            >
              1st - will104: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 100,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              2nd - laura243: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 120,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              3rd - adam284: {newDate}
            </Text>
          </View>
          <View style={styles.leaderboardDiv}>
            <Text style={styles.leaderboardComplete}>Time to complete:</Text>
            <Text style={styles.leaderboardText}>
              Best current time: {newDate}
            </Text>
            <Image
              source={require("../assets/game_parrots.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 3,
                borderRadius: 5,
                borderColor: "white",
                marginTop: 15,
                marginLeft: 10,
                marginRight: "auto"
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: 80,
                right: 50,
                color: "white",
                fontWeight: "bold"
              }}
            >
              1st - will104: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 100,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              2nd - laura243: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 120,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              3rd - adam284: {newDate}
            </Text>
          </View>
          <View style={styles.leaderboardDiv}>
            <Text style={styles.leaderboardComplete}>Time to complete:</Text>
            <Text style={styles.leaderboardText}>
              Best current time: {newDate}
            </Text>
            <Image
              source={require("../assets/game_parrots.jpg")}
              style={{
                height: 100,
                width: 100,
                borderWidth: 3,
                borderRadius: 5,
                borderColor: "white",
                marginTop: 15,
                marginLeft: 10,
                marginRight: "auto"
              }}
            />
            <Text
              style={{
                position: "absolute",
                top: 80,
                right: 50,
                color: "white",
                fontWeight: "bold"
              }}
            >
              1st - will104: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 100,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              2nd - laura243: {newDate}
            </Text>
            <Text
              style={{
                position: "absolute",
                top: 120,
                right: 32,
                color: "white",
                fontWeight: "bold"
              }}
            >
              3rd - adam284: {newDate}
            </Text>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 30,
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
    paddingTop: 10
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
    borderRadius: 20
  },
  leaderboardTitle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 18
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
    fontSize: 12,
    position: "absolute",
    top: 50
  },
  leaderboardComplete: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 10
  }
});
