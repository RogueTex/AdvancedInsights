import React from 'react';

function SummaryDisplay({ summary, loading }) {
  if (loading) return <div>Loading summary...</div>;
  if (!summary) return <div style={{ color: '#888' }}>No summary yet.</div>;
  return (
    <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: 8, marginTop: '1rem' }}>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default SummaryDisplay; 