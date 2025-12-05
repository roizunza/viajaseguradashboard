import React from 'react';
import { COLORS, FONTS } from '../config/theme';

export default function Sidebar() {
  const s = {
    // Contenedor principal
    container: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      color: '#E0E0E0',
      width: '100%'
    },
    
    // HEADER
    headerBox: {
      backgroundColor: '#181d35',
      padding: '24px 20px',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    },
    subHeader: {
      fontFamily: FONTS.title,
      fontSize: '17px',
      fontWeight: '700',
      color: '#B0B3B8',
      margin: '0 0 8px 0',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
    mainTitle: {
      fontFamily: FONTS.title,
      fontSize: '35px',
      fontWeight: '700',
      color: COLORS.accent,
      margin: '0 0 25px 0',
      lineHeight: '1'
    },
    authorBox: {
      borderLeft: `2px solid ${COLORS.accent}`,
      paddingLeft: '12px',
      marginTop: '10px'
    },
    authorName: {
      fontFamily: FONTS.body,
      fontSize: '17px',
      fontWeight: '700',
      color: '#FFFFFF',
      margin: 0
    },
    authorRole: {
      fontFamily: FONTS.body,
      fontSize: '14px',
      color: '#B0B3B8',
      margin: '4px 0 0 0'
    },

    contentBody: {
      flex: 1,
      padding: '24px 20px',
      overflowY: 'auto',
      paddingRight: '10px'
    },
    
    // SECCIONES
    sectionContainer: {
      marginBottom: '35px'
    },
    sectionTitle: {
      fontFamily: FONTS.body,
      fontSize: '17px',
      fontWeight: '700',
      color: '#ffffffff',
      margin: '0 0 4px 0', 
      letterSpacing: '0.5px'
    },
    dividerContainer: { display: 'flex', alignItems: 'center', marginBottom: '12px', width: '100%' },
    dividerLine: { height: '1px', backgroundColor: 'rgba(188, 186, 192, 0.43)', flexGrow: 1, marginRight: '10px' },
    tag: { fontFamily: FONTS.title, fontSize: '11.5px', color: '#7c7889ff', whiteSpace: 'nowrap' },
    bodyText: { fontFamily: FONTS.body, fontSize: '16px', fontWeight: '400', lineHeight: '1.3', color: '#E0E0E0', marginBottom: '11px' },
    listItem: { marginBottom: '10px' },
    listKey: { color: '#FFFFFF', fontWeight: '500' },
    
    // BOTÓN GITHUB
    btnContainer: {
      padding: '20px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      backgroundColor: 'var(--bg-panel)'
    },
    btnGithub: {
      display: 'block',
      backgroundColor: '#0000FF',
      color: '#c5cde0ff',
      fontFamily: FONTS.numbers,
      fontSize: '18px',
      fontWeight: '700',
      textAlign: 'center',
      padding: '14px',
      textDecoration: 'none',
      borderRadius: '4px',
      letterSpacing: '-0.5px',
      transition: 'opacity 0.2s'
    }
  };

  return (
    <div style={s.container}>
      
      {/* 1. ENCABEZADO */}
      <div style={s.headerBox}>
        <h2 style={s.subHeader}>EVALUACIÓN PROGRAMA PILOTO</h2>
        <h1 style={s.mainTitle}>VIAJA SEGURA</h1>
        <div style={s.authorBox}>
          <p style={s.authorName}>Rocío Izunza</p>
          <p style={s.authorRole}>Urbanista y Científica de Datos Geoespaciales</p>
        </div>
      </div>

      {/* 2. NARRATIVA */}
      <div style={s.contentBody} className="custom-scrollbar">
        
        {/* Contexto */}
        <div style={s.sectionContainer}>
          <h3 style={s.sectionTitle}>Hacer visible lo cotidiano: Datos para cuidar a quien cuida</h3>
          <div style={s.dividerContainer}>
            <div style={s.dividerLine} />
            <span style={s.tag}>#Contexto</span>
          </div>
          <p style={s.bodyText}>
            El proyecto <strong>"Viaja Segura"</strong> evalúa la iniciativa de la Ruta 66, un servicio exclusivo para mujeres e infancias que opera en horas pico y circula desde el área montañosa de la alcaldía Magdalena Contreras hasta la zona de Miguel Ángel de Quevedo en Coyoacán.
          </p>
          <p style={s.bodyText}>
            Me integré al proyecto en su etapa de evaluación con una convicción: usar los datos para respaldar la labor social que ellas ya sostenían.
          </p>
        </div>

        {/* Metodología */}
        <div style={s.sectionContainer}>
          <h3 style={s.sectionTitle}>Traduciendo la realidad</h3>
          <div style={s.dividerContainer}>
            <div style={s.dividerLine} />
            <span style={s.tag}>#Metodología</span>
          </div>
          <p style={s.bodyText}>
            Para comprender la movilidad de mujeres e infancias, el reto fue traducir la experiencia de viaje en información cuantificable.
          </p>
          <div style={s.listItem}>
            <p style={s.bodyText}>
              <span style={s.listKey}>En la calle:</span> Diseñé instrumentos para registrar no solo cuántas personas subían o bajaban, sino dónde lo hacían. Participé en los recorridos para asegurar que los datos reflejaran la realidad operativa.
            </p>
          </div>
          <div style={s.listItem}>
            <p style={s.bodyText}>
              <span style={s.listKey}>En el mapa:</span> Digitalicé y limpié los datos recabados de la operación, creando una base de datos limpia y estructurada que nos permitió ver, por primera vez, la operación completa en un mapa.
            </p>
          </div>
          <div style={s.listItem}>
            <p style={s.bodyText}>
              <span style={s.listKey}>En el análisis:</span> Fui más allá de los puntos, generé un análisis de 500 metros (caminatas breves) alrededor de las paradas. Crucé esta cobertura con equipamientos de cuidados (escuelas, mercados) para ver con qué lugares conectaba realmente la ruta.
            </p>
          </div>
        </div>

        {/* Hallazgos */}
        <div style={s.sectionContainer}>
          <h3 style={s.sectionTitle}>Conectando la periferia</h3>
          <div style={s.dividerContainer}>
            <div style={s.dividerLine} />
            <span style={s.tag}>#Hallazgos</span>
          </div>
          <p style={s.bodyText}>
            El análisis geoespacial confirmó dos patrones territoriales clave:
          </p>
          <div style={{ marginBottom: '10px', borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '8px' }}>
            <p style={s.bodyText}>
              <span style={s.listKey}>Puente vital:</span> La ruta funciona conecta zonas altas de difícil acceso (Oyamel, Antigua, Ocotal) con avenidas principales como el Blvd. Adolfo López Mateos y lugares clave como Ciudad Universitaria.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid rgba(255,255,255,0.3)', paddingLeft: '8px' }}>
            <p style={s.bodyText}>
              <span style={s.listKey}>Soporte de vida:</span> Los puntos de mayor afluencia coinciden con escuelas y mercados, validando que el servicio sostiene las actividades cotidianas en la vida de mujeres e infancias.
            </p>
          </div>
        </div>

        {/* Impacto */}
        <div style={s.sectionContainer}>
          <h3 style={s.sectionTitle}>Visualizar para reconfigurar</h3>
          <div style={s.dividerContainer}>
            <div style={s.dividerLine} />
            <span style={s.tag}>#Impacto</span>
          </div>
          <p style={s.bodyText}>
            Decidí codificar esta investigación en un Dashboard Interactivo para democratizar el acceso a la evidencia. Mi motivación nace de creer en la gestión de esta información como la una vía para poner las necesidades de las mujeres y las infancias sobre la mesa; necesitamos datos que nos ayuden a reconfigurar la movilidad no solo para movernos más rápido, sino para cuidar mejor a quienes nos cuidan.
          </p>
        </div>
      </div>

      {/* BOTÓN FINAL (ENLACE VINCULADO) */}
      <div style={s.btnContainer}>
        <a 
          href="https://github.com/roizunza/viajaseguradashboard" 
          target="_blank" 
          rel="noreferrer"
          style={s.btnGithub}
        >
          VER CÓDIGO EN GITHUB
        </a>
      </div>

    </div>
  );
}