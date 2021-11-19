const request = require('request');

const url = `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`;
request(
  url,
  (error, _response, body) => {
    
    if (error) {
      console.log(`Sorry, an error occurred: ${error}`);
      process.exit();
    }
    
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      console.log(`Sorry, ${process.argv[2]} could not be found.`);
    } else {
      const description = data[0].description;
      console.log(description);
    }

  }
);