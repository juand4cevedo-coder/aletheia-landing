import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logos/aletheia-logo-full.png";
import { Button } from "../ui/Button";
import { IconMenu, IconClose } from "../ui/Icon";

const NAV = [
  { label: "El problema", href: "#problema" },
  { label: "Cómo funciona", href: "#pipeline" },
  { label: "Demo", href: "#demo" },
  { label: "Planes", href: "#planes" },
  { label: "Preguntas", href: "#faq" },
];

/** Cabecera fija. Se vuelve sólida al hacer scroll (microinteracción). */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.solid : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.brand} aria-label="ALETHEIA — inicio">
          <img
            src={logo}
            alt="ALETHEIA"
            className={styles.logo}
            width={148}
            height={40}
          />
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button to="/acceso" variant="ghost">
            Acceder
          </Button>
          <Button to="/acceso" variant="primary">
            Comenzar gratis
          </Button>
        </div>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <div className={styles.mobile}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <Button to="/acceso" variant="secondary" full>
              Acceder
            </Button>
            <Button to="/acceso" variant="primary" full>
              Comenzar gratis
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
