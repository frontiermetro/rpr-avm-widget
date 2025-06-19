import React, { useState } from 'react';
import { fetchZestimate } from './apiService';
import AVMComparison from './AVMComparison';

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);

  const handleSearch = async () => {
    const result = await fetchZestimate(address);
    console.log("Zillow API result:", result);

    if (result?.bundle?.[0]?.zestimate) {
      setZillowEstimate(result.bundle[0].zestimate);
    } else {
      setZillowEstimate("Unavailable");
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
        Run The Comps
      </button>

      <AVMComparison zillowEstimate={zillowEstimate} />
    </div>
  );
}

export default App;




