// src/AVMComparison.js
import React from 'react';

const AVMComparison = ({ zillowEstimate }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '2rem' }}>
      {/* Zillow */}
      <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
        <h3>Zillow Estimate</h3>
        {zillowEstimate ? (
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${zillowEstimate.toLocaleString()}</p>
        ) : (
          <p>Loading or unavailable.</p>
        )}
      </div>

      {/* RPR */}
      <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
        <h3>RPR Widget</h3>
        <iframe
          src="https://runthecomps.com/rpr-widget.html" // Replace with actual embed URL
          title="RPR Estimate"
          width="100%"
          height="200"
          style={{ border: 'none' }}
        />
      </div>

      {/* Placeholder */}
      <div style={{ flex: 1, border: '1px solid #ccc', borderRadius: '10px', padding: '1rem' }}>
        <h3>HouseCanary</h3>
        <p>Estimate not yet available</p>
      </div>
    </div>
  );
};

export default AVMComparison;
