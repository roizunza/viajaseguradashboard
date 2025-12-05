import React from 'react';
import './index.css';
import SidebarTop from './components/SidebarTop';
import SidebarBottom from './components/SidebarBottom';
import MapComponent from './components/MapComponent';
import Scorecards from './components/Scorecards';
import ChartsContainer from './components/ChartsContainer';

function App() {
  return (
    <div className="app-grid">
      
      {/* WRAPPER DEL SIDEBAR (Se rompe en móvil) */}
      <aside className="sidebar-wrapper">
        <div className="sidebar-part-top"><SidebarTop /></div>
        <div className="sidebar-part-bottom"><SidebarBottom /></div>
      </aside>

      {/* MAPA + KPIS */}
      <section className="panel-top">
        <div style={{ flex: 1, position: 'relative' }}><MapComponent /></div>
        <div style={{ height: 'auto', minHeight:'110px', borderTop: '1px solid rgba(255,255,255,0.1)', backgroundColor: 'var(--bg-panel)', zIndex: 10 }}>
          <Scorecards />
        </div>
      </section>

      {/* GRÁFICAS */}
      <section className="panel-bottom">
        <ChartsContainer />
      </section>

    </div>
  );
}

export default App;