const axios = require('axios');

exports.handler = async (event) => {
  const address = event.queryStringParameters.address;
  const token = process.env.REACT_APP_ZILLOW_BROWSER_TOKEN;
  const apiUrl = 'https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimates';

  try {
    const response = await axios.get(apiUrl, {
      params: { address },
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error fetching Zestimate:', error.message);
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
