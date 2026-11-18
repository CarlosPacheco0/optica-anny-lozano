import React from 'react';
import { Award, ScanEye, HeartHandshake, Microscope } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';

const PILLARS = [
  {
    icon: Award,
    title: 'Formación Especializada',
    description:
      'Enfoque clínico en Segmento Anterior y Lentes de Contacto para abordar desde fórmulas cotidianas hasta adaptaciones especiales.',
  },
  {
    icon: ScanEye,
    title: 'Evaluación Más Allá de la Cartilla',
    description:
      'Analizamos visión binocular, capacidad de enfoque a diferentes distancias y salud de la superficie ocular.',
  },
  {
    icon: Microscope,
    title: 'Equipos y Precisión',
    description:
      'Evaluación con instrumentación clínica actual para detectar molestias a tiempo y lograr fórmulas realmente cómodas.',
  },
  {
    icon: HeartHandshake,
    title: 'Trato Cercano y Claro',
    description:
      'Te explicamos cada hallazgo con claridad y te acompañamos antes, durante y después de tu consulta.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="especialista" className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12">
          {/* Image column */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div
                className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-[#E5F4F8]"
                aria-hidden="true"
              />
              <div
                className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#E3F4F1]"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#113D47]/10 bg-[#F4F6F5] shadow-[0_24px_55px_rgba(17,61,71,0.1)]">
                <img
                  src="/images/specialist-care.jpg"
                  alt="Atención clínica de optometría y contactología"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              {/* Floating quote badge */}
              <div className="relative z-10 mx-4 -mt-10 rounded-2xl border border-[#113D47]/8 bg-white/95 p-5 shadow-[0_14px_35px_rgba(17,61,71,0.1)] backdrop-blur-md sm:mx-8">
                <p className="font-editorial text-xl italic font-semibold text-[#113D47]">
                  “{CLINIC_CONFIG.motto}”
                </p>
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#4B9EB8]">
                  {CLINIC_CONFIG.fullName}
                </p>
              </div>
            </div>
          </div>

          {/* Editorial bio & pillars */}
          <div className="lg:col-span-6">
            <span className="inline-flex items-center rounded-full bg-[#E5F4F8] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A89A3]">
              Conoce a tu Especialista
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#113D47] sm:text-5xl">
              {CLINIC_CONFIG.brandName}
            </h2>

            <p className="mt-2 text-sm font-semibold text-[#49A699]">
              {CLINIC_CONFIG.specialty}
            </p>

            {/* TODO: Actualizar con trayectoria académica y registro profesional real */}
            <p className="mt-5 text-base leading-relaxed text-[#5F6665]">
              En nuestro consultorio en Ocaña realizamos cada consulta con calma y detalle,
              cuidando tanto la nitidez de tu fórmula como el bienestar real de tus ojos día tras día.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-[#113D47]/8 bg-[#F9FCFD] p-5 transition-colors hover:border-[#4B9EB8]/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#4B9EB8] shadow-xs ring-1 ring-[#113D47]/8">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold text-[#113D47]">{pillar.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#5F6665]">
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
