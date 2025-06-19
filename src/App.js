import React, { useState } from 'react';
import { fetchZestimate } from './apiService';
import AVMComparison from './AVMComparison';

function App() {
  const [address, setAddress] = useState('');
  const [zillowEstimate, setZillowEstimate] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchZestimate(address);
      if (data?.zestimate?.amount) {
        setZillowEstimate(data.zestimate.amount);
      } else {
        setZillowEstimate(null);
      }
    } catch (error) {
      console.error('Failed to fetch Zestimate:', error);
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



