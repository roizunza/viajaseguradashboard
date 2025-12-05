import React, { useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { COLORS, FONTS } from '../config/theme';

// DATOS: Si estos imports fallan, la app truena. Verifica los nombres.
import paradasData from '../data/paradas_r66.json';
import equipData from '../data/equipamiento.json';

export default function ChartsContainer() {

  // --- SEGURIDAD: Verificar que los datos existan antes de procesar ---
  if (!paradasData || !equipData) {
    return <div style={{color:'white'}}>Error: Faltan datos .json en src/data</div>;
  }

  // --- 1. PROCESAMIENTO ---
  const processRouteData = (rutaName) => {
    // Validación extra para evitar crash si features es undefined
    const features = paradasData.features || [];
    return features
      .filter(f => f.properties.origen_destino.includes(rutaName))
      .sort((a, b) => a.properties.fid - b.properties.fid)
      .map(f => ({
        name: f.properties.nombre || f.properties.fid,
        Ascensos: f.properties.ascensos,
        Descensos: f.properties.descensos * -1, 
        DescensosReal: f.properties.descensos 
      }));
  };

  const dataOyamel = useMemo(() => processRouteData('Oyamel'), []);
  const dataOcotal = useMemo(() => processRouteData('Ocotal'), []);
  const dataAntigua = useMemo(() => processRouteData('Antigua'), []);

  const dataEquip = useMemo(() => {
    const counts = {
      Oyamel: { Educ: 0, Salud: 0, Abasto: 0 },
      Ocotal: { Educ: 0, Salud: 0, Abasto: 0 },
      Antigua: { Educ: 0, Salud: 0, Abasto: 0 }
    };

    const features = equipData.features || [];
    features.forEach(f => {
      const props = f.properties;
      let r = 'Oyamel';
      if (props.origen_destino && props.origen_destino.includes('Ocotal')) r = 'Ocotal';
      if (props.origen_destino && props.origen_destino.includes('Antigua')) r = 'Antigua';

      const tipo = props.equipamiento;
      if (tipo === 'EDUCATIVO') counts[r].Educ++;
      if (tipo === 'SALUD') counts[r].Salud++;
      if (tipo === 'ABASTO') counts[r].Abasto++;
    });

    return Object.keys(counts).map(key => ({
      name: key,
      Educación: counts[key].Educ,
      Salud: counts[key].Salud,
      Abasto: counts[key].Abasto
    }));
  }, []);

  // --- COMPONENTES VISUALES ---
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: 'rgba(24, 29, 53, 0.95)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px', fontFamily: FONTS.body, fontSize: '11px' }}>
          <p style={{color: 'white', fontWeight: 'bold', marginBottom:'5px'}}>{label}</p>
          {payload.map((entry, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: entry.fill }}></span>
              <span style={{ color: '#E0E0E0' }}>{entry.name}: <span style={{ color: '#fff', fontWeight: 'bold' }}>{Math.abs(entry.value)}</span></span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomAxisTick = ({ x, y, payload }) => {
    let color = '#B0B3B8';
    if (payload.value === 'Oyamel') color = COLORS.rutas.Oyamel;
    if (payload.value === 'Ocotal') color = COLORS.rutas.Ocotal;
    if (payload.value === 'Antigua') color = COLORS.rutas.Antigua;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={15} textAnchor="middle" fill={color} fontFamily={FONTS.title} fontSize={13} fontWeight="bold">
          {payload.value.toUpperCase()}
        </text>
      </g>
    );
  };

  // Estilos
  const headerContainerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '10px', paddingBottom: '10px' };
  const sectionTitleStyle = { fontFamily: FONTS.body, fontSize: '18px', fontWeight: '700', color: '#FFFFFF', margin: 0, letterSpacing: '0.5px' };
  const subChartTitleStyle = { fontFamily: FONTS.title, fontSize: '13px', color: '#B0B3B8', marginTop: '8px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' };
  const legendContainerStyle = { display: 'flex', gap: '15px', fontSize: '13px', fontFamily: FONTS.body, color: '#FFFFFF', marginRight: '10px' };
  const dotStyle = (color) => ({ width: '8px', height: '8px', backgroundColor: color, borderRadius: '2px', display: 'inline-block', marginRight: '6px' });

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%', padding: '20px' }}>
      
      {/* IZQUIERDA: FLUJO */}
      <div style={{ flex: 65, display: 'flex', flexDirection: 'column', paddingRight: '20px' }}>
        <div style={headerContainerStyle}>
          <div style={sectionTitleStyle}>Dinámica de demanda</div>
          <div style={legendContainerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={dotStyle('#F976C7')}></span> Ascensos</div>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={dotStyle(COLORS.descensos)}></span> Descensos</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flex: 1, gap: '2px' }}> 
          {[ {d: dataOyamel, c: COLORS.rutas.Oyamel, t: 'Oyamel'}, {d: dataOcotal, c: COLORS.rutas.Ocotal, t: 'Ocotal'}, {d: dataAntigua, c: COLORS.rutas.Antigua, t: 'Antigua'} ].map((ruta, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, minHeight: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ruta.d} layout="vertical" stackOffset="sign" margin={{top:0, right:2, left:0, bottom:0}}>
                    <XAxis type="number" hide />
                    <YAxis type="category" dataKey="name" hide width={10} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                    <Bar dataKey="Ascensos" fill={ruta.c} stackId="stack" radius={[0, 3, 3, 0]} barSize={22} />
                    <Bar dataKey="Descensos" fill={COLORS.descensos} stackId="stack" radius={[3, 0, 0, 3]} barSize={22} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div style={{...subChartTitleStyle, color: ruta.c}}>{ruta.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DERECHA: INFRAESTRUCTURA */}
      <div style={{ flex: 35, display: 'flex', flexDirection: 'column', paddingLeft: '20px', paddingRight: '40px' }}>
        <div style={headerContainerStyle}>
          <div style={sectionTitleStyle}>Infraestructura</div>
          <div style={legendContainerStyle}>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={dotStyle(COLORS.equipamiento.EDUCATIVO)}></span> Educación</div>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={dotStyle(COLORS.equipamiento.SALUD)}></span> Salud</div>
            <div style={{ display: 'flex', alignItems: 'center' }}><span style={dotStyle(COLORS.equipamiento.ABASTO)}></span> Abasto</div>
          </div>
        </div>
        
        <div style={{ flex: 1, minHeight: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dataEquip} margin={{top:10, right:0, left:-20, bottom:30}} barCategoryGap="20%">
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={<CustomAxisTick />} interval={0} />
              <YAxis tick={{fill: '#B0B3B8', fontSize: 13, fontFamily: FONTS.body}} axisLine={false} tickLine={false} />
              <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} content={<CustomTooltip />} />
              <Bar dataKey="Educación" stackId="a" fill={COLORS.equipamiento.EDUCATIVO} radius={[0, 0, 2, 2]} />
              <Bar dataKey="Salud" stackId="a" fill={COLORS.equipamiento.SALUD} />
              <Bar dataKey="Abasto" stackId="a" fill={COLORS.equipamiento.ABASTO} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}