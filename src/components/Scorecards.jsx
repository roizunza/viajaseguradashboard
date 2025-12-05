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

  // Estilos Responsivos inyectados
  const responsiveGridStyle = {
    display: 'grid',
    // Truco CSS: Si cabe, pon 4. Si no (celular), pon 2 columnas automáticas.
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
    gap: '0',
    width: '100%',
    height: '100%', 
    alignItems: 'center',
    padding: '0' 
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',     
    textAlign: 'center',      
    padding: '15px 5px', // Un poco más de padding vertical para móvil
    height: '100%',
    borderRight: '1px solid rgba(255,255,255,0.1)',
    borderBottom: '1px solid rgba(255,255,255,0.05)' // Línea sutil abajo para móvil
  };

  // Tipografía Ajustada
  const numberStyle = {
    color: '#A020F0', 
    fontFamily: "'Source Code Pro', monospace",
    fontSize: '32px', // Reducido un poco de 45px para que quepa seguro en móvil
    fontWeight: '700',
    marginBottom: '5px', 
    lineHeight: '1'
  };

  const titleStyle = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '14px', // Ajustado
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '5px',
    color: '#FFFFFF'
  };

  const subtitleStyle = {
    color: '#B4A7AF',
    fontFamily: "'Inter', sans-serif",
    fontSize: '11px',
    fontWeight: '500', 
    lineHeight: '1.3',
    maxWidth: '95%' 
  };

  return (
    <div style={responsiveGridStyle}>
      
      <div style={cardStyle}>
        <div style={numberStyle}>{totalRutas}</div>
        <div style={titleStyle}>RUTAS DE CUIDADO</div>
        <div style={subtitleStyle}>Vinculadas directamente a equipamiento</div>
      </div>

      <div style={cardStyle}>
        <div style={numberStyle}>{Math.round(kmTotal)} km</div>
        <div style={{...titleStyle, color: COLORS.rutas.Oyamel}}>DE CONEXIÓN</div>
        <div style={subtitleStyle}>Uniendo la zona alta de difícil acceso</div>
      </div>

      <div style={cardStyle}>
        <div style={numberStyle}>+{demandaTotal.toLocaleString()}</div>
        <div style={{...titleStyle, color: COLORS.rutas.Antigua}}>USUARIAS</div>
        <div style={subtitleStyle}>Beneficiadas diariamente</div>
      </div>

      <div style={{...cardStyle, borderRight: 'none'}}>
        <div style={numberStyle}>{Math.round(maxSaturacion)}%</div>
        <div style={{...titleStyle, color: COLORS.rutas.Ocotal}}>ALTA DEMANDA</div>
        <div style={subtitleStyle}>Necesidad supera capacidad</div>
      </div>

    </div>
  );
}