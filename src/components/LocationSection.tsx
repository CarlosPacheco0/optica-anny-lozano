import React from 'react';
import { MapPin, Clock, Instagram, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CLINIC_CONFIG, buildWhatsAppUrl } from '../config/clinic';

export const LocationSection: React.FC = () => {
  const directWhatsappUrl = buildWhatsAppUrl(
    'Hola Dra. Anny, tengo una consulta sobre ubicación o disponibilidad de citas.'
  );

  return (
    <section id="ubicacion" className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-28 border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0F4C81]/15 bg-[#E1EFF9] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C81]">
            <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
            Ubicación y Horarios
          </span>
          <h2 className="mt-4 font-editorial text-4xl font-semibold text-[#0F4C81] sm:text-5xl">
            Visítanos en Ocaña
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Un espacio moderno y cómodo pensado para el cuidado integral de tu visión y la de tu familia.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Contact info card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#CBD5E1] bg-white p-7 sm:p-9 lg:col-span-5 shadow-xs">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-white shadow-md shadow-[#0F4C81]/20">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F4C81]">
                    Dirección
                  </h3>
                  <p className="mt-1 text-lg font-bold text-[#0F4C81]">
                    {CLINIC_CONFIG.address}
                  </p>
                  <p className="text-sm font-medium text-[#64748B]">
                    {CLINIC_CONFIG.city}, {CLINIC_CONFIG.country}
                  </p>
                  <a
                    href={CLINIC_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] hover:text-[#0F766E] transition-colors"
                  >
                    Cómo llegar en Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#E2E8F0] pt-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#0F766E] text-white shadow-md shadow-[#0D9488]/20">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F4C81]">
                    Horarios de atención
                  </h3>
                  <ul className="mt-2.5 space-y-2 text-sm">
                    {CLINIC_CONFIG.schedule.map((row) => (
                      <li
                        key={row.days}
                        className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-center"
                      >
                        <span className="font-bold text-[#1E293B]">{row.days}</span>
                        <span className="text-xs font-medium text-[#64748B]">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[0.7rem] italic text-slate-500">
                    * Horario sujeto a disponibilidad. Te confirmamos al agendar tu cita.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-[#E2E8F0] pt-6 sm:grid-cols-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-4 py-3.5 text-xs font-bold text-white shadow-md shadow-[#0D9488]/30 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Directo
              </a>
              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0F4C81] bg-white px-4 py-3.5 text-xs font-bold text-[#0F4C81] transition-colors hover:bg-[#0F4C81] hover:text-white"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                {CLINIC_CONFIG.instagramHandle}
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-3xl border border-[#CBD5E1] bg-[#E1EFF9] shadow-[0_18px_45px_rgba(15,76,129,0.12)] lg:col-span-7">
            <iframe
              title="Ubicación Consultorio Dra. Anny Lozano Santos en Ocaña"
              src={CLINIC_CONFIG.googleMapsEmbedUrl}
              className="h-full min-h-[300px] sm:min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
