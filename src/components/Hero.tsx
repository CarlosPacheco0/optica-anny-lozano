import React from 'react';
import { ArrowRight, Award, Clock, HeartHandshake, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';
import { BrandLogo } from './BrandLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="hero-gradient-mesh relative overflow-hidden pt-24 pb-14 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Dynamic ambient optical light orbs */}
      <div
        className="pointer-events-none absolute -top-20 right-[-8%] h-[550px] w-[550px] rounded-full bg-[#0D9488]/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-100px] left-[-8%] h-[480px] w-[480px] rounded-full bg-[#0F4C81]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left editorial copy */}
          <div className="lg:col-span-7">
            {/* Live active tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0F4C81]/15 bg-white/95 px-4 py-1.5 text-[0.72rem] font-bold tracking-wide text-[#0F4C81] shadow-xs backdrop-blur-xs sm:text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488]" />
              </span>
              <span>{CLINIC_CONFIG.specialty} · Ocaña</span>
            </div>

            {/* Main title */}
            <h1 className="mt-5 font-editorial text-[2.75rem] font-semibold leading-[1.03] tracking-tight text-[#0F4C81] sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
              Ver bien no es solo{' '}
              <span className="relative inline-block text-[#0D9488] italic">
                leer letras.
                <span className="absolute bottom-1.5 left-0 -z-10 h-2.5 w-full rounded-full bg-[#0D9488]/20" />
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-[#475569] sm:mt-6 sm:text-lg">
              {CLINIC_CONFIG.taglineSub}
            </p>

            {/* Primary CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href="#reservar"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(13,148,136,0.32)] transition-all hover:scale-[1.02] hover:shadow-[0_16px_36px_rgba(13,148,136,0.45)] active:scale-[0.98] sm:py-4"
              >
                Agendar mi cita por WhatsApp
                <ArrowRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F4C81] bg-white/80 px-7 py-3.5 text-sm font-bold text-[#0F4C81] backdrop-blur-xs transition-all hover:bg-[#0F4C81] hover:text-white sm:py-4 shadow-xs"
              >
                Explorar servicios
              </a>
            </div>

            {/* Contrast Metrics Ribbon: Trayectoria + Consulta Dedicada + Atención Personalizada */}
            <div className="mt-9 grid grid-cols-1 gap-3.5 sm:mt-11 sm:grid-cols-3 sm:gap-4">
              {/* Card 1: Años de Trayectoria */}
              <div className="group flex items-center gap-3.5 rounded-2xl border border-[#CBD5E1] bg-white/95 p-4 shadow-[0_8px_20px_rgba(15,76,129,0.06)] backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-[#0F4C81]/40 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-white shadow-md shadow-[#0F4C81]/20">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F4C81] sm:text-base leading-tight">
                    +8 Años
                  </p>
                  <p className="text-[0.72rem] font-semibold text-[#64748B]">
                    Trayectoria clínica en Ocaña
                  </p>
                </div>
              </div>

              {/* Card 2: Consulta Dedicada */}
              <div className="group flex items-center gap-3.5 rounded-2xl border border-[#CBD5E1] bg-white/95 p-4 shadow-[0_8px_20px_rgba(15,76,129,0.06)] backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-[#0D9488]/40 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white shadow-md shadow-[#0D9488]/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F4C81] sm:text-base leading-tight">
                    45 a 60 min
                  </p>
                  <p className="text-[0.72rem] font-semibold text-[#64748B]">
                    Consulta dedicada y sin afanes
                  </p>
                </div>
              </div>

              {/* Card 3: Atención 100% Personalizada */}
              <div className="group flex items-center gap-3.5 rounded-2xl border border-[#CBD5E1] bg-white/95 p-4 shadow-[0_8px_20px_rgba(15,76,129,0.06)] backdrop-blur-xs transition-all hover:-translate-y-0.5 hover:border-[#0F4C81]/40 hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-white shadow-md shadow-[#0F4C81]/20">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F4C81] sm:text-base leading-tight">
                    100% Individual
                  </p>
                  <p className="text-[0.72rem] font-semibold text-[#64748B]">
                    Seguimiento y calidez médica
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual showcase with relief floating badges */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Multilayer backdrop glow */}
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#0F4C81]/30 via-white to-[#0D9488]/30 blur-md"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#CBD5E1] bg-white p-2.5 sm:p-3 shadow-[0_26px_65px_rgba(15,76,129,0.16)]">
                {/* Floating badge 1: Trayectoria (Top Left) */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/95 px-3.5 py-2 shadow-lg backdrop-blur-md transition-transform hover:scale-105">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0F4C81] text-white shadow-xs">
                    <Award className="h-4 w-4" />
                  </span>
                  <div className="text-left">
                    <p className="text-[0.62rem] font-bold uppercase tracking-wider text-[#0D9488] leading-none">
                      Experiencia
                    </p>
                    <p className="text-[0.72rem] font-bold text-[#0F4C81] leading-tight mt-0.5">
                      +8 Años de Trayectoria
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-[1.6rem] bg-[#E1EFF9]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/hero-clinic.jpg`}
                    alt="Consultorio de Optometría y Contactología Dra. Anny Lozano Santos"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle gradient overlay for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#092338]/85 via-[#092338]/30 to-transparent" />

                  {/* Floating badge 2: Consulta Dedicada (Bottom Card) */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/30 bg-white/95 px-4 py-3 backdrop-blur-md shadow-md">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#0D9488] flex items-center gap-1">
                        <Sparkles className="h-3 w-3 text-[#0D9488]" />
                        Consulta Dedicada
                      </p>
                      <p className="font-editorial text-lg font-semibold leading-tight text-[#0F4C81]">
                        45 a 60 min de atención minuciosa
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0D9488] text-white shadow-md shadow-[#0D9488]/30">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating circular brand seal */}
              <div className="pointer-events-none absolute -top-8 -right-6 hidden h-32 w-32 items-center justify-center rounded-full border border-[#0F4C81]/20 bg-white/95 p-1.5 shadow-[0_14px_32px_rgba(15,76,129,0.14)] backdrop-blur-md sm:flex">
                <BrandLogo variant="seal" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
