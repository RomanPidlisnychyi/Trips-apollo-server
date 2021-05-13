const { fetchUrl } = require('fetch');
const axios = require('axios');
const { MapboxApi } = require('../helpers/mapboxApi');

module.exports.getLocation = async query => {
  try {
    const res = await axios(
      'https://api.mapbox.com/geocoding/v5/mapbox.places/Kyiv.json?types=region&access_token=pk.eyJ1IjoibHVja3lyb21hIiwiYSI6ImNrb2xqNmptZzAzdzYydWw2MnJqbzR3MnMifQ.5TjmdZXAiy1doxF6-x2pag'
    );

    console.log('data', res.data);
  } catch (err) {
    console.log(err);
  }
};
