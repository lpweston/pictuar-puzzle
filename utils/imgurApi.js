const axios = require("axios");
const Jimp = require("jimp");

const request = axios.create({
  baseURL: "https://api.imgur.com",
  headers: {
    Authorization: "Client-ID c3de3d79fdea3d0"
  }
});

const getImage = endpoint => {
  const url = `/3/image/${endpoint}`;
  return request.get(url).then(({ data }) => {
    return data;
  });
};

const postImage = image => {
  const url = `/3/upload/`;
  Jimp.read(image).then(image => {
    const params = { image };
    return request.post(url, params).then(({ data }) => {
      console.log(data);
    });
  });
};

postImage("parrots.jpg");

// getImage("spbm9PH")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
