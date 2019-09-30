const Jimp = require("jimp");

const crop = (fileName, num, xs, ys, xl, yl) => {
  Jimp.read(`./${fileName}fixed.jpg`)
    .then(pic => {
      return pic.crop(xs, ys, xl, yl).write(`${fileName}${num}.jpg`);
    })
    .catch(err => {
      console.error(err);
    });
};

const resize = (fileName, short) => {
  Jimp.read(`${fileName}.jpg`)
    .then(pic => {
      return pic
        .crop(0, 0, short, short)
        .resize(1000, 1000)
        .write(`./${fileName}fixed.jpg`);
    })
    .catch(err => {
      console.error(err);
    });
};

async function imgSplitter(fileName, width, height) {
  let short;
  width > height ? (short = height) : (short = width);
  const makefile = await resize(fileName, short);
  crop(fileName, 1, 0, 0, 500, 500);
  crop(fileName, 2, 500, 0, 500, 500);
  crop(fileName, 3, 0, 500, 500, 500);
  crop(fileName, 4, 500, 500, 500, 500);
}

imgSplitter("parrots", 1920, 1080);
