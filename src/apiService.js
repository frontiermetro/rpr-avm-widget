import axios from 'axios';

export async function fetchZestimate(address) {
  try {
    const response = await axios.get(`/.netlify/functions/zestimate`, {
      params: { address }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Zestimate from Netlify function:', error);
    return null;
  }
}





