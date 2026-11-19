import React from 'react';
import { Microscope, Eye, Clock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ClinicalPillarsBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#071C2E] via-[#0F4C81] to-[#0A2E4E] py-16 text-white sm:py-24">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#0D9488]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-[#0F4C81]/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#CCFBF1] backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
            Precisión y Calidez en Ocaña
          </div>

          <h2 className="mt-5 font-editorial text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Tecnología médica que cuida lo que más valoras:{' '}
            <span className="italic text-[#2DD4BF]">tu salud visual.</span>
          </h2>

          <p className="mt-4 text-base text-slate-200 sm:text-lg leading-relaxed">
            No creemos en consultas de 10 minutos ni en fórmulas apresuradas. Cada paciente recibe
            un diagnóstico clínico completo, equipos modernos y el tiempo que realmente merece.
          </p>
        </div>

        {/* 3 Clinical Value Pillars */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {/* Pillar 1 */}
          <div className="group rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/50 hover:bg-white/15">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/40">
              <Microscope className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">Biomicroscopía y Diagnóstico</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Inspección milimétrica de córnea, conjuntiva y película lagrimal con lámpara de
              hendidura para detectar ojo seco, alergias y fatiga digital antes de que avancen.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#CCFBF1]">
              <ShieldCheck className="h-4 w-4 text-[#2DD4BF]" />
              <span>Precisión diagnóstica</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="group rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/50 hover:bg-white/15">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/40">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">Contactología Especializada</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Adaptación guiada paso a paso de lentes de contacto blandos, tóricos y rígidos gas
              permeables (RGP). Pruebas reales en consultorio y seguimiento clínico continuo.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#CCFBF1]">
              <ShieldCheck className="h-4 w-4 text-[#2DD4BF]" />
              <span>Adaptación segura</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="group rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#2DD4BF]/50 hover:bg-white/15 sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/40">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-white">Consulta Dedicada (45-60 min)</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Tiempo real para escucharte, resolver tus inquietudes y evaluar tu visión lejana y
              cercana sin afanes. Sal de tu consulta conociendo a fondo el estado de tus ojos.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#CCFBF1]">
              <ShieldCheck className="h-4 w-4 text-[#2DD4BF]" />
              <span>Atención 100% personalizada</span>
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-md sm:flex-row sm:px-8">
          <div>
            <p className="font-editorial text-xl font-semibold text-white">
              ¿Sientes fatiga visual, ardor o hace más de un año no revisas tu visión?
            </p>
            <p className="mt-0.5 text-xs text-slate-300">
              Estamos en Ocaña · Cra. 14 #11-20, Local 6 · Agenda con respuesta directa
            </p>
          </div>

          <a
            href="#reservar"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0D9488] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(13,148,136,0.4)] transition-all hover:scale-[1.03] hover:bg-[#0F766E]"
          >
            Agendar cita en consultorio
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
