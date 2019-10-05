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
  ActivityIndicator
} from "react-native";

export default class ChooseGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null
    };
  }

  componentDidMount() {
    return fetch("https://pictuar-puzzle.herokuapp.com/images/")
      .then(response => response.json())
      .then(responseJson => {
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
      let images = this.state.dataSource.map((val, key) => {
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
              <View style={{ padding: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[0]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[1]}
                </TouchableOpacity>
              </View>
              <View style={{ padding: 10 }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("GameAR")}
                >
                  {images[2]}
                </TouchableOpacity>
              </View>
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
                    source={require("../assets/grid2x2.png")}
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
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  difficultyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  title: {
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10
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
  }
});
