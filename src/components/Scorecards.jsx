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

  // Estilos internos SOLO para texto (Colores y Fuentes)
  // El Layout (Grid/Columnas) ahora lo maneja el archivo index.css
  const textStyles = {
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      textAlign: 'center',
      height: '100%'
    },
    number: {
      color: '#A020F0', 
      fontFamily: "'Source Code Pro', monospace",
      fontSize: 'clamp(28px, 4vw, 45px)', // Responsive: se achica en móvil
      fontWeight: '700',
      marginBottom: '5px', 
      lineHeight: '1',
      textShadow: '0 0 10px rgba(160, 32, 240, 0.3)'
    },
    title: {
      fontFamily: "'Inter', sans-serif",
      fontSize: '14px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '5px',
      color: '#FFFFFF'
    },
    subtitle: {
      color: '#B4A7AF',
      fontFamily: "'Inter', sans-serif",
      fontSize: '11px',
      fontWeight: '500', 
      lineHeight: '1.3',
      maxWidth: '100%' 
    }
  };

  return (
    // Usamos la clase CSS para controlar la rejilla responsiva
    <div className="scorecards-grid">
      
      <div className="scorecard-item" style={textStyles.card}>
        <div style={textStyles.number}>{totalRutas}</div>
        <div style={textStyles.title}>RUTAS DE CUIDADO</div>
        <div style={textStyles.subtitle}>Vinculadas a equipamiento</div>
      </div>

      <div className="scorecard-item" style={textStyles.card}>
        <div style={textStyles.number}>{Math.round(kmTotal)} km</div>
        <div style={{...textStyles.title, color: COLORS.rutas.Oyamel}}>DE CONEXIÓN</div>
        <div style={textStyles.subtitle}>Uniendo zona alta y ciudad</div>
      </div>

      <div className="scorecard-item" style={textStyles.card}>
        <div style={textStyles.number}>+{demandaTotal.toLocaleString()}</div>
        <div style={{...textStyles.title, color: COLORS.rutas.Antigua}}>USUARIAS</div>
        <div style={textStyles.subtitle}>Beneficiadas diariamente</div>
      </div>

      <div className="scorecard-item" style={textStyles.card}>
        <div style={textStyles.number}>{Math.round(maxSaturacion)}%</div>
        <div style={{...textStyles.title, color: COLORS.rutas.Ocotal}}>ALTA DEMANDA</div>
        <div style={textStyles.subtitle}>Necesidad supera capacidad</div>
      </div>

    </div>
  );
}