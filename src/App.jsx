import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import MapComponent from './components/MapComponent';
import Scorecards from './components/Scorecards';
import ChartsContainer from './components/ChartsContainer';

function App() {
  return (
    <div className="app-grid">
      
      <aside className="panel panel-sidebar">
        <Sidebar />
      </aside>

      <section className="panel panel-top" style={{ display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ flex: 1, position: 'relative', minHeight: '400px' }}>
          <MapComponent />
        </div>

        <div style={{ 
          height: 'auto', 
          minHeight: '140px', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          backgroundColor: 'var(--bg-panel)',
          zIndex: 10,
          padding: '10px 0',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Scorecards />
        </div>
      </section>

      <section className="panel panel-bottom">
        <ChartsContainer />
      </section>

    </div>
  );
}

export default App;