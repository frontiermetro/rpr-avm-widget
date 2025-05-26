import axios from 'axios';

const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;
const ZILLOW_ALT_HOST = 'zillow-com1.p.rapidapi.com'; // New host

export async function getZestimateAlt(address) {
  try {
    const response = await axios.get(
      `https://${ZILLOW_ALT_HOST}/zestimate`,
      {
        params: { address },
        headers: {
          'x-rapidapi-host': ZILLOW_ALT_HOST,
          'x-rapidapi-key': API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Zestimate (Alt):', error);
    return null;
  }
}
