import React from 'react';
import { COLORS, FONTS } from '../config/theme';
import recorridosData from '../data/recorridos.json';

export default function Scorecards() {
  
  // CÁLCULOS (Igual que antes)
  const features = recorridosData?.features || [];
  const totalRutas = features.length;
  const kmTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Longitud_km || 0), 0);
  const demandaTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Demanda_Diaria || 0), 0);
  const maxSaturacion = features.reduce((max, ruta) => {
    const cap = ruta.properties.Unidad_Capacidad || 1; 
    const sat = (ruta.properties.Maximo_Abordo / cap) * 100;
    return sat > max ? sat : max;
  }, 0);

  // ESTILOS RESPONSIVOS
  const s = {
    container: {
      display: 'grid',
      // En móvil (menos de 700px) se hacen 2 columnas, en escritorio 4.
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
      gap: '10px',
      width: '100%',
      height: '100%', 
      alignItems: 'center',
      padding: '0' 
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      textAlign: 'center',      
      width: '100%',
      height: '100%',
      padding: '0 5px',
      // Borde derecho sutil, se quita en móvil con CSS si fuera necesario, pero aquí lo dejamos simple
      borderRight: '1px solid rgba(255,255,255,0.1)'
    },
    lastCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      textAlign: 'center',      
      width: '100%',
      height: '100%',
      padding: '0 5px',
      borderRight: 'none'
    },
    // NÚMERO: CLAMP (Mínimo 24px, Ideal 3vw, Máximo 42px)
    number: {
      color: '#A020F0', 
      fontFamily: "'Source Code Pro', monospace",
      fontSize: 'clamp(24px, 3vw, 42px)', 
      fontWeight: '700',
      marginBottom: '4px', 
      lineHeight: '1'
    },
    // TÍTULO: CLAMP (Mínimo 10px, Máximo 14px)
    title: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(10px, 1.5vw, 14px)', 
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px',
      color: '#FFFFFF',
      whiteSpace: 'nowrap' // Evita que se rompa en dos líneas si es posible
    },
    // SUBTÍTULO: Pequeño y legible
    subtitle: {
      color: '#B4A7AF',
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(9px, 1vw, 11px)', 
      fontWeight: '500', 
      lineHeight: '1.2',
      maxWidth: '95%' 
    }
  };

  return (
    <div style={s.container}>
      <div style={s.card}>
        <div style={s.number}>{totalRutas}</div>
        <div style={s.title}>RUTAS DE CUIDADO</div>
        <div style={s.subtitle}>Vinculadas a equipamiento</div>
      </div>
      <div style={s.card}>
        <div style={s.number}>{Math.round(kmTotal)} km</div>
        <div style={{...s.title, color: COLORS.rutas.Oyamel}}>DE CONEXIÓN</div>
        <div style={s.subtitle}>Uniendo zona alta y ciudad</div>
      </div>
      <div style={s.card}>
        <div style={s.number}>+{demandaTotal.toLocaleString()}</div>
        <div style={{...s.title, color: COLORS.rutas.Antigua}}>USUARIAS</div>
        <div style={s.subtitle}>Beneficiadas diariamente</div>
      </div>
      <div style={s.lastCard}>
        <div style={s.number}>{Math.round(maxSaturacion)}%</div>
        <div style={{...s.title, color: COLORS.rutas.Ocotal}}>ALTA DEMANDA</div>
        <div style={s.subtitle}>Necesidad supera capacidad</div>
      </div>
    </div>
  );
}