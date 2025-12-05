import React from 'react';
import { COLORS, FONTS } from '../config/theme';
import recorridosData from '../data/recorridos.json';

export default function Scorecards() {
  
  // --- CÁLCULOS ---
  const features = recorridosData?.features || [];
  const totalRutas = features.length;
  const kmTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Longitud_km || 0), 0);
  const demandaTotal = features.reduce((acc, ruta) => acc + (ruta.properties.Demanda_Diaria || 0), 0);
  const maxSaturacion = features.reduce((max, ruta) => {
    const cap = ruta.properties.Unidad_Capacidad || 1; 
    const sat = (ruta.properties.Maximo_Abordo / cap) * 100;
    return sat > max ? sat : max;
  }, 0);

  // --- ESTILOS ---
  const s = {
    container: {
      display: 'grid',
      // MAGIA RESPONSIVA:
      // Escritorio: Caben 4 (porque hay espacio).
      // Celular: Se ajustan automáticamente a 2 columnas (2x2) si el espacio baja de 140px por tarjeta.
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
      gap: '0',
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
      boxSizing: 'border-box',
      // Borde sutil solo para separar visualmente
      borderRight: '1px solid rgba(255,255,255,0.1)' 
    },
    // Estilo para la última tarjeta (sin borde derecho en escritorio)
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
    
    // TIPOGRAFÍA RESPONSIVA (clamp)
    // Se hace chica en celular (24px) y grande en escritorio (42px)
    number: {
      color: '#A020F0', 
      fontFamily: "'Source Code Pro', monospace",
      fontSize: 'clamp(24px, 3vw, 42px)', 
      fontWeight: '700',
      marginBottom: '5px', 
      lineHeight: '1',
      textShadow: '0 0 10px rgba(160, 32, 240, 0.3)'
    },
    title: {
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(11px, 1.5vw, 15px)', // Se ajusta
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px',
      color: '#FFFFFF',
      whiteSpace: 'nowrap'
    },
    subtitle: {
      color: '#B4A7AF',
      fontFamily: "'Inter', sans-serif",
      fontSize: 'clamp(9px, 1vw, 11px)', // Letra pequeña legible
      fontWeight: '500', 
      lineHeight: '1.2',
      maxWidth: '95%',
      opacity: 0.9
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
      {/* Nota: En móvil el borde derecho no importa tanto, se ve limpio */}
      <div style={s.lastCard}>
        <div style={s.number}>{Math.round(maxSaturacion)}%</div>
        <div style={{...s.title, color: COLORS.rutas.Ocotal}}>ALTA DEMANDA</div>
        <div style={s.subtitle}>Necesidad supera capacidad</div>
      </div>
    </div>
  );
}