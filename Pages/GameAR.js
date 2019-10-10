import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";

var sharedProps = {
  apiKey: "AD45DBB9-F152-4A83-AA74-086AAD562BA6"
};

// Sets the default scene you want for AR and VR
var EasyARScene = require("../js/EasyAR");
var HardARScene = require("../js/HardAR");

var UNSET = "UNSET";
var EASY_AR_NAVIGATOR_TYPE = "easy";
var HARD_AR_NAVIGATOR_TYPE = "hard";

// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
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
        onPress={() => navigation.navigate("Leaderboard")}
      >
        <Text style={{ fontSize: 16, padding: 5, color: "white" }}>
          Complete!
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

  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    };
    this._getDifficultySelector = this._getDifficultySelector.bind(this);
    this._getEasyARNavigator = this._getEasyARNavigator.bind(this);
    this._getHardARNavigator = this._getHardARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
  }

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    console.log(sharedProps);
    console.log(this.props.navigation.state.params.imageId);
    if (this.state.navigatorType == UNSET) {
      return this._getDifficultySelector();
    } else if (this.state.navigatorType == EASY_AR_NAVIGATOR_TYPE) {
      return this._getEasyARNavigator();
    } else if (this.state.navigatorType == HARD_AR_NAVIGATOR_TYPE) {
      return this._getHardARNavigator();
    }
  }

  // Presents the user with a choice of an AR Difficulty
  _getDifficultySelector() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.title}>Easy (2x2)</Text>

          <TouchableHighlight
            style={localStyles.userBtn}
            onPress={this._getExperienceButtonOnPress(EASY_AR_NAVIGATOR_TYPE)}
            underlayColor={"#91B3C7"}
          >
            <Text style={localStyles.textBtn}>Start!</Text>
          </TouchableHighlight>
          <Text style={localStyles.title}>Medium (3x3)</Text>

          <TouchableHighlight
            style={localStyles.userBtn}
            onPress={this._getExperienceButtonOnPress(HARD_AR_NAVIGATOR_TYPE)}
            underlayColor={"#91B3C7"}
          >
            <Text style={localStyles.textBtn}>Start!</Text>
          </TouchableHighlight>
          <Text style={localStyles.title}>Hard (4x4)</Text>

          <TouchableHighlight
            style={localStyles.userBtn}
            onPress={this._getExperienceButtonOnPress(HARD_AR_NAVIGATOR_TYPE)}
            underlayColor={"#91B3C7"}
          >
            <Text style={localStyles.textBtn}>Start!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  // Returns the ViroARSceneNavigator which will start the AR experience
  _getEasyARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{
          scene: EasyARScene,
          passProps: { imageId: this.props.navigation.state.params.imageId }
        }}
        // viroAppProps={this.state.viroAppProps}
      />
    );
  }

  _getHardARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{
          scene: HardARScene,
          passProps: { imageId: this.props.navigation.state.params.imageId }
        }}
        // viroAppProps={this.state.viroAppProps}
      />
    );
  }

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  // This function "exits" Viro by setting the navigatorType to UNSET.
  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    backgroundColor: "#75A0B9"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#75A0B9"
  },
  titleText: {
    paddingTop: 30,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20
  },
  buttons: {
    height: 80,
    width: 150,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  exitButton: {
    height: 50,
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
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
    paddingBottom: 30,
    fontSize: 25,
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

module.exports = ViroSample;
