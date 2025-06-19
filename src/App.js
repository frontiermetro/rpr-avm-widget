import React, { useState } from 'react';
import { fetchZestimate } from './apiService';
import AVMComparison from './AVMComparison';

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);

  const handleSearch = async () => {
    console.log("Fetching Zestimate for:", address);
    const data = await fetchZestimate(address);
    console.log("API data:", data);

    if (data?.bundle?.[0]?.zestimate) {
      setZillowEstimate(data.bundle[0].zestimate);
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
      <button onClick={handleSearch} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
        Get Estimates
      </button>

      <AVMComparison zillowEstimate={zillowEstimate} />
    </div>
  );
}

export default App;






