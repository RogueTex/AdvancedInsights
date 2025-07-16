import React, { useState } from 'react';

function QueryForm({ onSubmit, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Enter your query..."
        style={{ width: '70%', padding: '0.5rem' }}
        disabled={loading}
      />
      <button type="submit" disabled={loading || !query.trim()} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default QueryForm; 