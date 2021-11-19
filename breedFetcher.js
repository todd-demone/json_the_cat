const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, _response, body) => {
      if (error) {
        callback(error, null);
      // invalid/nonexistent breed
      } else if (JSON.parse(body).length === 0) {
        error = `Sorry, ${breedName} is not a valid breed.`
        callback(error, null);
      // valid breed request
      } else {
        callback(null, JSON.parse(body)[0].description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };