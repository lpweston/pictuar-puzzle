const arr = [1, 2, 3, 4];

function shuffleArr(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffleArr(arr);
console.log(arr[0]);
