import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Instagram, HelpCircle } from 'lucide-react';
import { CLINIC_CONFIG, CLINIC_FAQS, buildWhatsAppUrl } from '../config/clinic';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const customQuestionUrl = buildWhatsAppUrl(
    'Hola Dra. Anny, tengo una pregunta antes de agendar mi consulta.'
  );

  const supportCard = (
    <div className="rounded-3xl border border-[#CBD5E1] bg-[#F8FAFC] p-6 sm:p-7 shadow-[0_14px_35px_rgba(15,76,129,0.06)]">
      <div className="flex items-center gap-2">
        <HelpCircle className="h-4 w-4 text-[#0D9488]" />
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0D9488]">
          Atención directa
        </span>
      </div>

      <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#0F4C81]">
        ¿Tienes otra pregunta sobre tu caso?
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
        Escríbenos directamente por WhatsApp y te orientamos sobre el tipo de consulta ideal para
        ti o tu familiar.
      </p>

      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href={customQuestionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#0D9488] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-[#0D9488]/25 transition-all hover:bg-[#0F766E]"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar por WhatsApp
        </a>
        <a
          href={CLINIC_CONFIG.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5 text-xs font-bold text-[#0F4C81] transition-colors hover:border-[#0D9488] hover:text-[#0D9488]"
        >
          <Instagram className="h-3.5 w-3.5" />
          {CLINIC_CONFIG.instagramHandle}
        </a>
      </div>
    </div>
  );

  return (
    <section id="preguntas" className="border-t border-slate-200/70 bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: intro + desktop support card */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-[#0F4C81]/15 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C81] shadow-xs">
              Preguntas Frecuentes
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#0F4C81] sm:text-5xl">
              Resolvemos tus dudas antes de tu cita
            </h2>

            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              Queremos que llegues tranquilo y con toda la información clara sobre cómo trabajamos,
              duración de la cita y cómo prepararte.
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
                  className={`overflow-hidden rounded-2xl bg-white transition-all duration-200 ${
                    isOpen
                      ? 'border-y border-r border-[#CBD5E1] border-l-4 border-l-[#0D9488] shadow-[0_12px_30px_rgba(15,76,129,0.08)]'
                      : 'border border-[#CBD5E1] hover:border-[#0F4C81]/40'
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
                        className={`mt-0.5 text-xs font-extrabold tracking-wider ${
                          isOpen ? 'text-[#0D9488]' : 'text-slate-400'
                        }`}
                      >
                        {numberLabel}
                      </span>
                      <span className="text-sm font-bold leading-snug text-[#0F4C81] sm:text-base">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? 'bg-[#0D9488] text-white shadow-xs'
                          : 'bg-slate-100 text-[#64748B]'
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
                    <div className="border-t border-[#E2E8F0] bg-[#F8FAFC]/50 px-5 pb-5 pt-3.5 text-sm leading-relaxed text-[#475569] sm:px-6 sm:pb-6 sm:pl-[3.75rem] sm:pt-4">
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
