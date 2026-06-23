import styles from "./Testimonials.module.css";
import { Reveal } from "../../components/ui/Reveal";

const ITEMS = [
  {
    quote:
      "Por primera vez puedo sostener técnicamente la integridad de una evidencia digital frente a una impugnación. Cambió cómo preparo cada caso.",
    name: "Abogada litigante",
    area: "Derecho penal",
  },
  {
    quote:
      "El certificado verificable por un perito externo, sin acceso al sistema, es justo lo que faltaba en mi práctica. Profesional y entendible.",
    name: "Abogado independiente",
    area: "Derecho civil",
  },
  {
    quote:
      "La cadena de custodia inmutable me da la tranquilidad de que la historia de cada documento no se puede reescribir. Eso vale el plan completo.",
    name: "Socio de despacho",
    area: "Derecho laboral",
  },
];

export function Testimonials() {
  return (
    <section className={`section ${styles.testimonials}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">Confianza</span>
            <h2 className={styles.title}>
              Pensado con abogados reales, para casos reales
            </h2>
          </div>
        </Reveal>
        <div className={styles.grid}>
          {ITEMS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className={styles.card}>
                <span className={styles.quoteMark} aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <figcaption className={styles.author}>
                  <strong>{t.name}</strong>
                  <span>{t.area}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
