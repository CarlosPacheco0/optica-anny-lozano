import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  MessageCircle,
  CalendarCheck,
  CheckCircle2,
  Monitor,
  Eye,
  Glasses,
  Baby,
  Clock,
  HelpCircle,
} from 'lucide-react';
import { buildWhatsAppUrl } from '../config/clinic';

interface VisualQuizSectionProps {
  onSelectServiceForBooking: (serviceId: string, note?: string) => void;
}

interface QuestionOption {
  id: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
  serviceRecommendation: string;
  serviceTitle: string;
}

const QUESTIONS = [
  {
    step: 1,
    title: '¿Cuál es tu molestia o necesidad principal hoy?',
    subtitle: 'Elige la situación que mejor describa lo que sientes en tu día a día.',
    options: [
      {
        id: 'fatiga-pantallas',
        icon: <Monitor className="h-5 w-5" />,
        label: 'Fatiga por pantallas o dolor de cabeza',
        desc: 'Paso muchas horas en celular o computador; siento pesadez ocular y visión borrosa al final del día.',
        serviceRecommendation: 'optometria-integral',
        serviceTitle: 'Examen de Optometría Clínica Integral',
      },
      {
        id: 'lentes-contacto',
        icon: <Eye className="h-5 w-5" />,
        label: 'Lentes de contacto o resequedad',
        desc: 'Quiero usar lentes por primera vez, me molestan los actuales o siento ardor y sensación de arenilla.',
        serviceRecommendation: 'lentes-de-contacto',
        serviceTitle: 'Adaptación y Control de Lentes de Contacto',
      },
      {
        id: 'cambio-gafas',
        icon: <Glasses className="h-5 w-5" />,
        label: 'Visión borrosa o renovar mi fórmula',
        desc: 'Me cuesta enfocar letreros de lejos o letras pequeñas de cerca; hace más de un año no cambio mis gafas.',
        serviceRecommendation: 'optometria-integral',
        serviceTitle: 'Examen de Optometría Clínica Integral',
      },
      {
        id: 'infantil-preventivo',
        icon: <Baby className="h-5 w-5" />,
        label: 'Consulta para niños o control de rutina',
        desc: 'Revisión para mi hijo/a en etapa escolar o chequeo preventivo general de salud visual.',
        serviceRecommendation: 'control-infantil',
        serviceTitle: 'Salud Visual Infantil y Juvenil',
      },
    ],
  },
  {
    step: 2,
    title: '¿Hace cuánto tiempo fue tu última consulta visual?',
    subtitle: 'Nos ayuda a evaluar si tu fórmula necesita ajuste o requiere revisión de superficie ocular.',
    options: [
      {
        id: 'menos-1-ano',
        icon: <Clock className="h-5 w-5" />,
        label: 'Menos de 1 año',
        desc: 'Tengo un control reciente pero apareció una molestia nueva o deseo segunda opinión.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
      {
        id: '1-a-2-anos',
        icon: <Clock className="h-5 w-5" />,
        label: 'Entre 1 y 2 años',
        desc: 'Es el tiempo recomendado para actualización de fórmula y descarte de fatiga.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
      {
        id: 'mas-2-anos',
        icon: <Clock className="h-5 w-5" />,
        label: 'Más de 2 años o nunca me he examinado',
        desc: 'Requiere valoración completa con biomicroscopía y examen refractivo detallado.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
    ],
  },
  {
    step: 3,
    title: '¿Usas actualmente alguna corrección visual?',
    subtitle: 'Así la especialista sabrá con qué antecedentes iniciará tu evaluación en Ocaña.',
    options: [
      {
        id: 'gafas',
        icon: <Glasses className="h-5 w-5" />,
        label: 'Uso gafas formuladas',
        desc: 'Las uso permanente o solo para lectura / pantallas de trabajo.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
      {
        id: 'lentes',
        icon: <Eye className="h-5 w-5" />,
        label: 'Uso lentes de contacto (blandos o rígidos)',
        desc: 'O combino el uso de lentes con gafas según la ocasión.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
      {
        id: 'ninguno',
        icon: <HelpCircle className="h-5 w-5" />,
        label: 'No uso nada actualmente',
        desc: 'Sería mi primera evaluación o sospecho que ya necesito corrección.',
        serviceRecommendation: '',
        serviceTitle: '',
      },
    ],
  },
];

export const VisualQuizSection: React.FC<VisualQuizSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, QuestionOption>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (option: QuestionOption) => {
    const updated = { ...answers, [currentStep]: option };
    setAnswers(updated);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Determine recommendation based on first answer (primary need)
  const primaryAnswer = answers[0];
  const timeAnswer = answers[1];
  const correctionAnswer = answers[2];

  const recommendedServiceTitle =
    primaryAnswer?.serviceTitle || 'Examen de Optometría Clínica Integral';
  const recommendedServiceId =
    primaryAnswer?.serviceRecommendation || 'optometria-integral';

  // Construct structured WhatsApp message with the quiz diagnosis
  const quizSummaryText = `Hola Dra. Anny, realicé el test interactivo en su página web:\n- Motivo principal: ${primaryAnswer?.label || 'Evaluación general'}\n- Última consulta: ${timeAnswer?.label || 'No especificada'}\n- Corrección actual: ${correctionAnswer?.label || 'Ninguna'}\n\nEl test me recomendó: *${recommendedServiceTitle}*.\n¿Qué fechas y horarios tiene disponibles para agendar en su consultorio de Ocaña?`;

  const whatsappQuizUrl = buildWhatsAppUrl(quizSummaryText);

  const handleApplyToForm = () => {
    const note = `Test visual: ${primaryAnswer?.label ?? ''} · Última consulta: ${timeAnswer?.label ?? ''}`;
    onSelectServiceForBooking(recommendedServiceId, note);
    const el = document.getElementById('reservar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="test-visual" className="relative overflow-hidden bg-[#F1F5F9] py-16 sm:py-28">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-16 -left-16 h-80 w-80 rounded-full bg-[#0F4C81]/8 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#0D9488]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/15 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#0F4C81] shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
            Autoevaluación en 3 Clics
          </span>
          <h2 className="mt-4 font-editorial text-3xl font-semibold leading-tight text-[#0F4C81] sm:text-5xl">
            ¿Qué tipo de consulta necesita tu visión hoy?
          </h2>
          <p className="mt-3 text-base text-[#475569]">
            Responde 3 preguntas breves para orientarte sobre el examen exacto que mejor se adapta a
            tus síntomas o estilo de vida.
          </p>
        </div>

        {/* Main Quiz Box */}
        <div className="mt-10 overflow-hidden rounded-[2.25rem] border border-[#CBD5E1] bg-white shadow-[0_22px_55px_rgba(15,76,129,0.1)]">
          {/* Progress bar */}
          <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-6 py-4 sm:px-8">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#0F4C81]">
                {isCompleted ? 'Resultado listo' : `Paso ${currentStep + 1} de ${QUESTIONS.length}`}
              </span>
              <span className="text-[#0D9488]">
                {isCompleted ? '100%' : `${Math.round(((currentStep + 1) / QUESTIONS.length) * 100)}% completado`}
              </span>
            </div>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0F4C81] to-[#0D9488] transition-all duration-300"
                style={{
                  width: isCompleted
                    ? '100%'
                    : `${((currentStep + 1) / QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {!isCompleted ? (
              <div>
                <div className="text-left">
                  <h3 className="font-editorial text-2xl font-semibold text-[#0F4C81] sm:text-3xl">
                    {QUESTIONS[currentStep].title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#64748B] sm:text-sm">
                    {QUESTIONS[currentStep].subtitle}
                  </p>
                </div>

                {/* Options list */}
                <div className="mt-7 space-y-3 sm:space-y-3.5">
                  {QUESTIONS[currentStep].options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option)}
                      className="group flex w-full items-start gap-4 rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F4C81] hover:bg-white hover:shadow-md active:scale-[0.99] sm:p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0F4C81] shadow-xs ring-1 ring-[#CBD5E1] transition-colors group-hover:bg-[#0F4C81] group-hover:text-white">
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-[#0F4C81] sm:text-base group-hover:text-[#0F4C81]">
                          {option.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                          {option.desc}
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#0D9488]" />
                    </button>
                  ))}
                </div>

                {currentStep > 0 && (
                  <div className="mt-6 flex justify-start">
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                      className="text-xs font-bold text-[#64748B] hover:text-[#0F4C81] transition-colors"
                    >
                      ← Volver a la pregunta anterior
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Recommendation Screen */
              <div className="animate-in fade-in zoom-in-95 duration-300">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#CCFBF1] px-4 py-1.5 text-xs font-bold text-[#0F766E]">
                  <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                  Diagnóstico preliminar completado
                </div>

                <h3 className="mt-4 font-editorial text-3xl font-semibold text-[#0F4C81] sm:text-4xl">
                  Tu consulta recomendada es:
                </h3>

                {/* Highlighted recommendation card */}
                <div className="mt-6 rounded-3xl border-2 border-[#0D9488] bg-gradient-to-br from-[#F0FDFA] to-white p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[#0D9488]">
                        Servicio Sugerido
                      </span>
                      <h4 className="mt-1 font-editorial text-2xl font-bold text-[#0F4C81] sm:text-3xl">
                        {recommendedServiceTitle}
                      </h4>
                      <p className="mt-2 text-xs text-[#475569] sm:text-sm leading-relaxed max-w-xl">
                        Basado en tu necesidad de{' '}
                        <strong>{primaryAnswer?.label?.toLowerCase() || 'salud visual'}</strong>, la
                        Dra. Anny Lozano examinará detalladamente tus ojos para darte la solución más
                        cómoda y nítida.
                      </p>
                    </div>

                    <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0D9488] text-white shadow-lg shadow-[#0D9488]/30">
                      <Sparkles className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3 border-t border-[#0D9488]/20 pt-4 text-xs font-medium text-[#0F4C81]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                      <span>Atención en Ocaña</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                      <span>Equipos de precisión</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#0D9488]" />
                      <span>Sin exámenes de carrera</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappQuizUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0D9488] to-[#0F766E] px-6 py-4 text-sm font-bold text-white shadow-md shadow-[#0D9488]/30 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0D9488]/40"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Enviar este resultado a WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleApplyToForm}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#0F4C81] bg-white px-6 py-4 text-sm font-bold text-[#0F4C81] transition-colors hover:bg-[#0F4C81] hover:text-white shadow-xs"
                  >
                    <CalendarCheck className="h-4 w-4" />
                    <span>Usar en formulario de agendamiento</span>
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#0F4C81] transition-colors"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Volver a responder el test</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
