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

export default class ChooseGame extends Component {
  static navigationOptions = {
    // title: "title"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose a game!</Text>
        {/* <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("GameAR")}
            >
            <Text style={styles.textBtn}>Click</Text>
        </TouchableOpacity> */}

        <View>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "white"
            }}
            source={require("../assets/game_parrots.jpg")}
          />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => this.props.navigation.navigate("GameAR")}
          >
            <Text style={styles.textBtn}>Play!</Text>
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
    paddingTop: 10
  },
  userBtn: {
    backgroundColor: "#F0ECE4",
    padding: 15,
    width: "35%",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center"
  }
});
