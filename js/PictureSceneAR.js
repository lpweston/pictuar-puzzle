'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroImage,
  ViroText
} from 'react-viro';

const arr = [
  require('./res/c1.png'),
  require('./res/c2.png'),
  require('./res/c3.png'),
  require('./res/c4.png')
];

function shuffleArr(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffleArr(arr);

export default class PictureSceneAR extends Component {
  constructor() {
    super();

    this.state = {};
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
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: arr[0],
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetTwo: {
    source: arr[1],
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetThree: {
    source: arr[2],
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  targetFour: {
    source: arr[3],
    orientation: 'Up',
    physicalWidth: 0.1 // real world width in meters
  }
});

// ViroARTrackingTargets.createTargets({
//   targetWhole: {
//     source: require('./res/whole.jpg'),
//     orientation: 'Up',
//     physicalWidth: 0.4 // real world width in meters
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
