const Trip = require('./models/Trip');
const { fetchLocation } = require('./helpers/fetchLocation');

module.exports.resolvers = {
  Query: {
    trips: async (_, { offset, limit }) => {
      const pageNumber = offset ? offset + 1 : 1;
      const limitNumber = limit ? Number(limit) : 0;
      const matchToSkip = (pageNumber - 1) * limitNumber;

      return await Trip.find().skip(matchToSkip).limit(limitNumber);
    },
  },
  Mutation: {
    createTrip: onCreateTrip,
  },
  Trip: {
    id: trip => `urn::trip:${trip._id}`,
  },
  Location: {
    id: locationId => locationId,
    name: async locationId => {
      const location = await fetchLocation(locationId);

      return location.text;
    },
  },
};

async function onCreateTrip(_, { input: { fromPlaceName, toPlaceName } }) {
  const fromPlaceReq = fetchLocation(fromPlaceName);
  const toPlaceReq = fetchLocation(toPlaceName);

  const [fromPlace, toPlace] = await Promise.all([fromPlaceReq, toPlaceReq]);

  const newTrip = await Trip.create({
    fromPlace: fromPlace.id,
    toPlace: toPlace.id,
  });

  return newTrip;
}
