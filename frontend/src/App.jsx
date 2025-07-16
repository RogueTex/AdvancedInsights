import React, { useState } from 'react';
import axios from 'axios';
import QueryForm from './components/QueryForm';
import SummaryDisplay from './components/SummaryDisplay';

function App() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleQuery = async (query) => {
    setLoading(true);
    setSummary('');
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
      const response = await axios.post(`${apiUrl}/search`, { query });
      setSummary(response.data.summary);
    } catch (error) {
      setSummary('Error fetching summary.');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Live Insights Scraper</h1>
      <QueryForm onSubmit={handleQuery} loading={loading} />
      <SummaryDisplay summary={summary} loading={loading} />
    </div>
  );
}

export default App; 