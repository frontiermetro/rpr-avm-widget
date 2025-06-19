import axios from 'axios';

const BROWSER_TOKEN = process.env.REACT_APP_ZILLOW_BROWSER_TOKEN;
const API_URL = 'https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimates';

export async function fetchZestimate(address) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        near: address,
        limit: 1
      },
      headers: {
        Authorization: `Bearer ${BROWSER_TOKEN}`
      }
    });

    console.log("Zillow API raw response:", response.data);

    const bundle = response.data?.bundle;
    if (Array.isArray(bundle) && bundle.length > 0) {
      return bundle[0]; // Return first property result
    } else {
      return null;
    }

  } catch (error) {
    console.error("Error fetching Zestimate:", error);
    return null;
  }
}



