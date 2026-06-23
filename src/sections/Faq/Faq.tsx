import { useState } from "react";
import styles from "./Faq.module.css";
import { Reveal } from "../../components/ui/Reveal";

const QA = [
  {
    q: "¿Qué es ALETHEIA y para qué sirve?",
    a: "Es una plataforma de preservación de evidencia digital con integridad criptográfica verificable. Permite demostrar matemáticamente que una evidencia no ha sido alterada desde el momento exacto de su ingreso, usando SHA-256, firma ECDSA y sello de tiempo RFC 3161.",
  },
  {
    q: "¿En qué se diferencia de Google Drive o Dropbox?",
    a: "Esos servicios guardan archivos, pero no generan prueba criptográfica de integridad. Si la contraparte impugna tu evidencia, no tienes defensa técnica. ALETHEIA genera un hash, una firma del custodio y un sello de tiempo de tercero que cualquier perito puede verificar de forma independiente.",
  },
  {
    q: "¿Necesito saber de criptografía para usarlo?",
    a: "No. El pipeline es completamente transparente para ti: cargas el archivo, completas la declaración de custodio y el sistema hace el resto. En pantalla solo ves el estado de integridad de cada evidencia, no los algoritmos.",
  },
  {
    q: "¿Cómo verifica un juez la integridad sin entrar al sistema?",
    a: "Recibe el archivo original y el certificado PDF. Calcula el SHA-256 con cualquier herramienta estándar (OpenSSL, sha256sum, PowerShell) y lo compara con el del certificado. Si coinciden, el archivo no fue alterado. El certificado incluye además un código QR hacia la verificación pública.",
  },
  {
    q: "¿ALETHEIA certifica que mi evidencia es auténtica desde el origen?",
    a: "No, y esta honestidad es clave. Certifica que el archivo no ha sido alterado desde el instante de su ingreso al sistema, no antes. La declaración firmada del custodio y los metadatos reducen la brecha previa, sólida para los estándares del Art. 244 del CGP.",
  },
  {
    q: "¿Qué pasa si olvido mi contraseña?",
    a: "La contraseña se resetea normalmente. Tu clave privada ECDSA está protegida con un esquema umbral (Shamir 2 de 3): se reparte cifrada entre los administradores del despacho, de modo que nunca pierdes la verificabilidad de autoría.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. La facturación es mensual y se cancela desde tu cuenta. Tras cancelar tienes 30 días para exportar todo. Los certificados ya emitidos son permanentes y no dependen de que tengas cuenta activa.",
  },
  {
    q: "¿Cumple con la ley colombiana?",
    a: 'Está diseñado sobre la Ley 527 de 1999, el Art. 244 del Código General del Proceso y el Decreto 2364 de 2012. El método de preservación cumple los requisitos de "método confiable" que exige la jurisprudencia para la admisibilidad probatoria.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className={`section ${styles.faq}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2 className={styles.title}>Lo que un despacho necesita saber</h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className={styles.list}>
            {QA.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
                >
                  <button
                    className={styles.q}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </button>
                  <div
                    className={styles.aWrap}
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className={styles.aInner}>
                      <p className={styles.a}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
