const Frisbee = require('frisbee');

const api = new Frisbee({
  baseURI: 'https://pictuar-puzzle.herokuapp.com'
});

export const getImages = id => {
  console.log('getting images in api');
  return api
    .get(`/images/${id}`)
    .then(stuff => {
      console.log(stuff.body);
      return stuff.body.beginner_pieces;
    })
    .catch(err => console.log(err));
};
