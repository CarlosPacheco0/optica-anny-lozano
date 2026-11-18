import React from 'react';
import { MapPin, Clock, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import { CLINIC_CONFIG, buildWhatsAppUrl } from '../config/clinic';

export const LocationSection: React.FC = () => {
  const directWhatsappUrl = buildWhatsAppUrl(
    'Hola Dra. Anny, tengo una consulta sobre ubicación o disponibilidad de citas.'
  );

  return (
    <section id="ubicacion" className="bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#E5F4F8] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A89A3]">
            Ubicación y Horarios
          </span>
          <h2 className="mt-4 font-editorial text-4xl font-semibold text-[#113D47] sm:text-5xl">
            Visítanos en Ocaña
          </h2>
          <p className="mt-3 text-base text-[#5F6665]">
            Un espacio moderno y cómodo pensado para el cuidado integral de tu visión.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-12">
          {/* Contact info card */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#113D47]/10 bg-[#F8FCFD] p-7 sm:p-9 lg:col-span-5">
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#4B9EB8] shadow-xs ring-1 ring-[#113D47]/10">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#113D47]">
                    Dirección
                  </h3>
                  <p className="mt-1 text-base font-semibold text-[#113D47]">
                    {CLINIC_CONFIG.address}
                  </p>
                  <p className="text-sm text-[#5F6665]">
                    {CLINIC_CONFIG.city}, {CLINIC_CONFIG.country}
                  </p>
                  <a
                    href={CLINIC_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B9EB8] hover:text-[#113D47]"
                  >
                    Cómo llegar en Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-[#113D47]/8 pt-7">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#49A699] shadow-xs ring-1 ring-[#113D47]/10">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#113D47]">
                    Horarios de atención
                  </h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    {CLINIC_CONFIG.schedule.map((row) => (
                      <li
                        key={row.days}
                        className="flex flex-col justify-between gap-0.5 sm:flex-row sm:items-center"
                      >
                        <span className="font-medium text-[#113D47]">{row.days}</span>
                        <span className="text-xs text-[#5F6665]">{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2.5 text-[0.7rem] italic text-[#757D7B]">
                    * Horario sujeto a disponibilidad. Te confirmamos al agendar tu cita.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-[#113D47]/8 pt-6 sm:grid-cols-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#49A699] px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#388D81]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={CLINIC_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#113D47]/15 bg-white px-4 py-3 text-xs font-semibold text-[#113D47] transition-colors hover:border-[#4B9EB8] hover:text-[#4B9EB8]"
              >
                <Instagram className="h-4 w-4 shrink-0" />
                {CLINIC_CONFIG.instagramHandle}
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="overflow-hidden rounded-3xl border border-[#113D47]/10 bg-[#EAF6FA] shadow-[0_18px_45px_rgba(17,61,71,0.08)] lg:col-span-7">
            <iframe
              title="Ubicación Consultorio Dra. Anny Lozano Santos en Ocaña"
              src={CLINIC_CONFIG.googleMapsEmbedUrl}
              className="h-full min-h-[290px] sm:min-h-[340px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
