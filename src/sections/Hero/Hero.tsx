import styles from "./Hero.module.css";
import mark from "../../assets/logos/aletheia-mark.png";
import { Button } from "../../components/ui/Button";
import { IconArrow, IconShield } from "../../components/ui/Icon";

/** Sección Hero: una idea por pantalla (principio Apple), todo centrado. */
export function Hero() {
  return (
    <section className={styles.hero}>
      {/* capa de líneas diagonales animadas, decorativa y muy sutil */}
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Lockup de marca: isotipo + wordmark, siempre presentes */}
        <div className={styles.brand}>
          <img
            src={mark}
            alt=""
            className={styles.mark}
            width={72}
            height={72}
          />
          <span className={styles.wordmark}>ALETHEIA</span>
        </div>

        <span className={styles.badge}>
          <IconShield size={15} /> Integridad criptográfica verificable
        </span>

        <h1 className={styles.title}>
          Evidencia íntegra.
          <br />
          <span className={styles.accent}>Verdad innegable.</span>
        </h1>

        <p className={styles.sub}>
          Preservación criptográfica de evidencia digital para despachos
          jurídicos en Colombia. Verificable por cualquier juez o perito, sin
          necesidad de acceder al sistema.
        </p>

        <div className={styles.actions}>
          <Button to="/acceso" variant="primary">
            Comenzar gratis <IconArrow size={18} />
          </Button>
          <Button href="#demo" variant="ghost">
            Ver demo en vivo
          </Button>
        </div>

        {/* Tres pilares, en una tarjeta centrada con separadores claros */}
        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt>SHA-256</dt>
            <dd>Huella única por archivo</dd>
          </div>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <dt>ECDSA</dt>
            <dd>Firma del custodio</dd>
          </div>
          <span className={styles.divider} aria-hidden="true" />
          <div className={styles.stat}>
            <dt>RFC 3161</dt>
            <dd>Sello de tiempo de tercero</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
