import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stressData, setStressData] = useState([]);

  useEffect(() => {
    fetch('/api/pipeline-stress')
      .then(response => response.json())
      .then(data => setStressData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Subsea Pipeline Stress Monitoring</h1>
      <h2>Stress Levels</h2>
      <ul>
        {stressData.map(item => (
          <li key={item.id}>
            Pipeline ID: {item.pipeline_id}, Stress Level: {item.stress_level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
