const Frisbee = require('frisbee');

const api = new Frisbee({
  baseURI: 'https://pictuar-puzzle.herokuapp.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
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
  return api
    .post('/games/', { body: { img_id: id } })
    .then(res => {
      console.log(res);
      return res.body;
    })
    .catch(err => console.log(err));
};
