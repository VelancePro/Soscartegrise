'use client';

import { useState, useEffect, useCallback } from 'react';
import { geoConicConformal, geoMercator, geoPath, GeoPermissibleObjects } from 'd3-geo';
import { Feature, FeatureCollection, Geometry } from 'geojson';

const prixRegions: Record<string, number | null> = {
  'Île-de-France': 54.95,
  'Hauts-de-France': 42,
  'Normandie': 60,
  'Bretagne': 60,
  'Pays de la Loire': 51,
  'Centre-Val de Loire': 60,
  'Bourgogne-Franche-Comté': 60,
  'Grand Est': 60,
  'Nouvelle-Aquitaine': 53,
  'Occitanie': 59.50,
  'Auvergne-Rhône-Alpes': 43,
  "Provence-Alpes-Côte d'Azur": 59,
  'Corse': 43,
  'Guadeloupe': 41,
  'Martinique': 53,
  'Guyane': 42.50,
  'La Réunion': 57,
  'Mayotte': 30,
};

const MOYENNE = 43.70;

function getCouleur(prix: number | null) {
  if (prix === null) return '#d1d5db';
  return prix > MOYENNE ? 'rgba(193, 0, 31, 0.35)' : 'rgba(0, 49, 137, 0.35)';
}
function getCouleurHover(prix: number | null) {
  if (prix === null) return '#9ca3af';
  return prix > MOYENNE ? 'rgba(193, 0, 31, 0.6)' : 'rgba(0, 49, 137, 0.6)';
}
function getPrixLabel(prix: number | null) {
  return prix === null ? 'Prix à venir' : `${prix.toFixed(2)} €`;
}

/* ─── Inset DOM-TOM ─── */
interface InsetProps {
  label: string;
  geojson: string;
  center: [number, number];
  scale: number;
  prixKey: string;
  w?: number;
  h?: number;
}

