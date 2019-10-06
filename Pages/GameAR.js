import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from "react-native";

import { ViroARSceneNavigator } from "react-viro";

var sharedProps = {
  apiKey: "AD45DBB9-F152-4A83-AA74-086AAD562BA6"
};

var InitialARScene = require("../js/PictureSceneAR");

var UNSET = "UNSET";
var AR_NAVIGATOR_TYPE = "AR";

var defaultNavigatorType = UNSET;

export default class GameAR extends Component {
  constructor() {
    super();

    this.state = {
      navigatorType: defaultNavigatorType,
      sharedProps: sharedProps
    };
    this._getExperienceSelector = this._getExperienceSelector.bind(this);
    this._getARNavigator = this._getARNavigator.bind(this);
    this._getExperienceButtonOnPress = this._getExperienceButtonOnPress.bind(
      this
    );
    this._exitViro = this._exitViro.bind(this);
  }

  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
        style={{
          color: "white",
          marginRight: 10,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "#92BFD7",
          backgroundColor: "#92BFD7"
        }}
      >
        <Text style={{ fontSize: 16, padding: 5, color: "white" }}>
          Profile
        </Text>
      </TouchableOpacity>
    ),
    headerTitle: (
      <Image
        style={{ width: 100, height: "100%", padding: 20 }}
        source={require("../assets/pictuar-puzzle_logo.png")}
      />
    )
  };

  render() {
    if (this.state.navigatorType == UNSET) {
      return this._getExperienceSelector();
    } else if (this.state.navigatorType == AR_NAVIGATOR_TYPE) {
      return this._getARNavigator();
    }
  }

  _getExperienceSelector() {
    return (
      <View style={localStyles.outer}>
        <View style={localStyles.inner}>
          <Text style={localStyles.titleText}>ARRR you ready?</Text>

          <TouchableHighlight
            style={localStyles.userBtn}
            onPress={this._getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}
            underlayColor={"#68a0ff"}
          >
            <Text style={localStyles.textBtn}>Start game!</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  _getARNavigator() {
    return (
      <ViroARSceneNavigator
        {...this.state.sharedProps}
        initialScene={{ scene: InitialARScene }}
      />
    );
  }

  _getExperienceButtonOnPress(navigatorType) {
    return () => {
      this.setState({
        navigatorType: navigatorType
      });
    };
  }

  _exitViro() {
    this.setState({
      navigatorType: UNSET
    });
  }
}

var localStyles = StyleSheet.create({
  viroContainer: {
    flex: 1,
    alignItems: "center",
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
    paddingTop: 0,
    paddingBottom: 20,
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
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
    width: "50%",
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
    height: "32%"
  }
});

module.exports = GameAR;
