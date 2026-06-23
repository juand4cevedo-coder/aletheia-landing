import { useEffect, useRef, useState } from "react";
import styles from "./ShaDemo.module.css";
import { hashText, hashFile } from "../../lib/sha256";
import { Reveal } from "../../components/ui/Reveal";
import {
  IconHash,
  IconUpload,
  IconCheck,
  IconAlert,
  IconLock,
} from "../../components/ui/Icon";

type Mode = "text" | "file";

export function ShaDemo() {
  const [mode, setMode] = useState<Mode>("text");
  const [text, setText] = useState("Contrato de arrendamiento — Cláusula 4.2");
  const [hash, setHash] = useState("");
  const [baseline, setBaseline] = useState(""); // hash de referencia para comparar
  const [fileName, setFileName] = useState("");
  const [drag, setDrag] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Recalcula el hash del texto en cada cambio (efecto avalancha visible)
  useEffect(() => {
    if (mode !== "text") return;
    let alive = true;
    hashText(text).then((h) => {
      if (alive) setHash(h);
    });
    return () => {
      alive = false;
    };
  }, [text, mode]);

  // Fija el primer hash como "línea base" para comparar integridad
  useEffect(() => {
    if (hash && !baseline) setBaseline(hash);
  }, [hash, baseline]);

  async function onFile(file?: File | null) {
    if (!file) return;
    setMode("file");
    setFileName(`${file.name} · ${(file.size / 1024).toFixed(1)} KB`);
    const h = await hashFile(file);
    setHash(h);
    setBaseline(h);
  }

  function copy() {
    navigator.clipboard?.writeText(hash).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  const intact = !!baseline && hash === baseline;

  return (
    <section id="demo" className={`section ${styles.demo}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">Demostración en vivo</span>
            <h2 className={styles.title}>
              Comprueba tú mismo el efecto avalancha
            </h2>
            <p className={styles.lead}>
              Escribe un texto o suelta un archivo. ALETHEIA calcula su huella
              SHA-256
              <strong> en tu propio navegador</strong>, sin enviar nada a ningún
              servidor. Cambia un solo carácter y observa cómo la huella se
              transforma por completo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className={styles.card}>
            <div className={styles.tabs} role="tablist">
              <button
                role="tab"
                aria-selected={mode === "text"}
                className={`${styles.tab} ${mode === "text" ? styles.active : ""}`}
                onClick={() => {
                  setMode("text");
                  setBaseline("");
                }}
              >
                <IconHash size={16} /> Texto
              </button>
              <button
                role="tab"
                aria-selected={mode === "file"}
                className={`${styles.tab} ${mode === "file" ? styles.active : ""}`}
                onClick={() => setMode("file")}
              >
                <IconUpload size={16} /> Archivo
              </button>
            </div>

            {mode === "text" ? (
              <textarea
                className={styles.input}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                aria-label="Texto a firmar"
                spellCheck={false}
              />
            ) : (
              <div
                className={`${styles.drop} ${drag ? styles.dragging : ""}`}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDrag(true);
                }}
                onDragLeave={() => setDrag(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDrag(false);
                  onFile(e.dataTransfer.files?.[0]);
                }}
                onClick={() => inputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && inputRef.current?.click()
                }
              >
                <IconUpload size={28} />
                <p>
                  {fileName ||
                    "Arrastra un archivo aquí o haz clic para seleccionarlo"}
                </p>
                <span className={styles.dropHint}>
                  <IconLock size={13} /> El archivo no sale de tu dispositivo
                </span>
                <input
                  ref={inputRef}
                  type="file"
                  hidden
                  onChange={(e) => onFile(e.target.files?.[0])}
                />
              </div>
            )}

            <div className={styles.result}>
              <div className={styles.resultHead}>
                <span className={styles.resultLabel}>Huella SHA-256</span>
                <span
                  className={`${styles.status} ${intact ? styles.ok : styles.changed}`}
                >
                  {intact ? (
                    <>
                      <IconCheck size={14} /> Coincide con la base
                    </>
                  ) : (
                    <>
                      <IconAlert size={14} /> Huella modificada
                    </>
                  )}
                </span>
              </div>
              <code className={`mono ${styles.hash}`}>{hash || "—"}</code>
              <button
                className={styles.copy}
                onClick={copy}
                aria-label="Copiar huella"
              >
                {copied ? "Copiado ✓" : "Copiar"}
              </button>
            </div>

            <p className={styles.note}>
              Esta huella es la identidad digital del contenido. Si cambia un
              solo bit, la huella cambia por completo: así es como ALETHEIA
              detecta cualquier alteración.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
