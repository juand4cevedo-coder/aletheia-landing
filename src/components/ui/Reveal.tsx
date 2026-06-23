import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";
import styles from "./Reveal.module.css";

/**
 * Envuelve cualquier contenido y lo revela con un fade + desplazamiento suave
 * cuando entra en pantalla. `delay` permite escalonar varios elementos
 * (efecto cascada) para una sensación pulida, tipo Apple.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`${styles.reveal} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
