import axios from 'axios';

import { GOOGLE_MAP_GEOCODE_API } from '../../config';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place =>
  axios
    .get(GEOCODE_ENDPOINT, {
      params: {
        address: place,
        key: GOOGLE_MAP_GEOCODE_API,
      },
    })
    .then((results) => {
      const { data } = results;
      const { status } = data;
      const result = data.results[0];
      if (typeof result === 'undefined') {
        return { status };
      }

      const address = result.formatted_address;
      const { location } = result.geometry;
      return { status, address, location };
    });

export const reverseGeocode = () => null;
