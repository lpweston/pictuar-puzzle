const Jimp = require("jimp");

async function main(fileName, width, height) {
  let short;
  width > height ? (short = height) : (short = width);
  const image = await Jimp.read(`${fileName}.jpg`);
  image
    .crop(100, 0, short + 100, short)
    .resize(1000, 1000)
    .write(`./${fileName}fixed.jpg`);
}
async function crop(fileName, num, xs, ys, xl, yl) {
  const fragment = await Jimp.read(`./${fileName}fixed.jpg`);
  fragment.crop(xs, ys, xl, yl).write(`${fileName}${num}.jpg`);
}

main("parrots", 1920, 1080);
crop("parrots", 1, 0, 0, 500, 500);
crop("parrots", 2, 500, 0, 500, 500);
crop("parrots", 3, 0, 500, 500, 500);
crop("parrots", 4, 500, 500, 500, 500);

// async function crop(fileName, num, xs, ys, xl, yl) {
//   const fragment = await Jimp.read(`./${fileName}fixed.jpg`);
//   fragment.crop(xs, ys, xl, yl).write(`${fileName}${num}.jpg`);
// }

// const imgSplitter = (fileName, width, height) => {
//   let short;
//   width > height ? (short = height) : (short = width);
//   return Jimp.read(`${fileName}.jpg`)
//     .then(pic => {
//       return pic
//         .crop(100, 0, short + 100, short)
//         .resize(1000, 1000)
//         .write(`./${fileName}fixed.jpg`);
//     })
//     .then(() => {
//       crop(fileName, 1, 0, 0, 500, 500);
//       crop(fileName, 2, 500, 0, 500, 500);
//       crop(fileName, 3, 0, 500, 500, 500);
//       crop(fileName, 4, 500, 500, 500, 500);
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// };

// imgSplitter("parrots", 1920, 1080);
