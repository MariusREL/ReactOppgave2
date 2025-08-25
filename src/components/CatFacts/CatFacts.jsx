import { useState, useEffect } from 'react';
import './CatFacts.css';

const CatFacts = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const response = await fetch('https://catfact.ninja/facts?limit=5');
        if (!response.ok) {
          throw new Error('Data fetching failed');
        }
        const data = await response.json();
        setFacts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacts();
  }, []);

  return (
    <div className="cat-facts">
      <h2>Cat Facts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CatFacts;
