import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Eye } from 'lucide-react';
import { CLINIC_CONFIG } from '../config/clinic';
import { BrandLogo } from './BrandLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="clinical-gradient relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Subtle architectural aura */}
      <div
        className="soft-aqua-glow pointer-events-none absolute -top-24 right-[-10%] h-[520px] w-[520px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="soft-aqua-glow pointer-events-none absolute bottom-[-140px] left-[-10%] h-[420px] w-[420px] rounded-full opacity-70"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-9 sm:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left editorial copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4B9EB8]/25 bg-white/85 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide text-[#113D47] shadow-xs backdrop-blur-xs sm:px-4 sm:text-xs">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#49A699]" />
              {CLINIC_CONFIG.specialty}
            </div>

            <h1 className="mt-5 font-editorial text-[2.65rem] font-semibold leading-[1.04] tracking-tight text-[#113D47] sm:mt-6 sm:text-6xl lg:text-[4.25rem]">
              Ver bien no es solo{' '}
              <span className="italic text-[#4B9EB8]">leer letras.</span>
            </h1>

            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#425A61] sm:mt-6 sm:text-lg">
              {CLINIC_CONFIG.taglineSub}
            </p>

            {/* Primary CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-3.5">
              <a
                href="#reservar"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#113D47] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,61,71,0.18)] transition-all hover:bg-[#194E5A] hover:shadow-[0_16px_32px_rgba(17,61,71,0.24)] active:scale-[0.98] sm:py-4"
              >
                Agendar mi cita por WhatsApp
                <ArrowRight className="h-4 w-4 text-[#CBE8F1] transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#113D47]/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#113D47] backdrop-blur-xs transition-all hover:border-[#4B9EB8] hover:bg-white sm:py-4"
              >
                Explorar servicios
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 border-t border-[#113D47]/10 pt-6 sm:mt-10 sm:grid-cols-3 sm:gap-4 sm:pt-7">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E5F4F8] text-[#4B9EB8]">
                  <Eye className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#113D47]">
                    Evaluación Integral
                  </p>
                  <p className="mt-0.5 text-xs text-[#5F6665]">
                    Salud ocular, enfoque y visión binocular
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E3F4F1] text-[#388D81]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#113D47]">
                    Contactología
                  </p>
                  <p className="mt-0.5 text-xs text-[#5F6665]">
                    Adaptación segura y seguimiento clínico
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E5F4F8] text-[#4B9EB8]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#113D47]">
                    Ocaña, N. de S.
                  </p>
                  <p className="mt-0.5 text-xs text-[#5F6665]">
                    {CLINIC_CONFIG.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual showcase */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Soft backdrop frame */}
              <div
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#CBE8F1]/65 via-white to-[#49A699]/20 blur-sm"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-2 sm:p-2.5 shadow-[0_24px_60px_rgba(17,61,71,0.12)]">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden rounded-[1.35rem] bg-[#EAF6FA]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/hero-clinic.jpg`}
                    alt="Consultorio de Optometría y Contactología Dra. Anny Lozano Santos"
                    className="h-full w-full object-cover"
                  />
                  {/* Subtle gradient overlay for badge legibility */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#113D47]/70 via-[#113D47]/20 to-transparent" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-white/90 px-4 py-3 backdrop-blur-md">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#4B9EB8]">
                        Atención personalizada
                      </p>
                      <p className="font-editorial text-lg font-semibold leading-tight text-[#113D47]">
                        Cada detalle cuenta
                      </p>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E3F4F1] text-[#388D81]">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating circular brand seal */}
              <div className="pointer-events-none absolute -top-7 -right-5 hidden h-32 w-32 items-center justify-center rounded-full border border-[#4B9EB8]/20 bg-white/95 p-1.5 shadow-[0_12px_30px_rgba(17,61,71,0.1)] backdrop-blur-md sm:flex">
                <BrandLogo variant="seal" className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
