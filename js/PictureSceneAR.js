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

export default class PictureSceneAR extends Component {
  constructor() {
    super();

    this.state = {
      id: 1,
      images: []
    };
  }

  componentDidMount() {
    const { id } = this.state;
    this.fetchImages(id);
  }

  render() {
    return (
      <ViroARScene>
        <ViroARImageMarker target={'targetOne'}>
          <ViroImage
            height={0.1}
            width={0.1}
            source={require('./res/pic-1.jpeg')}
            position={[0, 0.1, 0]}
            rotation={[-90, 0, 0]}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={'targetTwo'}>
          <ViroImage
            height={0.1}
            width={0.1}
            source={require('./res/pic-2.jpg')}
            position={[0, 0.1, 0]}
            rotation={[-90, 0, 0]}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={'targetThree'}>
          <ViroImage
            height={0.1}
            width={0.1}
            source={require('./res/pic-3.jpg')}
            position={[0, 0.1, 0]}
            rotation={[-90, 0, 0]}
          />
        </ViroARImageMarker>
        <ViroARImageMarker target={'targetFour'}>
          <ViroImage
            height={0.1}
            width={0.1}
            source={require('./res/pic-4.jpg')}
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
  fetchImages = id => {
    api.getImages(id);
  };
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('./res/g1.png'),
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetTwo: {
    source: require('./res/g2.png'),
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetThree: {
    source: require('./res/g3.png'),
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetFour: {
    source: require('./res/g4.png'),
    orientation: 'Up',
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

var styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'Arial',
    fontSize: 5,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

module.exports = PictureSceneAR;
