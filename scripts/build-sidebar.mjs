import fg from 'fast-glob';
import matter from 'gray-matter';
import fs from 'node:fs';

const CATEGORY_LABELS = {
  materials: { es: 'Materiales', en: 'Materials' },
  manufacturing: { es: 'Procesos de Manufactura', en: 'Manufacturing Processes' },
  tolerances: { es: 'Tolerancias y Ajustes', en: 'Tolerances & Fits' },
  fasteners: { es: 'Torniller\u00eda', en: 'Fasteners' },
  'machine-elements': { es: 'Elementos de M\u00e1quinas', en: 'Machine Elements' },
  hydraulics: { es: 'Hidr\u00e1ulica y Neum\u00e1tica', en: 'Hydraulics & Pneumatics' },
  mechanics: { es: 'Resistencia de Materiales', en: 'Strength of Materials' },
  fluids: { es: 'Fluidos y Termodin\u00e1mica', en: 'Fluids & Thermodynamics' },
  symbols: { es: 'S\u00edmbolos T\u00e9cnicos', en: 'Technical Symbols' },
  converters: { es: 'Conversores', en: 'Converters' },
};

const TOPIC_LABELS = {
  'ferrous-metals': { es: 'Ferrosos', en: 'Ferrous' },
  'non-ferrous-metals': { es: 'No Ferrosos', en: 'Non-Ferrous' },
  'polymers': { es: 'Pol\u00edmeros', en: 'Polymers' },
  'composites': { es: 'Compuestos', en: 'Composites' },
  'cross-reference': { es: 'Tablas Comparativas', en: 'Comparison Tables' },
  'machining': { es: 'Mecanizado', en: 'Machining' },
  'joining': { es: 'Uni\u00f3n', en: 'Joining' },
  'welding': { es: 'Soldadura', en: 'Welding' },
  'surface-finishing': { es: 'Acabados Superficiales', en: 'Surface Finishing' },
  'additive': { es: 'Manufactura Aditiva', en: 'Additive Manufacturing' },
  'casting': { es: 'Fundici\u00f3n', en: 'Casting' },
  'forming': { es: 'Conformado', en: 'Forming' },
  'metric-threads': { es: 'Roscas M\u00e9tricas', en: 'Metric Threads' },
  'imperial-threads': { es: 'Roscas Imperiales', en: 'Imperial Threads' },
  'standard-fasteners': { es: 'Torniller\u00eda Normalizada', en: 'Standard Fasteners' },
  'torque-preload': { es: 'Torque y Preload', en: 'Torque & Preload' },
  'grades-standards': { es: 'Grados y Normas', en: 'Grades & Standards' },
  'bearings': { es: 'Rodamientos', en: 'Bearings' },
  'gears': { es: 'Engranajes', en: 'Gears' },
  'power-transmission': { es: 'Transmisi\u00f3n de Potencia', en: 'Power Transmission' },
  'shafts-couplings': { es: 'Ejes y Acoplamientos', en: 'Shafts & Couplings' },
  'springs': { es: 'Resortes', en: 'Springs' },
  'seals': { es: 'Sellos', en: 'Seals' },
  'clutches-brakes': { es: 'Embragues y Frenos', en: 'Clutches & Brakes' },
  'strength': { es: 'Resistencia', en: 'Strength' },
  'fatigue': { es: 'Fatiga', en: 'Fatigue' },
  'columns': { es: 'Columnas', en: 'Columns' },
  'dynamics': { es: 'Din\u00e1mica', en: 'Dynamics' },
  'hydraulic-system': { es: 'Sistema Hidr\u00e1ulico', en: 'Hydraulic System' },
  'pneumatic-system': { es: 'Sistema Neum\u00e1tico', en: 'Pneumatic System' },
  'fluid-mechanics': { es: 'Mec\u00e1nica de Fluidos', en: 'Fluid Mechanics' },
  'thermodynamics': { es: 'Termodin\u00e1mica', en: 'Thermodynamics' },
  'hardness': { es: 'Dureza', en: 'Hardness' },
  'roughness': { es: 'Rugosidad', en: 'Roughness' },
  'units': { es: 'Unidades', en: 'Units' },
  'iso-system': { es: 'Sistema ISO', en: 'ISO System' },
  'ansi-system': { es: 'Sistema ANSI', en: 'ANSI System' },
  'gdt': { es: 'GD&T', en: 'GD&T' },
  'drawing-symbols': { es: 'S\u00edmbolos de Planos', en: 'Drawing Symbols' },
  'welding-symbols': { es: 'S\u00edmbolos de Soldadura', en: 'Welding Symbols' },
  'hydraulic-pneumatic': { es: 'S\u00edmbolos Hidr\u00e1ulicos/Neum\u00e1ticos', en: 'Hydraulic/Pneumatic Symbols' },
};
const topicLabelEs = (s) => TOPIC_LABELS[s]?.es ?? s;
const topicLabelEn = (s) => TOPIC_LABELS[s]?.en ?? s;

async function buildCategory(dir, baseDir, urlPrefix) {
  const allFiles = await fg(`${baseDir}/${dir}/*.md`);
  const files = allFiles.filter(f => !f.endsWith('index.md'));
  if (files.length === 0) return null;

  const tree = {};
  for (const f of files) {
    const { data } = matter(fs.readFileSync(f, 'utf8'));
    const slug = f.split(/[\\/]/).pop().replace(/\.mdx?$/, '');
    const t = data.topic || 'otros';
    tree[t] ??= [];
    tree[t].push({
      label: data.sidebar?.label ?? data.title,
      link: `${urlPrefix}${dir}/${slug}/`,
    });
  }

  const items = Object.entries(tree)
    .sort(([a], [b]) => topicLabelEs(a).localeCompare(topicLabelEs(b)))
    .map(([t, pages]) => ({
      label: topicLabelEs(t),
      translations: { en: topicLabelEn(t) },
      collapsed: true,
      items: pages.sort((a, b) => a.label.localeCompare(b.label)),
    }));

  return items;
}

async function build() {
  const sidebar = [];
  for (const dir of Object.keys(CATEGORY_LABELS)) {
    const items = await buildCategory(dir, 'src/content/docs', '/');
    if (!items) continue;
    sidebar.push({
      label: CATEGORY_LABELS[dir].es,
      translations: { en: CATEGORY_LABELS[dir].en },
      items,
    });
  }
  return sidebar;
}

const sidebar = await build();
fs.writeFileSync('sidebar.generated.json', JSON.stringify(sidebar, null, 2));
console.log(`Sidebar generado: ${sidebar.length} categor\u00edas activas`);
