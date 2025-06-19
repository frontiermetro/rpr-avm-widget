import axios from 'axios';

const SERVER_TOKEN = process.env.REACT_APP_ZILLOW_SERVER_TOKEN;
const API_URL = 'https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimates';

export async function fetchZestimate(address) {
  try {
    const response = await axios.get(API_URL, {
      params: { address },
      headers: {
        Authorization: `Bearer ${SERVER_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Zestimate:', error);
    return null;
  }
}





