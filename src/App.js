import React, { useState } from 'react';
import { getZestimateAlt } from './apiService';
import AVMComparison from './AVMComparison';

console.log("Zillow Host ENV:", process.env.REACT_APP_ZILLOW_HOST);

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);

  const handleSearch = async () => {
    const data = await getZestimateAlt(address);
    if (data?.value) {
      setZillowEstimate(data.value);
    } else {
      setZillowEstimate(null);
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


