const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    const { query: params } = req;
    axios.get("https://www.googleapis.com/books/v1/volumes", {
      params
    })
      .then(function (response) {
        // console.log("response: " + JSON.stringify(response.data, null, 2));
        res.json(response.data.items.filter(
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        ))
      });
  }
};
