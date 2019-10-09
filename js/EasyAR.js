import React, { Component } from 'react';
import * as api from './api';
import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroText
} from 'react-viro';

export default class EasyAR extends Component {
  constructor() {
    super();

    this.state = { loaded: false };
  }

  componentDidMount() {
    const { imageId } = this.props;
    this.fetchImages(imageId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { imageId } = this.props;
    if (prevState.images !== this.state.images) {
      this.fetchGame(imageId);
    } else if (prevState.game !== this.state.game) {
      getEasyTargets(this.state);
    }
  }

  render() {
    const { images, game, loaded } = this.state;
    if (loaded) {
      return (
        <ViroARScene>
          <ViroARImageMarker target={'targetOne'}>
            <ViroImage
              height={0.07}
              width={0.07}
              source={{ uri: images[0].url }}
              position={[0, 0.5, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={'targetTwo'}>
            <ViroImage
              height={0.07}
              width={0.07}
              source={{ uri: images[1].url }}
              position={[0, 0.05, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={'targetThree'}>
            <ViroImage
              height={0.07}
              width={0.07}
              source={{ uri: images[2].url }}
              position={[0, 0.05, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          <ViroARImageMarker target={'targetFour'}>
            <ViroImage
              height={0.07}
              width={0.07}
              source={{ uri: images[3].url }}
              position={[0, 0.05, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker>
          {/* <ViroARImageMarker target={'targetWhole'}>
            <ViroText
              style={styles.loadingTextStyle}
              width={1}
              height={1}
              text="You win!"
              position={[0, 0.05, 0]}
              rotation={[-90, 0, 0]}
            />
          </ViroARImageMarker> */}
        </ViroARScene>
      );
    }
    return (
      <ViroARScene>
        <ViroText
          text={'loading...'}
          scale={[0.3, 0.3, 0.3]}
          position={[0, -0.5, -0.25]}
          rotation={[-90, 0, 0]}
          style={styles.loadingTextStyle}
        />
      </ViroARScene>
    );
  }
  fetchImages = id => {
    api.getEasyImages(id).then(imageArr => {
      this.setState({ images: imageArr });
    });
  };
  fetchGame = id => {
    api.postEasyGame(id).then(gameArr => {
      this.setState({ game: gameArr, loaded: true });
    });
  };
}

getEasyTargets = state => {
  const { relation, win_img } = state.game;

  console.log(state.game);

  const tiles = [
    'not used',
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
    require(`./res/11.png`),
    require(`./res/12.png`),
    require(`./res/13.png`),
    require(`./res/14.png`),
    require(`./res/15.png`),
    require(`./res/16.png`)
  ];

  const firstTile = tiles[relation['1']];
  const secondTile = tiles[relation['2']];
  const thirdTile = tiles[relation['3']];
  const fourthTile = tiles[relation['4']];

  ViroARTrackingTargets.createTargets({
    targetOne: {
      source: firstTile,
      orientation: 'Up',
      physicalWidth: 0.07 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetTwo: {
      source: secondTile,
      orientation: 'Up',
      physicalWidth: 0.07 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetThree: {
      source: thirdTile,
      orientation: 'Up',
      physicalWidth: 0.07 // real world width in meters
    }
  });

  ViroARTrackingTargets.createTargets({
    targetFour: {
      source: fourthTile,
      orientation: 'Up',
      physicalWidth: 0.07 // real world width in meters
    }
  });

  // ViroARTrackingTargets.createTargets({
  //   targetWhole: {
  //     source: { uri: win_img },
  //     orientation: 'Up',
  //     physicalWidth: 0.14 // real world width in meters
  //   }
  // });
};

var styles = StyleSheet.create({
  loadingTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = EasyAR;
