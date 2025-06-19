import React, { useState } from 'react';
import { fetchZestimate } from './apiService';
import AVMComparison from './AVMComparison';

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    console.log('Fetching Zestimate for address:', address);
    setLoading(true);
    const data = await fetchZestimate(address);
    console.log('Zillow API response:', data);
    setLoading(false);

    if (data?.zestimate) {
      setZillowEstimate(data.zestimate);
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
        {loading ? 'Loading...' : 'Run The Comps'}
      </button>

      <AVMComparison zillowEstimate={zillowEstimate} />
    </div>
  );
}

export default App;




