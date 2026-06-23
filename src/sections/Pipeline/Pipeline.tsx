import styles from "./Pipeline.module.css";
import { Reveal } from "../../components/ui/Reveal";
import {
  IconUpload,
  IconHash,
  IconKey,
  IconClock,
  IconLink,
  IconShield,
} from "../../components/ui/Icon";

const STEPS = [
  {
    icon: IconUpload,
    n: "01",
    label: "Ingreso",
    algo: "multipart/upload",
    desc: "El archivo entra al sistema junto con la declaración firmada del custodio.",
  },
  {
    icon: IconHash,
    n: "02",
    label: "Huella",
    algo: "SHA-256",
    desc: "Se calcula la huella criptográfica única de 256 bits del contenido.",
  },
  {
    icon: IconKey,
    n: "03",
    label: "Firma",
    algo: "ECDSA P-256",
    desc: "El custodio firma la huella con su clave privada. La clave nunca toca el servidor.",
  },
  {
    icon: IconClock,
    n: "04",
    label: "Sello de tiempo",
    algo: "RFC 3161",
    desc: "Un tercero de confianza certifica la fecha y hora exactas del registro.",
  },
  {
    icon: IconLink,
    n: "05",
    label: "Cadena",
    algo: "Merkle-DAG",
    desc: "El evento se encadena de forma inmutable a la cadena de custodia del caso.",
  },
  {
    icon: IconShield,
    n: "06",
    label: "Certificado",
    algo: "PDF · PAdES",
    desc: "Se emite un certificado verificable de forma independiente por cualquier perito.",
  },
];

export function Pipeline() {
  return (
    <section id="pipeline" className={`section ${styles.pipeline}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">La solución</span>
            <h2 className={styles.title}>
              Cada evidencia pasa por un pipeline atómico e irreversible
            </h2>
            <p className={styles.lead}>
              Seis pasos automáticos. Si alguno falla, todo se revierte: nunca
              queda una evidencia a medio sellar. Tú solo subes el archivo; el
              sistema hace el resto.
            </p>
          </div>
        </Reveal>

        <div className={styles.track}>
          <div className={styles.lineH} aria-hidden="true" />
          <ol className={styles.steps}>
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 110}>
                <div className={styles.node}>
                  <span className={styles.icon}>
                    <s.icon size={22} />
                  </span>
                  <span className={styles.num}>{s.n}</span>
                </div>
                <h3 className={styles.label}>{s.label}</h3>
                <code className={`mono ${styles.algo}`}>{s.algo}</code>
                <p className={styles.desc}>{s.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
