import { Link } from "react-router-dom";
import styles from "./UnderConstruction.module.css";
import mark from "../../assets/logos/aletheia-mark.png";
import { IconArrow, IconLock } from "../../components/ui/Icon";

/**
 * Página "en construcción" para la zona de acceso (/acceso).
 * Es la página a la que llevan los botones "Acceder" y "Comenzar gratis"
 * mientras el dashboard del producto aún no está disponible.
 */
export function UnderConstruction() {
  return (
    <main className={styles.wrap}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.content}>
        <img
          src={mark}
          alt="ALETHEIA"
          className={styles.mark}
          width={84}
          height={84}
        />
        <span className={styles.badge}>
          <IconLock size={14} /> Acceso en preparación
        </span>
        <h1 className={styles.title}>
          Estamos construyendo
          <br /> tu espacio seguro.
        </h1>
        <p className={styles.sub}>
          La plataforma de ALETHEIA está en sus etapas finales de preparación.
          Muy pronto podrás registrar tu despacho y preservar evidencia con
          valor probatorio.
        </p>
        <p className={styles.contact}>
          ¿Quieres ser de los primeros? Escríbenos a{" "}
          <a href="mailto:informacion@aletheia.sbs">informacion@aletheia.sbs</a>
        </p>
        <Link to="/" className={styles.back}>
          Volver al inicio <IconArrow size={18} />
        </Link>
      </div>
    </main>
  );
}
