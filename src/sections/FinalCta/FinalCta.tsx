import styles from "./FinalCta.module.css";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { IconArrow } from "../../components/ui/Icon";

export function FinalCta() {
  return (
    <section className={styles.cta}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <Reveal>
          <div className={styles.inner}>
            <h2 className={styles.title}>Tu próxima audiencia empieza hoy.</h2>
            <p className={styles.sub}>
              Crea tu cuenta gratuita y preserva tu primera evidencia con valor
              probatorio en menos de cinco minutos. Sin tarjeta de crédito.
            </p>
            <div className={styles.actions}>
              <Button to="/acceso" variant="primary">
                Crear cuenta gratuita <IconArrow size={18} />
              </Button>
              <Button href="#demo" variant="ghost">
                Probar la demo
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
