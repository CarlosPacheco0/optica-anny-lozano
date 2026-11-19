import React from "react";

interface BrandLogoProps {
  variant?: "horizontal" | "seal" | "mark";
  tone?: "dark" | "light" | "brand";
  className?: string;
}

/**
 * Aproximación vectorial del isotipo AL + Ojo de perfil basado en la identidad
 * visual de la Dra. Anny Lozano Santos.
 * TODO: Reemplazar con el archivo SVG/PNG oficial cuando la doctora lo entregue.
 */
export const BrandMark: React.FC<{ className?: string }> = ({
  className = "w-11 h-11",
}) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Arco externo del ojo (perfil izquierdo) */}
    <path
      d="M42 18C26 26 19 42 20 56C21 67 27 75 35 80"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    {/* Párpado interno */}
    <path
      d="M41 29C31 36 27 48 29 59C30 66 34 71 39 74"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Iris y pupila */}
    <ellipse cx="36.5" cy="52" rx="6.2" ry="11.5" fill="currentColor" />
    <ellipse
      cx="34.5"
      cy="48.5"
      rx="2.1"
      ry="3.2"
      fill="white"
      fillOpacity="0.88"
    />

    {/* Trazo caligráfico superior C / L */}
    <path
      d="M41 16C57 12 75 17 85 29"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
    />
    {/* Pierna izquierda de la A + bucle inferior elegante */}
    <path
      d="M44 17C50 38 45 64 34 79C29 85 24 84 26 78C29 70 46 69 62 74C75 78 86 73 91 63"
      stroke="currentColor"
      strokeWidth="3.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Pierna derecha de la A + curva ascendente de la L */}
    <path
      d="M45 20C54 44 62 67 74 83C78 88 85 87 89 82"
      stroke="currentColor"
      strokeWidth="3.3"
      strokeLinecap="round"
    />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "horizontal",
  tone = "dark",
  className = "",
}) => {
  const palette = {
    dark: {
      mark: "text-[#4B9EB8]",
      title: "text-[#113D47]",
      sub: "text-[#5F6665]",
    },
    light: {
      mark: "text-[#CBE8F1]",
      title: "text-white",
      sub: "text-[#CBE8F1]/80",
    },
    brand: {
      mark: "text-[#4B9EB8]",
      title: "text-[#113D47]",
      sub: "text-[#4B9EB8]",
    },
  }[tone];

  if (variant === "mark") {
    return <BrandMark className={`${palette.mark} ${className}`} />;
  }

  if (variant === "seal") {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${className}`}
      >
        <svg
          viewBox="0 0 180 180"
          className="w-full h-full text-[#4B9EB8]"
          aria-hidden="true"
        >
          <defs>
            <path id="topArc" d="M 24,90 A 66,66 0 1,1 156,90" />
            <path id="bottomArc" d="M 20,90 A 70,70 0 0,0 160,90" />
          </defs>
          <text
            fill="currentColor"
            fontSize="10.2"
            fontWeight="600"
            letterSpacing="1.2"
            fontFamily="Cormorant Garamond, Georgia, serif"
          >
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              Dra. Anny Carolina Lozano Santos
            </textPath>
          </text>
          <text
            fill="currentColor"
            fontSize="8.2"
            fontWeight="600"
            letterSpacing="2.2"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              OPTOMETRÍA Y CONTACTOLOGÍA
            </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <BrandMark className="w-16 h-16 text-[#4B9EB8]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <BrandMark
        className={`h-8 w-8 sm:h-10 sm:w-10 shrink-0 ${palette.mark}`}
      />
      <div className="leading-none">
        <span
          className={`block font-editorial text-[1.12rem] sm:text-[1.35rem] font-semibold tracking-tight whitespace-nowrap ${palette.title}`}
        >
          Dra. Anny Lozano Santos
        </span>
        <span
          className={`mt-1 block text-[0.55rem] sm:text-[0.62rem] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.22em] whitespace-nowrap ${palette.sub}`}
        >
          Optometría y Contactología
        </span>
      </div>
    </div>
  );
};
