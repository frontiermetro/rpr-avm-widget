import React, { useState } from 'react';
import { fetchZestimate } from './apiService';
import AVMComparison from './AVMComparison';

console.log("Zillow Client ID (public):", process.env.REACT_APP_ZILLOW_CLIENT_ID);

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);

 const handleSearch = async () => {
  console.log("Fetching Zestimate for:", address); // Confirm function fires

  const data = await fetchZestimate(address);
  console.log("Zillow API response:", data); // Confirm we get a response

  if (data?.zestimate?.amount) {
    setZillowEstimate(data.zestimate.amount);
  } else {
    setZillowEstimate("Unavailable or missing data");
  }
};



  return (
    <div style={{ padding: '2rem' }}>
      <h2>Run The Comps Tool</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter address"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: '1rem', padding: '0.5rem' }}
      >
        Get Estimates
      </button>

      <AVMComparison zillowEstimate={zillowEstimate} />
    </div>
  );
}

export default App;



