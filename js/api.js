const Frisbee = require("frisbee");

const api = new Frisbee({
  baseURI: "https://pictuar-puzzle.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const getEasyImages = id => {
  return api
    .get(`/images/${id}`)
    .then(res => {
      return res.body.beginner_pieces;
    })
    .catch(err => console.log(err));
};

export const getHardImages = id => {
  return api
    .get(`/images/${id}`)
    .then(res => {
      return res.body.intermediate_pieces;
    })
    .catch(err => console.log(err));
};

export const postEasyGame = id => {
  return api
    .post("/games/", { body: { img_id: id, diff: "4", user_id: "1" } })
    .then(res => {
      return res.body;
    })
    .catch(err => console.log(err));
};

export const postHardGame = id => {
  return api
    .post("/games/", { body: { img_id: id, diff: "9", user_id: "1" } })
    .then(res => {
      return res.body;
    })
    .catch(err => console.log(err));
};

export const putGame = id => {
  return api
    .put(`/games/${id}`)
    .then(res => {
      return res.body;
    })
    .catch(err => console.log(err));
};
