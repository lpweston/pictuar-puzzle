const combineTiles = require('combine-tiles');
const { join } = require('path');

const shuffler = () => {
  const arr = [0, 1, 2, 3];

  const imgCards = [
    './js/res/c1.png',
    './js/res/c2.png',
    './js/res/c3.png',
    './js/res/c4.png'
  ];
  function shuffleArr(array) {
    array.sort(() => Math.random() - 0.5);
  }

  shuffleArr(arr);

  const shuffledCards = arr.map(elem => {
    return imgCards[elem];
  });

  const size = 380;
  const tiles = [
    { x: 0, y: 0, file: shuffledCards[0] },
    { x: 1, y: 0, file: shuffledCards[1] },
    { x: 0, y: 1, file: shuffledCards[2] },
    { x: 1, y: 1, file: shuffledCards[3] }
  ];
  const dest = join('./js/res/combined.png');

  combineTiles(tiles, size, size, dest).catch(console.error);
  return arr;
};

module.exports = { shuffler };
