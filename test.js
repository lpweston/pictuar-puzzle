let arr = [1, 2, 3, 4];

const shuffleArr = arr => {
  arr.sort(() => Math.random() - 0.5);
};

arr = shuffleArr(arr);
console.log(arr);
