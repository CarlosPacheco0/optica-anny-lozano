import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Instagram } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_FAQS, buildWhatsAppUrl } from '../config/clinic';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const customQuestionUrl = buildWhatsAppUrl(
    'Hola Dra. Anny, tengo una pregunta antes de agendar mi consulta.'
  );

  const supportCard = (
    <div className="rounded-3xl border border-[#113D47]/10 bg-white p-6 shadow-[0_14px_35px_rgba(17,61,71,0.06)]">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#49A699]">
        Atención directa
      </p>
      <h3 className="mt-1.5 font-editorial text-2xl font-semibold text-[#113D47]">
        ¿Tienes otra pregunta sobre tu caso?
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-[#5F6665]">
        Escríbenos directamente por WhatsApp y te orientamos sobre el tipo de consulta ideal para
        ti.
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href={customQuestionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#49A699] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#388D81]"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar por WhatsApp
        </a>
        <a
          href={CLINIC_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#113D47]/12 bg-[#F8FCFD] px-4 py-2.5 text-xs font-semibold text-[#113D47] transition-colors hover:border-[#4B9EB8] hover:text-[#4B9EB8]"
        >
          <Instagram className="h-3.5 w-3.5" />
          {CLINIC_CONFIG.instagramHandle}
        </a>
      </div>
    </div>
  );

  return (
    <section id="preguntas" className="bg-[#F6FAFB] py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: intro + desktop support card */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <span className="inline-flex items-center rounded-full bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A89A3] ring-1 ring-[#4B9EB8]/20">
              Preguntas Frecuentes
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#113D47] sm:text-5xl">
              Resolvemos tus dudas antes de tu cita
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#5F6665] sm:mt-4 sm:text-base">
              Queremos que llegues tranquilo y con toda la información clara sobre cómo trabajamos
              y cómo prepararte para tu consulta visual.
            </p>

            {/* Support card on desktop */}
            <div className="mt-8 hidden lg:block">{supportCard}</div>
          </div>

          {/* Right column: numbered accordion */}
          <div className="space-y-3 lg:col-span-7 sm:space-y-3.5">
            {CLINIC_FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const numberLabel = String(idx + 1).padStart(2, '0');

              return (
                <div
                  key={item.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                    isOpen
                      ? 'border-[#4B9EB8]/50 shadow-[0_12px_30px_rgba(17,61,71,0.07)]'
                      : 'border-[#113D47]/10 hover:border-[#4B9EB8]/35'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span
                        className={`mt-0.5 text-xs font-bold tracking-wider ${
                          isOpen ? 'text-[#4B9EB8]' : 'text-[#757D7B]'
                        }`}
                      >
                        {numberLabel}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-[#113D47] sm:text-base">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? 'bg-[#E5F4F8] text-[#4B9EB8]'
                          : 'bg-[#F4F6F5] text-[#5F6665]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#113D47]/6 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-[#5F6665] sm:px-6 sm:pb-6 sm:pl-[3.75rem] sm:pt-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Support card on mobile: appears naturally below the questions */}
            <div className="pt-4 lg:hidden">{supportCard}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
