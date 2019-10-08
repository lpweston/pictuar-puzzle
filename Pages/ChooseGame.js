import React, { Component } from "react";
const Frisbee = require("frisbee");

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

const api = new Frisbee({ baseURI: "https://pictuar-puzzle.herokuapp.com/" });

export default class ChooseGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return api
      .get("images/")
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
        style={{
          marginRight: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#92BFD7",
          backgroundColor: "#92BFD7"
        }}
      >
        <Text
          onPress={() => this.props.navigation.navigate("Profile")}
          style={{ fontSize: 16, padding: 5, color: "white" }}
        >
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
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    } else {
      let images = this.state.dataSource.body.map((val, key) => {
        return (
          <View key={key} style={styles.container}>
            <Image style={styles.imageThumb} source={{ uri: val.url }} />
          </View>
        );
      });

      return (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>Choose a puzzle!</Text>
            <View style={styles.imageBox}>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[0]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[1]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[2]}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.colourContainer}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => this.props.navigation.navigate("Create")}
              >
                <Text style={styles.textBtn}>Upload Image!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.colourContainer}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.userBtn}
                onPress={() => this.props.navigation.navigate("Leaderboard")}
              >
                <Text style={styles.textBtn}>Leaderboard</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.difficultyContainer}>
            <Text style={styles.title}>Choose your difficulty:</Text>
            <View style={styles.imageBox}>
              <View style={{ padding: 10, paddingTop: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  <Image
                    style={styles.imageThumb}
                    source={require("../assets/grid2x2.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  <Image
                    style={styles.imageThumb}
                    source={require("../assets/grid3x3.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 40 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  <Image
                    style={styles.imageThumb}
                    source={require("../assets/grid4x4.png")}
                  ></Image>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  colourContainer: {
    alignItems: "center",
    backgroundColor: "#75A0B9",
    paddingBottom: 10
  },
  difficultyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  buttonContainer: {
    paddingTop: 10,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
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
    justifyContent: "space-between"
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  imageThumb: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white"
  },
  images: {
    flexDirection: "row"
  },
  logo: {
    width: "95%",
    height: "28%"
  },
  imageBox: {
    flexDirection: "row"
  },
  rightHeader: {
    color: "white"
  },
  userBtn: {
    backgroundColor: "#92BFD7",
    padding: 15,
    width: "55%",
    borderRadius: 10
  },
  textBtn: {
    fontSize: 15,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
});
