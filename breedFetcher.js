const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, _response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const data = JSON.parse(body);
        let description;
        if (data.length === 0) {
          description = `Sorry, ${breedName} could not be found.`;
        } else {
          description = data[0].description;
        }
        callback(null, description);
      }
    }
  );
};

module.exports = { fetchBreedDescription };