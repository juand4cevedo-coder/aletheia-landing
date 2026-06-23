import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import mark from "../../assets/logos/aletheia-mark.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <img
              src={mark}
              alt=""
              className={styles.mark}
              width={34}
              height={34}
            />
            <span className={styles.name}>ALETHEIA</span>
          </div>
          <p className={styles.tagline}>Evidencia íntegra. Verdad innegable.</p>
          <p className={styles.loc}>Medellín, Colombia · aletheia.sbs</p>
        </div>

        <nav className={styles.col} aria-label="Producto">
          <h3 className={styles.colTitle}>Producto</h3>
          <a href="#pipeline">Cómo funciona</a>
          <a href="#demo">Demo en vivo</a>
          <a href="#planes">Planes y precios</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>

        <nav className={styles.col} aria-label="Legal">
          <h3 className={styles.colTitle}>Legal</h3>
          <Link to="/acceso">Términos</Link>
          <Link to="/acceso">Privacidad</Link>
          <Link to="/acceso">Documentación</Link>
        </nav>

        <div className={styles.col}>
          <h3 className={styles.colTitle}>Contacto</h3>
          <a href="mailto:informacion@aletheia.sbs">informacion@aletheia.sbs</a>
          <p className={styles.small}>
            Respuesta en menos de 48&nbsp;h hábiles.
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} ALETHEIA. Todos los derechos reservados.</span>
        <span className={styles.muted}>aletheia.sbs</span>
      </div>
    </footer>
  );
}
