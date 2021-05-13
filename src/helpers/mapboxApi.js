const { RESTDataSource } = require('apollo-datasource-rest');

module.exports.MapboxApi = class MapboxApi extends RESTDataSource {
  constructor() {
    // Always call super()
    super();
    // Sets the base URL for the REST API
    this.baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  }

  getCountryByQuery = async query => {
    // Send a GET request to the specified endpoint
    const country = await this.get(
      `${query}.json?types=region&access_token=${process.env.API_KEY}`
    );

    return JSON.parse(country).features[0];
  };

  async getMostViewedMovies(limit = 10) {
    const data = await this.get('movies', {
      // Query parameters
      per_page: limit,
      order_by: 'most_viewed',
    });
    return data.results;
  }
};
