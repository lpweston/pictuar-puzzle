import React, { Component } from "react";
import * as api from "./api";
import { StyleSheet } from "react-native";

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroText
} from "react-viro";

export default class PictureSceneAR extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { imageId } = this.props;
    this.fetchImages(imageId);
    this.fetchGame(imageId);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.images !== this.state.images) {
      getTargets(this.state);
    }
  }
  render() {
    const { images } = this.state;
    if (images) {
      return (
        <ViroARScene>
          <ViroARImageMarker target={"targetOne"}>
            <ViroImage
              height={0.1}
              width={0.1}
              source={{ uri: images[0].url }}
              position={[0, 0.1, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={"targetTwo"}>
            <ViroImage
              height={0.1}
              width={0.1}
              source={{ uri: images[1].url }}
              position={[0, 0.1, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={"targetThree"}>
            <ViroImage
              height={0.1}
              width={0.1}
              source={{ uri: images[2].url }}
              position={[0, 0.1, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={"targetFour"}>
            <ViroImage
              height={0.1}
              width={0.1}
              source={{ uri: images[3].url }}
              position={[0, 0.1, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          {/* <ViroARImageMarker target={'targetWhole'}>
            <ViroText
              style={styles.textStyle}
              width={1}
              height={1}
              text="You win!"
              position={[0, 0.15, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker> */}
        </ViroARScene>
      );
    }
    return (
      <ViroARScene>
        <ViroText
          style={styles.textStyle}
          width={1}
          height={1}
          text="You win!"
          position={[0, 0.15, 0]}
          rotation={[-90, 0, 0]}
        />
      </ViroARScene>
    );
  }
  fetchImages = id => {
    api.getImages(id).then(imageArr => {
      this.setState({ images: imageArr });
    });
  };
  fetchGame = id => {
    api.postGame(id).then(game => {
      console.log(game);
      this.setState({ game });
    });
  };
}

getTargets = state => {
  const tiles = [
    require(`./res/1.png`),
    require(`./res/2.png`),
    require(`./res/3.png`),
    require(`./res/4.png`),
    require(`./res/5.png`),
    require(`./res/6.png`),
    require(`./res/7.png`),
    require(`./res/8.png`),
    require(`./res/9.png`),
    require(`./res/10.png`),
    require(`./res/11.png`)
  ];

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: tiles[0],
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetTwo: {
      source: tiles[1],
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetThree: {
      source: tiles[2],
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetFour: {
      source: tiles[3],
      orientation: "Up",
      physicalWidth: 0.1 // real world width in meters
    }
  });

  // ViroARTrackingTargets.createTargets({
  //   targetWhole: {
  //     source: require('./res/combined.png'),
  //     orientation: 'Up',
  //     physicalWidth: 0.2 // real world width in meters
  //   }
  // });
};

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: "Arial",
    fontSize: 5,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = PictureSceneAR;
