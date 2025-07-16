import React, { useState } from 'react';
import axios from 'axios';
import QueryForm from './components/QueryForm';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modelLoading, setModelLoading] = useState(true); // For first-time model load

  const handleQuery = async (query) => {
    setLoading(true);
    setSummary('');
    setError('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://advancedinsights.onrender.com';
      const response = await axios.post(`${apiUrl}/search`, { query });
      setSummary(response.data.summary);
      setError('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setError(error.response.data.detail);
      } else {
        setError('Error fetching summary. The backend may be waking up or busy.');
      }
      setSummary('');
    }
    setLoading(false);
    setModelLoading(false); // Model is loaded after first request
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Live Insights Scraper</h1>
      <QueryForm onSubmit={handleQuery} loading={loading} />
      {modelLoading && (
        <div style={{ color: '#888', marginBottom: '1rem' }}>
          <em>Note: The first search may take up to a minute as the AI model loads on the server.</em>
        </div>
      )}
      <SummaryDisplay summary={summary} loading={loading} error={error} />
    </div>
  );
}

export default App; 