function InsetDOM({ label, geojson, center, scale, prixKey, w = 80, h = 75 }: InsetProps) {
  const [paths, setPaths] = useState<string[]>([]);
  const [hovered, setHovered] = useState(false);
  const prix = prixRegions[prixKey] ?? null;

  useEffect(() => {
    fetch(geojson)
      .then((r) => r.json())
      .then((data: any) => {
        const proj = geoMercator().center(center).scale(scale).translate([w / 2, h / 2]);
        const pathGen = geoPath().projection(proj);
        // Supporte Feature unique OU FeatureCollection
        const features: any[] = data.type === 'FeatureCollection' ? data.features : [data];
        setPaths(
          features
            .map((f) => pathGen(f as GeoPermissibleObjects) ?? '')
            .filter(Boolean)
        );
      });
  }, [geojson, center, scale, w, h]);

  return (
    <div className="flex flex-col items-start gap-0">
      <span className="font-titre font-extrabold text-gray-700 text-[10px] tracking-wide uppercase leading-tight">
        {label}
      </span>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
          {paths.map((d, i) => (
            <path
              key={i}
              d={d}
              fill={hovered ? getCouleurHover(prix) : getCouleur(prix)}
              stroke="#fff"
              strokeWidth={0.8}
              style={{ transition: 'fill 0.2s' }}
            />
          ))}
        </svg>

        {hovered && (
          <div className="absolute left-[88px] top-1/2 -translate-y-1/2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl px-3 py-2 whitespace-nowrap pointer-events-none">
            <p className="font-titre font-bold text-gray-900 text-xs">{label}</p>
            <p className="text-rouge font-titre font-extrabold text-sm mt-0.5">
              {getPrixLabel(prix)}
              {prix !== null && <span className="text-gray-400 font-normal text-xs"> / CV</span>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Libellés multi-lignes pour les régions longues
const labelsRegions: Record<string, string[]> = {
  'Île-de-France':              ['ÎLE-DE-', 'FRANCE'],
  'Hauts-de-France':            ['HAUTS-', 'DE-FRANCE'],
  'Auvergne-Rhône-Alpes':       ['AUVERGNE-', 'RHÔNE-ALPES'],
  'Bourgogne-Franche-Comté':    ['BOURGOGNE-', 'FRANCHE-COMTÉ'],
  "Provence-Alpes-Côte d'Azur": ['PROVENCE-', 'ALPES-', "CÔTE D'AZUR"],
  'Centre-Val de Loire':        ['CENTRE-', 'VAL DE LOIRE'],
  'Pays de la Loire':           ['PAYS DE', 'LA LOIRE'],
  'Nouvelle-Aquitaine':         ['NOUVELLE-', 'AQUITAINE'],
  'Normandie':                  ['NORMANDIE'],
  'Bretagne':                   ['BRETAGNE'],
  'Grand Est':                  ['GRAND-EST'],
  'Occitanie':                  ['OCCITANIE'],
  'Corse':                      ['CORSE'],
};

function getLignes(nom: string): string[] {
  return labelsRegions[nom] ?? [nom.toUpperCase()];
}

/* ─── Carte principale ─── */
interface RegionPath {
  nom: string;
  d: string;
  cx: number;
  cy: number;
  prix: number | null;
}

interface Tooltip {
  nom: string;
  prix: number | null;
  x: number;
  y: number;
}

const W = 560;
const H = 560;

export default function CarteFrance() {
  const [regions, setRegions] = useState<RegionPath[]>([]);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [hoveredNom, setHoveredNom] = useState<string | null>(null);

  useEffect(() => {
    fetch('/regions-france.geojson')
      .then((r) => r.json())
      .then((data: FeatureCollection) => {
        const proj = geoConicConformal()
          .center([2.5, 46.5])
          .scale(2600)
          .translate([W / 2, H / 2]);
        const pathGen = geoPath().projection(proj);
        setRegions(
          data.features.map((f: Feature) => {
            const centroid = pathGen.centroid(f as GeoPermissibleObjects);
            return {
              nom: (f.properties as Record<string, string>).nom,
              d: pathGen(f as GeoPermissibleObjects) ?? '',
              cx: centroid[0],
              cy: centroid[1],
              prix: prixRegions[(f.properties as Record<string, string>).nom] ?? null,
            };
          })
        );
      });
  }, []);

  const domtom: InsetProps[] = [
    { label: 'Mayotte',    geojson: '/mayotte.geojson',    center: [45.15, -12.82], scale: 7000,  prixKey: 'Mayotte',     w: 60, h: 60 },
    { label: 'Martinique', geojson: '/martinique.geojson', center: [-61.0, 14.65],  scale: 6000,  prixKey: 'Martinique',  w: 60, h: 60 },
    { label: 'Guadeloupe', geojson: '/guadeloupe.geojson', center: [-61.55, 16.17], scale: 3800,  prixKey: 'Guadeloupe',  w: 60, h: 60 },
    { label: 'Réunion',    geojson: '/reunion.geojson',    center: [55.53, -21.13], scale: 5000,  prixKey: 'La Réunion',  w: 60, h: 60 },
    { label: 'Guyane',     geojson: '/guyane.geojson',     center: [-53.1, 3.9],    scale: 750,   prixKey: 'Guyane',      w: 60, h: 80 },
  ];

  return (
    <div className="w-full select-none">
      {/* Légende */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex-shrink-0 mt-0.5 shadow-sm" style={{ background: 'rgba(0, 49, 137, 0.35)' }} />
          <span className="text-xs text-gray-600 leading-tight max-w-[140px]">
            Prix du cheval fiscal <strong>en-dessous</strong> du prix moyen national de <strong>{MOYENNE}€</strong>
          </span>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex-shrink-0 mt-0.5 shadow-sm" style={{ background: 'rgba(193, 0, 31, 0.35)' }} />
          <span className="text-xs text-gray-600 leading-tight max-w-[140px]">
            Prix du cheval fiscal <strong>au-dessus</strong> du prix moyen national de <strong>{MOYENNE}€</strong>
          </span>
        </div>
      </div>

      {/* DOM-TOM + carte */}
      <div className="flex gap-2 items-center">
        {/* Colonne DOM-TOM */}
        <div className="flex flex-col gap-1 flex-shrink-0 pt-4">
          {domtom.map((d) => <InsetDOM key={d.label} {...d} />)}
        </div>

        {/* Carte métropole SVG */}
        <div
          className="relative flex-1"
          onMouseLeave={() => { setTooltip(null); setHoveredNom(null); }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            style={{ width: '100%', height: 'auto' }}
          >
            {/* Régions */}
            {regions.map((r) => (
              <path
                key={r.nom}
                d={r.d}
                fill={hoveredNom === r.nom ? getCouleurHover(r.prix) : getCouleur(r.prix)}
                stroke="#ffffff"
                strokeWidth={1.5}
                style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                onMouseEnter={(e) => {
                  setHoveredNom(r.nom);
                  const rect = e.currentTarget.closest('div')?.getBoundingClientRect();
                  setTooltip({ nom: r.nom, prix: r.prix, x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) });
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.closest('div')?.getBoundingClientRect();
                  setTooltip((prev) => prev ? { ...prev, x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) } : prev);
                }}
                onMouseLeave={() => { setHoveredNom(null); setTooltip(null); }}
              />
            ))}

            {/* Labels régions */}
            {regions.map((r) => {
              const lignes = getLignes(r.nom);
              const lineH = 9;
              const offsetY = -((lignes.length - 1) * lineH) / 2;
              return (
                <text
                  key={`label-${r.nom}`}
                  x={r.cx}
                  y={r.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {lignes.map((ligne, i) => (
                    <tspan
                      key={i}
                      x={r.cx}
                      dy={i === 0 ? offsetY : lineH}
                      style={{
                        fontSize: '7.5px',
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fill: '#1a1a1a',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {ligne}
                    </tspan>
                  ))}
                </text>
              );
            })}
          </svg>

          {tooltip && (
            <div
              className="pointer-events-none absolute z-50 bg-white border border-gray-200 rounded-xl shadow-xl px-4 py-3 min-w-[160px]"
              style={{ left: tooltip.x + 12, top: tooltip.y - 70, transform: 'translateX(-50%)' }}
            >
              <p className="font-titre font-bold text-gray-900 text-sm">{tooltip.nom}</p>
              <p className="text-rouge font-titre font-extrabold text-base mt-1">
                {getPrixLabel(tooltip.prix)}
                {tooltip.prix !== null && <span className="text-gray-400 font-normal text-xs"> / CV</span>}
              </p>
              {tooltip.prix !== null && (
                <p className={`text-xs mt-1 font-medium ${tooltip.prix > MOYENNE ? 'text-rouge' : 'text-bleu'}`}>
                  {tooltip.prix > MOYENNE ? '▲ Au-dessus' : '▼ En-dessous'} de la moyenne
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
