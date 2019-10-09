import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

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
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps,
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
          <Text style={localStyles.titleText}>Easy (4x4)</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(EASY_AR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.buttonText}>Start</Text>
          </TouchableHighlight>
          <Text style={localStyles.titleText}>Hard (9x9)</Text>

          <TouchableHighlight
            style={localStyles.buttons}
            onPress={this._getExperienceButtonOnPress(HARD_AR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.buttonText}>Start</Text>
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
    backgroundColor: "black"
  },
  outer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black"
  },
  inner: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black"
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
  }
});

module.exports = ViroSample;
