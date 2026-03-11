import React, { useState, useEffect } from 'react';
import {
  User, Users, UserPlus, GraduationCap, MessageSquare,
  Eye, Crosshair, PenTool, TestTube2, Columns, ZoomIn,
  Box, Tablet, Layers, Pipette, Beaker, Wind,
  Dna, Grid3X3, Sprout, Syringe, Leaf, Bug,
  CircleDot, LayoutGrid, Globe2, Cloud, Puzzle, Scissors,
  AlertOctagon, AlertCircle, HelpCircle, Highlighter, CheckCircle2, MessageCircleQuestion,
  Trash2
} from 'lucide-react';

export default function App() {
  const [phrase, setPhrase] = useState([]);

  // Datos de Edwin Lemus - 202101385
  const ALL_WORDS = [
    { t: 'Yo', i: User, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'Tú', i: UserPlus, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'Nosotros', i: Users, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'El Profe', i: GraduationCap, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'Compañero', i: MessageSquare, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'Grupo', i: Users, cat: 'Sujetos', bg: '#A855F7' },
    { t: 'Observar', i: Eye, cat: 'Acciones', bg: '#10B981' },
    { t: 'Enfocar', i: Crosshair, cat: 'Acciones', bg: '#10B981' },
    { t: 'Dibujar', i: PenTool, cat: 'Acciones', bg: '#10B981' },
    { t: 'Teñir', i: TestTube2, cat: 'Acciones', bg: '#10B981' },
    { t: 'Comparar', i: Columns, cat: 'Acciones', bg: '#10B981' },
    { t: 'Aumentar', i: ZoomIn, cat: 'Acciones', bg: '#10B981' },
    { t: 'Microscopio', i: Box, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Portaobjetos', i: Tablet, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Cubreobjetos', i: Layers, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Metileno', i: Pipette, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Gotero', i: Beaker, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Aceite', i: Wind, cat: 'Equipo', bg: '#3B82F6' },
    { t: 'Célula', i: Dna, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Tejido', i: Grid3X3, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Cebolla', i: Sprout, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Sangre', i: Syringe, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Hoja', i: Leaf, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Bacteria', i: Bug, cat: 'Muestras', bg: '#84CC1C' },
    { t: 'Núcleo', i: CircleDot, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Pared', i: LayoutGrid, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Membrana', i: Globe2, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Citoplasma', i: Cloud, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Organelo', i: Puzzle, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Pinzas', i: Scissors, cat: 'Partes', bg: '#06B6D4' },
    { t: 'Peligro', i: AlertOctagon, cat: 'Estado', bg: '#EA580C' },
    { t: 'Cuidado', i: AlertCircle, cat: 'Estado', bg: '#EA580C' },
    { t: 'Ayuda', i: HelpCircle, cat: 'Estado', bg: '#EA580C' },
    { t: 'Limpiar', i: Highlighter, cat: 'Estado', bg: '#EA580C' },
    { t: 'Terminé', i: CheckCircle2, cat: 'Estado', bg: '#EA580C' },
    { t: '¿Sigue?', i: MessageCircleQuestion, cat: 'Estado', bg: '#EA580C' }
  ];

  const speak = (t) => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = 'es-ES';
    window.speechSynthesis.speak(u);
    setPhrase([...phrase, t]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: 'white',
      padding: '20px',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* INYECCIÓN DE ANIMACIONES CRÍTICAS */}
      <style>{`
        @keyframes bio-float {
          0% { transform: translate(0, 0) scale(1); opacity: 0.2; }
          33% { transform: translate(15%, -10%) scale(1.2); opacity: 0.4; }
          66% { transform: translate(-10%, 15%) scale(0.9); opacity: 0.3; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.2; }
        }
        .organelle-bg {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 1;
          pointer-events: none;
          animation: bio-float 18s infinite ease-in-out;
        }
      `}</style>

      {/* CAPA DE FONDO: Organelos de colores llamativos en movimiento */}
      <div className="organelle-bg" style={{ width: '700px', height: '700px', background: '#FF00FF', top: '-15%', left: '-10%', animationDelay: '0s' }}></div>
      <div className="organelle-bg" style={{ width: '600px', height: '600px', background: '#00FFFF', bottom: '-10%', right: '-5%', animationDelay: '-4s' }}></div>
      <div className="organelle-bg" style={{ width: '500px', height: '500px', background: '#7FFF00', top: '30%', left: '25%', animationDelay: '-8s' }}></div>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#22D3EE', margin: '0', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Tablero de comunicación alternativa
          </h1>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#10B981', margin: '8px 0' }}>
            Práctica de laboratorio - Observación de células y tejidos
          </h2>
          <p style={{ fontSize: '1rem', color: '#94A3B8', fontWeight: 'bold' }}>
            Edwin Estuardo Lemus Salazar - 202101385
          </p>
        </header>

        {/* TIRA DE MENSAJES CON EFECTO CRISTAL */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 30px',
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(15px)',
          borderRadius: '25px',
          padding: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          minHeight: '90px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {phrase.length === 0 ? <span style={{ color: '#475569', fontSize: '1rem', fontWeight: '800' }}>TOCA LAS PALABRAS...</span> : phrase.map((p, i) => (
              <span key={i} style={{ backgroundColor: 'rgba(34, 211, 238, 0.25)', color: '#22D3EE', padding: '10px 18px', borderRadius: '14px', fontWeight: '900', border: '1.5px solid #22D3EE', fontSize: '0.8rem' }}>{p}</span>
            ))}
          </div>
          <button onClick={() => setPhrase([])} style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', transition: 'transform 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}><Trash2 size={32} /></button>
        </div>

        {/* TABLERO DE 6 COLUMNAS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '15px', maxWidth: '1450px', margin: '0 auto' }}>
          {ALL_WORDS.map((word, idx) => {
            const IconComp = word.i;
            return (
              <button
                key={idx}
                onClick={() => speak(word.t)}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.65)',
                  backdropFilter: 'blur(5px)',
                  border: `2.5px solid ${word.bg}`,
                  color: word.bg,
                  borderRadius: '24px',
                  padding: '22px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  cursor: 'pointer',
                  minHeight: '140px',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  boxShadow: `0 0 20px ${word.bg}15`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.04)';
                  e.currentTarget.style.backgroundColor = `${word.bg}25`;
                  e.currentTarget.style.boxShadow = `0 15px 30px ${word.bg}35`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.65)';
                  e.currentTarget.style.boxShadow = `0 0 20px ${word.bg}15`;
                }}
              >
                <span style={{ fontSize: '0.6rem', fontWeight: '900', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>{word.cat}</span>
                <IconComp size={42} strokeWidth={1.5} />
                <span style={{ fontWeight: '900', fontSize: '0.85rem', textTransform: 'uppercase', textAlign: 'center' }}>{word.t}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}