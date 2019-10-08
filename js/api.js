const Frisbee = require('frisbee');

const api = new Frisbee({
  baseURI: 'https://pictuar-puzzle.herokuapp.com'
});

export const getImages = id => {
  return api
    .get(`/images/${id}`)
    .then(res => {
      return res.body.beginner_pieces;
    })
    .catch(err => console.log(err));
};

export const postGame = id => {
  // return fetch('https://pictuar-puzzle.herokuapp.com/games/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     img_id: id
  //   })
  // }).then(res => {
  //   console.log(res);
  //   return res;
  // });
  console.log(id);
  return api
    .post('/games/', { img_id: id })
    .then(res => {
      console.log(res);
      return res.body;
    })
    .catch(err => console.log(err));
};
