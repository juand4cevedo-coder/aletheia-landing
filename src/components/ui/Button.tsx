import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost";

interface Props {
  children: ReactNode;
  variant?: Variant;
  href?: string; // ancla interna (#demo) o externa
  to?: string; // ruta del router (/acceso)
  onClick?: () => void;
  full?: boolean;
  ariaLabel?: string;
}

/**
 * Botón unificado del sistema. Decide automáticamente si renderiza un <Link>
 * del router, un <a> normal (anclas) o un <button>, para mantener la
 * accesibilidad y la semántica correctas en cada caso.
 */
export function Button({
  children,
  variant = "primary",
  href,
  to,
  onClick,
  full,
  ariaLabel,
}: Props) {
  const cls = `${styles.btn} ${styles[variant]} ${full ? styles.full : ""}`;
  if (to)
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  return (
    <button className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
