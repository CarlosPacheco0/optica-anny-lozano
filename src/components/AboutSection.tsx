import React from 'react';
import { Award, ScanEye, HeartHandshake, Microscope, Sparkles, Quote } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';

const PILLARS = [
  {
    icon: Award,
    tone: 'blue' as const,
    title: 'Formación Especializada',
    description:
      'Enfoque clínico en Segmento Anterior y Lentes de Contacto para abordar desde fórmulas cotidianas hasta adaptaciones especiales.',
  },
  {
    icon: ScanEye,
    tone: 'teal' as const,
    title: 'Evaluación Más Allá de la Cartilla',
    description:
      'Analizamos visión binocular, capacidad de enfoque a diferentes distancias y salud de la superficie ocular.',
  },
  {
    icon: Microscope,
    tone: 'blue' as const,
    title: 'Equipos y Precisión',
    description:
      'Evaluación con instrumentación clínica actual para detectar molestias a tiempo y lograr fórmulas realmente cómodas.',
  },
  {
    icon: HeartHandshake,
    tone: 'teal' as const,
    title: 'Trato Cercano y Claro',
    description:
      'Te explicamos cada hallazgo con claridad y te acompañamos antes, durante y después de tu consulta.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="especialista" className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FD] via-[#F8FAFC] to-[#F8FAFC] py-16 sm:py-28 border-t border-[#E1EFF9]">
      {/* Background aura */}
      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-[#0F4C81]/4 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12">
          {/* Image column */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div
                className="absolute -bottom-6 -left-6 h-48 w-48 rounded-3xl bg-gradient-to-tr from-[#0F4C81]/15 to-transparent"
                aria-hidden="true"
              />
              <div
                className="absolute -right-5 -top-5 h-36 w-36 rounded-full bg-gradient-to-bl from-[#0D9488]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2.25rem] border border-[#CBD5E1] bg-[#F8FAFC] p-2 sm:p-2.5 shadow-[0_24px_55px_rgba(15,76,129,0.12)]">
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/specialist-care.jpg`}
                    alt="Atención clínica de optometría y contactología Dra. Anny Lozano"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating quote badge */}
              <div className="relative z-10 mx-4 -mt-12 rounded-3xl border border-[#CBD5E1] bg-white/95 p-6 shadow-[0_16px_40px_rgba(15,76,129,0.14)] backdrop-blur-md sm:mx-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#CCFBF1] text-[#0D9488]">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-editorial text-lg italic font-semibold leading-snug text-[#0F4C81] sm:text-xl">
                      “{CLINIC_CONFIG.motto}”
                    </p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0D9488]">
                      {CLINIC_CONFIG.fullName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial bio & pillars */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F4C81]/15 bg-[#E1EFF9] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C81]">
              <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
              Conoce a tu Especialista
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#0F4C81] sm:text-5xl">
              {CLINIC_CONFIG.brandName}
            </h2>

            <p className="mt-2 text-base font-bold text-[#0D9488]">
              {CLINIC_CONFIG.specialty}
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#475569]">
              En nuestro consultorio en Ocaña realizamos cada consulta con calma y rigurosidad,
              cuidando tanto la nitidez visual de tu fórmula como la salud profunda de tus ojos.
              Creemos en una optometría honesta, moderna y cercana.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                const isBlue = pillar.tone === 'blue';
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-[#CBD5E1]/80 bg-white p-5 shadow-[0_4px_16px_rgba(15,76,129,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/50 hover:shadow-[0_12px_28px_rgba(15,76,129,0.12)]"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl shadow-md ${
                        isBlue
                          ? 'bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-white shadow-[#0F4C81]/25'
                          : 'bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white shadow-[#0D9488]/25'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-[#0F4C81]">{pillar.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#64748B]">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
