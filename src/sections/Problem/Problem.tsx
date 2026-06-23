import styles from "./Problem.module.css";
import { Reveal } from "../../components/ui/Reveal";
import { IconDoc, IconServer, IconAlert } from "../../components/ui/Icon";

const CARDS = [
  {
    icon: IconDoc,
    title: "Un PDF sin hash",
    body: "Si la contraparte impugna su autenticidad, no existe forma técnica de demostrar que no fue alterado. Tu palabra contra la suya.",
    tag: "Sin defensa técnica",
  },
  {
    icon: IconServer,
    title: "Una carpeta compartida",
    body: "Google Drive o Dropbox guardan archivos, pero no generan prueba de integridad ni registran quién, cuándo y cómo accedió a la evidencia.",
    tag: "Sin trazabilidad",
  },
  {
    icon: IconAlert,
    title: "Una impresión en papel",
    body: "Pierde por completo los metadatos del original y no admite verificación criptográfica posterior por un perito independiente.",
    tag: "Sin verificación",
  },
];

export function Problem() {
  return (
    <section id="problema" className={`section ${styles.problem}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">El problema</span>
            <h2 className={styles.title}>
              ¿Qué pasa cuando la contraparte impugna tu evidencia digital?
            </h2>
            <p className={styles.lead}>
              En un litigio, la integridad de la evidencia decide casos. Las
              herramientas que usas a diario no fueron diseñadas para sostener
              una prueba ante un juez.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {CARDS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className={styles.card}>
                <span className={styles.icon}>
                  <c.icon size={22} />
                </span>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBody}>{c.body}</p>
                <span className={styles.tag}>{c.tag}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
