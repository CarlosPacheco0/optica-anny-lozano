import React, { useState } from 'react';
import {
  MessageCircle,
  CalendarDays,
  Sun,
  Sunset,
  Clock,
  Send,
  User,
  Stethoscope,
  Sparkles,
  Check,
} from 'lucide-react';
import {
  CLINIC_CONFIG,
  CLINIC_SERVICES,
  buildWhatsAppUrl,
  formatBookingMessage,
} from '../config/clinic';

interface BookingSectionProps {
  selectedServiceId: string;
  onChangeServiceId: (id: string) => void;
  prefilledNote: string;
  onChangeNote: (note: string) => void;
}

const SHIFTS = [
  { id: 'Mañana (8:00 a.m. - 12:00 m.)', label: 'Mañana', sub: '8:00 a 12:00', icon: Sun },
  { id: 'Tarde (2:00 p.m. - 6:00 p.m.)', label: 'Tarde', sub: '2:00 a 6:00', icon: Sunset },
  { id: 'Cualquier horario disponible', label: 'Flexible', sub: 'Cualquiera', icon: Clock },
] as const;

const BOOKING_STEPS = [
  {
    step: '01',
    title: 'Elige tu consulta y horario',
    desc: 'Selecciona el servicio y la jornada que te resulte más cómoda.',
  },
  {
    step: '02',
    title: 'Genera tu mensaje listo',
    desc: 'El sistema organiza tus datos sin que tengas que redactar nada desde cero.',
  },
  {
    step: '03',
    title: 'Confirmación humana directa',
    desc: 'Dra. Anny o su equipo te responderán personalmente con la hora exacta asignada.',
  },
];

