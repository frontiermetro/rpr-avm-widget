import axios from 'axios';

const BROWSER_TOKEN = process.env.REACT_APP_ZILLOW_BROWSER_TOKEN;
console.log("Zillow Browser Token ENV:", BROWSER_TOKEN); // Debug: confirm ENV injection

const API_URL = 'https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimate';

export async function fetchZestimate(address) {
  try {
    const response = await axios.get(API_URL, {
      params: { address },
      headers: {
        Authorization: `Bearer ${BROWSER_TOKEN}`,
      },
    });

    console.log("Zillow API Response:", response.data); // Debug: log API response
    return response.data;
  } catch (error) {
    console.error("Error fetching Zestimate:", error); // Debug: log error
    return null;
  }
}



