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
  ActivityIndicator,
  TouchableHighlight,
  Switch
} from "react-native";

const api = new Frisbee({ baseURI: "https://pictuar-puzzle.herokuapp.com/" });

export default class ChooseGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
      photo: null
    };
  }

  // componentDidUpdate() {
  //   console.log("picture selected");
  // }

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

      const { photo } = this.state;
      return (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>Choose a puzzle!</Text>
            <View style={styles.imageBox}>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("GameAR", {
                      imageId: this.state.dataSource.body[0].id
                    })
                  }
                >
                  {images[0]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("GameAR", {
                      imageId: this.state.dataSource.body[1].id
                    })
                  }
                >
                  {images[1]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10, paddingTop: 30 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("GameAR", {
                      imageId: this.state.dataSource.body[2].id
                    })
                  }
                >
                  {images[2]}
                </TouchableOpacity>
              </View>
              <View style={{ position: "absolute", top: 145, right: 130 }}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("GameAR", {
                      imageId: this.state.dataSource.body[10].id
                    })
                  }
                >
                  {images[10]}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.colourContainer}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.props.navigation.navigate("UploadImage")}
            >
              <Text style={styles.textBtn}>Upload Image!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => this.props.navigation.navigate("Leaderboard")}
            >
              <Text style={styles.textBtn}>Leaderboard</Text>
            </TouchableOpacity>
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
  diffBtn: {
    backgroundColor: "#92BFD7",
    padding: 25,
    width: "100%",
    borderRadius: 10
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
    paddingTop: 20,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  subTitle: {
    paddingTop: 0,
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
    justifyContent: "space-between",
    padding: 20
  },
  btnContainerBottom: {
    width: "90%"
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
    padding: 30,
    width: "85%",
    borderRadius: 10,
    marginBottom: 50
  },
  textBtn: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  }
});
