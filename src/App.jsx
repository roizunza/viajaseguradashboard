import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar';
import MapComponent from './components/MapComponent';
import Scorecards from './components/Scorecards';
import ChartsContainer from './components/ChartsContainer';

function App() {
  return (
    <div className="app-grid">
      
      {/* CAJA 1: LATERAL (Sidebar) */}
      <aside className="panel panel-sidebar">
        <Sidebar />
      </aside>

      {/* CAJA 2: SUPERIOR (Mapa ARRIBA + KPIs ABAJO) */}
      <section className="panel panel-top" style={{ display: 'flex', flexDirection: 'column' }}>
        
        {/* EL MAPA: Ocupa todo el espacio disponible (flex: 1) */}
        <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>
          <MapComponent />
        </div>

        {/* LOS KPIs: Altura fija abajo (no flotante) */}
        <div className="kpi-container">
          <Scorecards />
        </div>

      </section>

      {/* CAJA 3: INFERIOR (Gráficas) */}
      <section className="panel panel-bottom">
        <ChartsContainer />
      </section>

    </div>
  );
}

export default App;