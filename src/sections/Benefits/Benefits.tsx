import styles from "./Benefits.module.css";
import { Reveal } from "../../components/ui/Reveal";
import {
  IconEye,
  IconLock,
  IconScale,
  IconFingerprint,
} from "../../components/ui/Icon";

const ITEMS = [
  {
    icon: IconFingerprint,
    title: "Verificable por terceros",
    body: "Un juez o perito recalcula el SHA-256 con cualquier herramienta estándar (OpenSSL, sha256sum) y lo compara con el certificado. No necesita confiar en nosotros ni entrar al sistema.",
  },
  {
    icon: IconLock,
    title: "Seguridad de grado bancario",
    body: "Las claves privadas nunca llegan al servidor. Comunicaciones por TLS 1.3, contraseñas con BCrypt y rate limiting contra fuerza bruta. La tríada CIA es el cimiento, no una capa.",
  },
  {
    icon: IconScale,
    title: "Diseñado sobre la ley colombiana",
    body: "Construido sobre la Ley 527 de 1999, el Art. 244 del Código General del Proceso y el Decreto 2364 de 2012. Cumple el requisito de “método confiable” para la admisibilidad probatoria.",
  },
  {
    icon: IconEye,
    title: "Cadena de custodia inmutable",
    body: "Cada evento registra usuario, IP, sesión y timestamp, encadenado con Merkle-DAG. La base de datos revoca UPDATE y DELETE: la historia no se puede reescribir.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className={`section ${styles.benefits}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">Por qué ALETHEIA</span>
            <h2 className={styles.title}>
              Confianza que se demuestra, no que se promete
            </h2>
            <p className={styles.lead}>
              La seguridad no es una característica de ALETHEIA: es su razón de
              existir. Cada decisión parte de un modelo de amenazas concreto.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <article className={styles.card}>
                <span className={styles.icon}>
                  <it.icon size={24} />
                </span>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardBody}>{it.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
