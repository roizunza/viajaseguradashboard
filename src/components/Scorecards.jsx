import React from 'react';
import { COLORS, FONTS } from '../config/theme';
import recorridosData from '../data/recorridos.json';

export default function Scorecards() {
  
  // CÁLCULOS
  const features = recorridosData?.features || [];
  const totalRutas = features.length;
  const kmTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Longitud_km || 0), 0);
  const demandaTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Demanda_Diaria || 0), 0);
  const maxSaturacion = features.reduce((max, ruta) => {
    const cap = ruta.properties.Unidad_Capacidad || 1; 
    const sat = (ruta.properties.Maximo_Abordo / cap) * 100;
    return sat > max ? sat : max;
  }, 0);

  // ESTILOS
  const s = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', 
      width: '100%',
      height: '100%', 
      alignItems: 'center' 
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      textAlign: 'center',      
      width: '100%',      
      height: '70%',      
      boxSizing: 'border-box', 
      borderRight: '1px solid rgba(255,255,255,0.1)',
      padding: '0 5px'    
    },
    lastCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      textAlign: 'center',      
      width: '100%',
      height: '70%',
      boxSizing: 'border-box',
      borderRight: 'none', 
      padding: '0 5px'
    },
    // Tipografía
    number: {
      color: '#A020F0', 
      fontFamily: "'Source Code Pro', monospace",
      fontSize: '42px', 
      fontWeight: '700',
      marginBottom: '5px', 
      lineHeight: '1'
    },
    title: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '15px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '5px',
      color: '#FFFFFF'
    },
    subtitle: {
      color: '#B4A7AF',
      fontFamily: "'Inter', sans-serif",
      fontSize: '12px',
      fontWeight: '500', 
      lineHeight: '1.3',
      maxWidth: '90%' 
    }
  };

  return (
    <div style={s.container}>
      
      {/* KPI 1 */}
      <div style={s.card}>
        <div style={s.number}>{totalRutas}</div>
        <div style={s.title}>RUTAS DE CUIDADO</div>
        <div style={s.subtitle}>Vinculadas directamente a equipamiento</div>
      </div>

      {/* KPI 2 */}
      <div style={s.card}>
        <div style={s.number}>{Math.round(kmTotal)} km</div>
        <div style={{...s.title, color: COLORS.rutas.Oyamel}}>DE CONEXIÓN</div>
        <div style={s.subtitle}>Uniendo la zona alta de difícil acceso</div>
      </div>

      {/* KPI 3 */}
      <div style={s.card}>
        <div style={s.number}>+{demandaTotal.toLocaleString()}</div>
        <div style={{...s.title, color: COLORS.rutas.Antigua}}>USUARIAS</div>
        <div style={s.subtitle}>Beneficiadas por el servicio diariamente</div>
      </div>

      {/* KPI 4 */}
      <div style={s.lastCard}>
        <div style={s.number}>{Math.round(maxSaturacion)}%</div>
        <div style={{...s.title, color: COLORS.rutas.Ocotal}}>ALTA DEMANDA</div>
        <div style={s.subtitle}>Necesidad supera capacidad en hora pico</div>
      </div>

    </div>
  );
}