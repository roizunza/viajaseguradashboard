import React from 'react';
import { COLORS, FONTS } from '../config/theme';

export default function SidebarBottom() {
  const s = {
    container: { display: 'flex', flexDirection: 'column', color: '#E0E0E0', padding: '0 20px 24px 20px' }, // Padding top 0 para pegar con lo anterior
    sectionTitle: { fontFamily: FONTS.body, fontSize: '15px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 10px 0' },
    dividerLine: { height: '1px', backgroundColor: 'rgba(255,255,255,0.2)', flexGrow: 1, marginRight: '10px' },
    tag: { fontFamily: FONTS.title, fontSize: '10px', color: '#B4A7AF' },
    bodyText: { fontFamily: FONTS.body, fontSize: '14px', fontWeight: '400', lineHeight: '1.5', color: '#E0E0E0', marginBottom: '12px' },
    listKey: { color: '#FFFFFF', fontWeight: '700' },
    dividerContainer: { display: 'flex', alignItems: 'center', marginBottom: '12px', width: '100%' },
    btnContainer: { padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '20px' },
    btnGithub: { display: 'block', backgroundColor: '#0000FF', color: '#FFFFFF', fontFamily: FONTS.numbers, fontSize: '16px', fontWeight: '700', textAlign: 'center', padding: '14px', textDecoration: 'none', borderRadius: '4px', transition: 'opacity 0.2s' }
  };

  return (
    <div style={s.container}>
      {/* Hallazgos */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={s.sectionTitle}>Conectando la periferia</h3>
        <div style={s.dividerContainer}><div style={s.dividerLine} /><span style={s.tag}>#Hallazgos</span></div>
        <div style={{ marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '10px' }}>
          <p style={s.bodyText}><span style={s.listKey}>Puente vital:</span> La ruta conecta zonas altas de difícil acceso...</p>
        </div>
        <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '10px' }}>
          <p style={s.bodyText}><span style={s.listKey}>Soporte de vida:</span> Los puntos de mayor afluencia coinciden con escuelas...</p>
        </div>
      </div>

      {/* Impacto */}
      <div>
        <h3 style={s.sectionTitle}>Visualizar para reconfigurar</h3>
        <div style={s.dividerContainer}><div style={s.dividerLine} /><span style={s.tag}>#Impacto</span></div>
        <p style={s.bodyText}>Decidí codificar esta investigación en un Dashboard Interactivo...</p>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '4px', marginTop: '10px', fontStyle: 'italic' }}>
          <p style={{...s.bodyText, margin: 0}}>"Necesitamos datos que nos ayuden a reconfigurar la movilidad..."</p>
        </div>
      </div>

      {/* Botón */}
      <div style={s.btnContainer}>
        <a href="https://github.com/roizunza/viajaseguradashboard" target="_blank" rel="noreferrer" style={s.btnGithub}>VER CÓDIGO EN GITHUB</a>
      </div>
    </div>
  );
}