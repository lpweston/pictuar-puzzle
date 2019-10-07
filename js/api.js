const Frisbee = require('frisbee');

const api = new Frisbee({
  baseURI: 'https://pictuar-puzzle.herokuapp.com'
});

export const getImages = id => {
  return api
    .get(`/images/${id}`)
    .then(stuff => {
      return stuff.body.beginner_pieces;
    })
    .catch(err => console.log(err));
};
