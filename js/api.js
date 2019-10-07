const baseURL = 'https://pictuar-puzzle.herokuapp.com';

export const getImages = id => {
  return fetch(`${baseURL}/images/${id}`).then(stuff => {
    console.log(stuff);
    return stuff;
  });
};