export const BookingSection: React.FC<BookingSectionProps> = ({
  selectedServiceId,
  onChangeServiceId,
  prefilledNote,
  onChangeNote,
}) => {
  const [patientName, setPatientName] = useState('');
  const [preferredDay, setPreferredDay] = useState('');
  const [preferredShift, setPreferredShift] = useState<string>(SHIFTS[0].id);
  const [nameError, setNameError] = useState(false);

  const selectedService =
    CLINIC_SERVICES.find((s) => s.id === selectedServiceId) ?? CLINIC_SERVICES[0];

  const formattedMessage = formatBookingMessage({
    patientName,
    serviceTitle: selectedService.title,
    preferredDay: preferredDay || 'Próxima fecha disponible',
    preferredShift,
    notes: prefilledNote,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    const url = buildWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const todayIso = new Date().toISOString().split('T')[0];

  return (
    <section id="reservar" className="relative overflow-hidden bg-white py-16 sm:py-28 border-t border-slate-200/70">
      {/* Decorative ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-[#0D9488]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 rounded-full bg-[#0F4C81]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left column: Steps + Live WhatsApp Chat simulator */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/30 bg-[#CCFBF1] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F766E] shadow-xs">
              <MessageCircle className="h-3.5 w-3.5 text-[#0D9488]" />
              Agendamiento Directo
            </span>

            <h2 className="mt-4 font-editorial text-4xl font-semibold leading-tight text-[#0F4C81] sm:text-5xl">
              Separa tu cita en menos de un minuto
            </h2>

            <p className="mt-3 text-base leading-relaxed text-[#475569]">
              Atendemos tu consulta de forma personalizada. Completa tus datos y enviaremos una
              solicitud clara a nuestro WhatsApp de atención en Ocaña.
            </p>

            {/* Desktop steps */}
            <ol className="mt-8 space-y-4">
              {BOOKING_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#E2E8F0] bg-white/90 p-3.5 shadow-xs transition-colors hover:border-[#0F4C81]/30"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#1E65A4] text-xs font-bold text-white shadow-xs">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#0F4C81]">{item.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Live WhatsApp chat simulator */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#CBD5E1] bg-white shadow-[0_18px_45px_rgba(15,76,129,0.1)]">
              {/* WhatsApp header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-[#0F4C81] to-[#135994] px-4 py-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white font-bold font-editorial text-lg border border-white/20">
                    AL
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#10B981] ring-2 ring-[#0F4C81]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-tight text-white">
                      {CLINIC_CONFIG.brandName}
                    </p>
                    <p className="text-[0.65rem] text-[#CCFBF1] flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                      En línea · WhatsApp Oficial
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-semibold text-[#CCFBF1]">
                  Vista previa
                </span>
              </div>

              {/* Chat wallpaper area */}
              <div className="bg-[#EFEAE2] p-4 sm:p-5">
                <div className="ml-auto max-w-[96%] rounded-2xl rounded-tr-none border border-[#BCE89E] bg-[#DCF8C6] p-3.5 text-xs text-[#1E293B] shadow-xs">
                  <p className="whitespace-pre-wrap font-sans text-xs leading-relaxed">
                    {formattedMessage}
                  </p>
                  <div className="mt-2 flex items-center justify-end gap-1 text-[0.65rem] text-slate-500">
                    <span>Ahora</span>
                    <span className="flex text-[#38BDF8]">
                      <Check className="h-3 w-3 -mr-1.5" />
                      <Check className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp footer bar */}
              <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-2.5 text-[0.72rem] text-[#64748B]">
                <span>Se enviará a: +57 314 239 8816</span>
                <span className="font-semibold text-[#0D9488]">Listo para enviar</span>
              </div>
            </div>
          </div>

          {/* Right column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="overflow-hidden rounded-[2rem] border border-[#CBD5E1] bg-white shadow-[0_24px_60px_rgba(15,76,129,0.12)]"
            >
              {/* Form top clinical accent bar */}
              <div className="h-2 w-full bg-gradient-to-r from-[#0F4C81] via-[#0D9488] to-[#14B8A6]" />

              <div className="p-6 sm:p-9">
                <div className="border-b border-[#E2E8F0] pb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#0D9488]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                      Confirmación sin intermediarios
                    </span>
                  </div>
                  <h3 className="mt-1 font-editorial text-2xl font-semibold text-[#0F4C81] sm:text-3xl">
                    Datos para tu cita en Ocaña
                  </h3>
                  <p className="mt-1 text-xs text-[#64748B]">
                    Sin registros complicados ni pagos previos. Confirmamos tu hora directamente por
                    WhatsApp.
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Patient Name */}
                  <div>
                    <label
                      htmlFor="patient-name"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81]"
                    >
                      <User className="h-4 w-4 text-[#0D9488]" />
                      Nombre completo *
                    </label>
                    <input
                      id="patient-name"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (nameError) setNameError(false);
                      }}
                      placeholder="Ej. María Camila Pérez"
                      className={`mt-2 w-full rounded-2xl border bg-[#F8FAFC] px-4 py-3.5 text-base sm:text-sm text-[#1E293B] placeholder-slate-400 outline-none transition-all focus:bg-white focus:ring-2 ${
                        nameError
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200'
                          : 'border-[#CBD5E1] focus:border-[#0F4C81] focus:ring-[#0F4C81]/15'
                      }`}
                    />
                    {nameError && (
                      <p className="mt-1.5 text-xs font-semibold text-rose-600">
                        Por favor escribe tu nombre para personalizar tu cita.
                      </p>
                    )}
                  </div>

                  {/* Service selector */}
                  <div>
                    <label
                      htmlFor="booking-service"
                      className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81]"
                    >
                      <Stethoscope className="h-4 w-4 text-[#0D9488]" />
                      Servicio o consulta requerida
                    </label>
                    <select
                      id="booking-service"
                      value={selectedServiceId}
                      onChange={(e) => onChangeServiceId(e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-base sm:text-sm font-semibold text-[#1E293B] outline-none transition-all focus:border-[#0F4C81] focus:bg-white focus:ring-2 focus:ring-[#0F4C81]/15"
                    >
                      {CLINIC_SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title} — {service.duration}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred date + Shift */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="min-w-0">
                      <label
                        htmlFor="preferred-day"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81]"
                      >
                        <CalendarDays className="h-4 w-4 text-[#0D9488]" />
                        Fecha preferida (opcional)
                      </label>
                      <input
                        id="preferred-day"
                        type="date"
                        min={todayIso}
                        value={preferredDay}
                        onChange={(e) => setPreferredDay(e.target.value)}
                        className="mt-2 w-full min-w-0 appearance-none rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3.5 text-base sm:text-sm text-[#1E293B] outline-none transition-all focus:border-[#0F4C81] focus:bg-white focus:ring-2 focus:ring-[#0F4C81]/15"
                      />
                    </div>

                    <div>
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81]">
                        <Clock className="h-4 w-4 text-[#0D9488]" />
                        Jornada preferida
                      </span>
                      <div className="mt-2 grid grid-cols-3 gap-2">
                        {SHIFTS.map((shift) => {
                          const Icon = shift.icon;
                          const active = preferredShift === shift.id;
                          return (
                            <button
                              key={shift.id}
                              type="button"
                              onClick={() => setPreferredShift(shift.id)}
                              className={`flex flex-col items-center justify-center gap-1 rounded-2xl border p-2 text-xs font-bold transition-all ${
                                active
                                  ? 'border-2 border-[#0D9488] bg-[#CCFBF1]/40 text-[#0F766E] shadow-sm'
                                  : 'border-[#CBD5E1] bg-[#F8FAFC] text-[#64748B] hover:border-[#0F4C81]/40 hover:bg-white'
                              }`}
                            >
                              <Icon
                                className={`h-4 w-4 ${active ? 'text-[#0D9488]' : 'text-[#64748B]'}`}
                              />
                              <span className="leading-none">{shift.label}</span>
                              <span className="text-[0.62rem] font-normal text-slate-500">
                                {shift.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Notes / Special symptoms */}
                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0F4C81]"
                    >
                      <span>Molestia o motivo de consulta (opcional)</span>
                      <span className="text-[0.68rem] font-normal lowercase text-slate-400">
                        Opcional
                      </span>
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={2}
                      value={prefilledNote}
                      onChange={(e) => onChangeNote(e.target.value)}
                      placeholder="Ej. Uso lentes blandos hace un año y siento resequedad; o requiero examen para cambio de gafas..."
                      className="mt-2 w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-base sm:text-sm text-[#1E293B] placeholder-slate-400 outline-none transition-all focus:border-[#0F4C81] focus:bg-white focus:ring-2 focus:ring-[#0F4C81]/15"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-6 py-4 text-base font-bold text-white shadow-[0_14px_30px_rgba(13,148,136,0.38)] transition-all hover:scale-[1.01] hover:from-[#0F766E] hover:to-[#115E59] hover:shadow-[0_18px_36px_rgba(13,148,136,0.5)] active:scale-[0.98]"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Agendar mi cita por WhatsApp</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="mt-2.5 text-center text-[0.72rem] text-[#64748B]">
                      Se abrirá tu aplicación de WhatsApp con el mensaje ya estructurado para enviar
                      con un solo toque.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
