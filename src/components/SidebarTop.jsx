import React from 'react';
import { COLORS, FONTS } from '../config/theme';

export default function SidebarTop() {
  const s = {
    container: { display: 'flex', flexDirection: 'column', color: '#E0E0E0', padding: '24px 20px' },
    headerBox: { backgroundColor: '#181d35', padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px', borderRadius: '8px' },
    subHeader: { fontFamily: FONTS.title, fontSize: '15px', fontWeight: '700', color: '#B0B3B8', margin: '0 0 8px 0', letterSpacing: '1px' },
    mainTitle: { fontFamily: FONTS.title, fontSize: '32px', fontWeight: '700', color: COLORS.accent, margin: '0 0 20px 0', lineHeight: '1' },
    authorBox: { borderLeft: `2px solid ${COLORS.accent}`, paddingLeft: '12px', marginTop: '10px' },
    authorName: { fontFamily: FONTS.body, fontSize: '14px', fontWeight: '700', color: '#FFFFFF', margin: 0 },
    authorRole: { fontFamily: FONTS.body, fontSize: '12px', color: '#B0B3B8', margin: '4px 0 0 0' },
    sectionTitle: { fontFamily: FONTS.body, fontSize: '15px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 10px 0' },
    dividerLine: { height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', flexGrow: 1, marginRight: '10px' },
    tag: { fontFamily: FONTS.title, fontSize: '10px', color: '#B4A7AF' },
    bodyText: { fontFamily: FONTS.body, fontSize: '14px', fontWeight: '400', lineHeight: '1.5', color: '#E0E0E0', marginBottom: '12px' },
    listKey: { color: '#FFFFFF', fontWeight: '700' },
    dividerContainer: { display: 'flex', alignItems: 'center', marginBottom: '12px', width: '100%' }
  };

  return (
    <div style={s.container}>
      {/* ENCABEZADO */}
      <div style={s.headerBox}>
        <h2 style={s.subHeader}>EVALUACIÓN PROGRAMA PILOTO</h2>
        <h1 style={s.mainTitle}>VIAJA SEGURA</h1>
        <div style={s.authorBox}>
          <p style={s.authorName}>Rocío Izunza</p>
          <p style={s.authorRole}>Urbanista y Científica de Datos Geoespaciales</p>
        </div>
      </div>

      {/* Contexto */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={s.sectionTitle}>Hacer visible lo cotidiano</h3>
        <div style={s.dividerContainer}><div style={s.dividerLine} /><span style={s.tag}>#Contexto</span></div>
        <p style={s.bodyText}>El proyecto <strong>"Viaja Segura"</strong> evalúa la iniciativa de la Ruta 66, un servicio exclusivo para mujeres e infancias...</p>
        <p style={s.bodyText}>Me integré con una convicción: usar los datos para respaldar la labor social que ellas ya sostenían.</p>
      </div>

      {/* Metodología */}
      <div>
        <h3 style={s.sectionTitle}>Traduciendo la realidad</h3>
        <div style={s.dividerContainer}><div style={s.dividerLine} /><span style={s.tag}>#Metodología</span></div>
        <p style={s.bodyText}>El reto fue traducir la experiencia de viaje en información cuantificable.</p>
        <p style={s.bodyText}><span style={s.listKey}>En la calle:</span> Diseñé instrumentos para registrar no solo cuántas personas subían...</p>
        <p style={s.bodyText}><span style={s.listKey}>En el mapa:</span> Digitalicé y limpié los datos recabados...</p>
        <p style={s.bodyText}><span style={s.listKey}>El análisis:</span> Generé isocronas de 500m para cruzar cobertura con cuidados.</p>
      </div>
    </div>
  );
}