const combineTiles = require('combine-tiles');
const { join } = require('path');

const arr = [0, 1, 2, 3];

const reqArr = ['./res/c1.png', './res/c2.png', './res/c3.png', './res/c4.png'];
const imgCards = [
  join(__dirname, 'c1.png'),
  join(__dirname, 'c2.png'),
  join(__dirname, 'c3.png'),
  join(__dirname, 'c4.png')
];
function shuffleArr(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffleArr(arr);

const shuffledReq = arr.map(elem => {
  return reqArr[elem];
});
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
const dest = join(__dirname, 'combined.png');

combineTiles(tiles, size, size, dest).catch(console.error);
