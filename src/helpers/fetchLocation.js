const fetch = require('node-fetch');

module.exports.fetchLocation = location =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?types=region&access_token=pk.eyJ1IjoibHVja3lyb21hIiwiYSI6ImNrb2xqNmptZzAzdzYydWw2MnJqbzR3MnMifQ.5TjmdZXAiy1doxF6-x2pag`
  )
    .then(response => response.json())
    .then(data => data.features[0]);
