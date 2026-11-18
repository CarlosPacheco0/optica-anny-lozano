import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Eye,
  CircleDot,
  Microscope,
  Glasses,
  Smile,
  FileCheck2,
  Clock,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { CLINIC_SERVICES, type ClinicService } from '../config/clinic';

interface ServicesSectionProps {
  selectedServiceId: string;
  onSelectServiceForBooking: (service: ClinicService) => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'optometria-integral': <Eye className="h-5 w-5" />,
  'lentes-de-contacto': <CircleDot className="h-5 w-5" />,
  'segmento-anterior': <Microscope className="h-5 w-5" />,
  'asesoria-optica': <Glasses className="h-5 w-5" />,
  'control-infantil': <Smile className="h-5 w-5" />,
  'certificados-visuales': <FileCheck2 className="h-5 w-5" />,
};

// Inclinación más sutil en móvil para facilitar el deslizamiento táctil, y más marcada en escritorio
const CARD_TILTS = [
  '-rotate-1 sm:-rotate-2 translate-y-0.5 sm:translate-y-1',
  'rotate-1 sm:rotate-[1.75deg] -translate-y-1 sm:-translate-y-2',
  '-rotate-[0.75deg] sm:-rotate-[1.35deg] translate-y-1 sm:translate-y-2',
  'rotate-1 sm:rotate-2 -translate-y-0.5 sm:-translate-y-1.5',
  '-rotate-1 sm:-rotate-[1.75deg] translate-y-0.5 sm:translate-y-1',
  'rotate-[0.75deg] sm:rotate-[1.35deg] -translate-y-0.5 sm:-translate-y-1',
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  selectedServiceId,
  onSelectServiceForBooking,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);

    const firstCard = el.querySelector('article');
    if (firstCard) {
      const cardStep = firstCard.clientWidth + 24;
      const idx = Math.round(el.scrollLeft / cardStep);
      setActiveIndex(Math.max(0, Math.min(CLINIC_SERVICES.length - 1, idx)));
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(updateScrollState, 120);
    window.addEventListener('resize', updateScrollState);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollTrack = (direction: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector('article');
    const step = firstCard ? firstCard.clientWidth + 24 : 330;
    el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  const scrollToCard = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('article');
    const target = cards[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="servicios" className="overflow-hidden bg-white py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Clean editorial header + deck arrows */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-[#E5F4F8] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A89A3]">
              Nuestros Servicios
            </span>
            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight tracking-tight text-[#113D47] sm:text-5xl">
              Cuidado visual especializado para cada etapa
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5F6665] sm:text-base">
              Elige la consulta o servicio que necesitas y agenda tu cita directamente por WhatsApp.
            </p>
          </div>

          {/* Desktop horizontal deck arrows */}
          {(canScrollLeft || canScrollRight) && (
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollTrack('left')}
                disabled={!canScrollLeft}
                aria-label="Servicios anteriores"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#113D47]/12 bg-white text-[#113D47] shadow-xs transition-all hover:border-[#4B9EB8] hover:text-[#4B9EB8] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('right')}
                disabled={!canScrollRight}
                aria-label="Siguientes servicios"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#113D47]/12 bg-white text-[#113D47] shadow-xs transition-all hover:border-[#4B9EB8] hover:text-[#4B9EB8] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Horizontal side-by-side tilted cards deck */}
      <div className="relative mx-auto mt-4 max-w-[82rem] sm:mt-6">
        {canScrollLeft && (
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-white to-transparent lg:block"
            aria-hidden="true"
          />
        )}
        {canScrollRight && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-16 bg-gradient-to-l from-white to-transparent lg:block"
            aria-hidden="true"
          />
        )}

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 py-8 sm:gap-7 sm:px-10 sm:py-10 lg:px-14"
        >
          {CLINIC_SERVICES.map((service, index) => {
            const isSelected = selectedServiceId === service.id;
            const isExpanded = expandedId === service.id;
            const isSpecialty = service.category === 'especialidad';
            const tiltClass =
              isExpanded || isSelected
                ? 'rotate-0 -translate-y-2 z-20'
                : CARD_TILTS[index % CARD_TILTS.length];

            return (
              <article
                key={service.id}
                className={`group relative flex w-[82vw] max-w-[305px] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-[1.85rem] border transition-all duration-300 ease-out sm:w-[310px] sm:max-w-none sm:snap-start ${tiltClass} hover:z-20 hover:rotate-0 hover:-translate-y-3 hover:scale-[1.02] ${
                  isSelected
                    ? 'border-[#4B9EB8] bg-[#F3FAFC] shadow-[0_22px_48px_rgba(75,158,184,0.22)]'
                    : 'border-[#113D47]/12 bg-white shadow-[0_14px_34px_rgba(17,61,71,0.08)] hover:border-[#4B9EB8]/60 hover:shadow-[0_24px_50px_rgba(17,61,71,0.14)]'
                }`}
              >
                {/* Top clinical accent stripe */}
                <div
                  className={`h-1.5 w-full ${
                    isSpecialty
                      ? 'bg-gradient-to-r from-[#4B9EB8] to-[#49A699]'
                      : isSelected
                        ? 'bg-[#4B9EB8]'
                        : 'bg-[#E5F4F8]'
                  }`}
                />

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    {/* Top row: Icon + Tag */}
                    <div className="flex items-center justify-between gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
                          service.featured
                            ? 'bg-[#113D47] text-[#CBE8F1]'
                            : 'bg-[#E5F4F8] text-[#4B9EB8] group-hover:bg-[#4B9EB8] group-hover:text-white'
                        }`}
                      >
                        {SERVICE_ICONS[service.id] ?? <Eye className="h-5 w-5" />}
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold tracking-wide ${
                          isSpecialty
                            ? 'bg-[#E3F4F1] text-[#388D81]'
                            : service.featured
                              ? 'bg-[#CBE8F1]/65 text-[#113D47]'
                              : 'bg-[#F4F6F5] text-[#5F6665]'
                        }`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Title & summary */}
                    <h3 className="mt-5 font-editorial text-[1.5rem] font-semibold leading-snug text-[#113D47] sm:text-[1.55rem]">
                      {service.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#5F6665]">
                      {service.shortDescription}
                    </p>

                    {/* Expandable "Qué incluye" */}
                    <div className="mt-5">
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : service.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-[#3A89A3] transition-colors hover:text-[#113D47]"
                      >
                        <span>
                          {isExpanded ? 'Ocultar detalle' : 'Ver qué incluye la consulta'}
                        </span>
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 border-l-2 border-[#CBE8F1] pl-3.5">
                          {service.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs leading-relaxed text-[#2B4B53]"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#49A699]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="mt-6 flex items-center justify-between gap-2 border-t border-[#113D47]/8 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5F6665]">
                      <Clock className="h-3.5 w-3.5 text-[#4B9EB8]" />
                      {service.duration}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service)}
                      className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#49A699] text-white shadow-xs'
                          : 'bg-[#E5F4F8] text-[#113D47] hover:bg-[#113D47] hover:text-white'
                      }`}
                    >
                      {isSelected ? 'Seleccionado' : 'Reservar'}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mobile pagination dots + compact arrows */}
        <div className="mt-1 flex items-center justify-between px-5 sm:hidden">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Indicador de servicios">
            {CLINIC_SERVICES.map((service, idx) => (
              <button
                key={service.id}
                type="button"
                onClick={() => scrollToCard(idx)}
                aria-label={`Ver ${service.title}`}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === idx ? 'w-6 bg-[#4B9EB8]' : 'w-2 bg-[#CBE8F1]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#757D7B]">
              {activeIndex + 1} / {CLINIC_SERVICES.length}
            </span>
            <button
              type="button"
              onClick={() => scrollTrack('left')}
              disabled={!canScrollLeft}
              aria-label="Servicio anterior"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#113D47]/12 bg-white text-[#113D47] disabled:opacity-35"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack('right')}
              disabled={!canScrollRight}
              aria-label="Siguiente servicio"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#113D47]/12 bg-white text-[#113D47] disabled:opacity-35"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
