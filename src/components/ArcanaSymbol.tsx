interface Props {
  className?: string;
}

/**
 * ARCANA mark — an abstract "A" holding a crescent, with a single
 * eye-point. Deliberately minimal: three strokes, nothing esoteric.
 */
export default function ArcanaSymbol({ className = "h-10 w-10" }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Símbolo ARCANA"
      className={className}
    >
      <path
        d="M24 6 L40 42 M24 6 L8 42"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M15 30 H33"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M24 22.5 A6.5 6.5 0 1 0 24 35.5 A5.2 5.2 0 1 1 24 22.5 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <circle cx="24" cy="29" r="1.4" fill="#090909" />
    </svg>
  );
}
