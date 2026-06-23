import styles from "./Pricing.module.css";
import { Reveal } from "../../components/ui/Reveal";
import { Button } from "../../components/ui/Button";
import { IconCheck } from "../../components/ui/Icon";

const PLANS = [
  {
    name: "Esencial",
    price: "29.000",
    period: "/mes",
    note: "Para el abogado independiente.",
    features: [
      "1 usuario",
      "Hasta 5 casos activos",
      "20 evidencias por caso",
      "2 GB de almacenamiento",
      "Pipeline criptográfico completo",
      "Certificados PDF verificables",
    ],
    featured: false,
  },
  {
    name: "Profesional",
    price: "79.000",
    period: "/mes",
    note: "Para despachos en crecimiento.",
    features: [
      "Hasta 3 usuarios",
      "Hasta 25 casos activos",
      "100 evidencias por caso",
      "20 GB de almacenamiento",
      "Analista forense externo (2/caso)",
      "Modo captura asistida",
    ],
    featured: true,
  },
  {
    name: "Despacho",
    price: "189.000",
    period: "/mes",
    note: "Para operación a escala.",
    features: [
      "Hasta 10 usuarios",
      "Casos activos ilimitados",
      "Evidencias ilimitadas",
      "100 GB de almacenamiento",
      "Analistas externos ilimitados",
      "Soporte prioritario por chat",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="planes" className={`section ${styles.pricing}`}>
      <div className="container">
        <Reveal>
          <div className="sectionHead">
            <span className="eyebrow">Planes y precios</span>
            <h2 className={styles.title}>Profesional, sin ser inaccesible</h2>
            <p className={styles.lead}>
              Precios en pesos colombianos. El plan Esencial cuesta menos que un
              almuerzo semanal. Todos incluyen 14 días de prueba, sin tarjeta de
              crédito.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 90}>
              <article
                className={`${styles.card} ${plan.featured ? styles.featured : ""}`}
              >
                {plan.featured && (
                  <span className={styles.ribbon}>Más elegido</span>
                )}
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.note}>{plan.note}</p>
                <p className={styles.price}>
                  <span className={styles.currency}>$</span>
                  {plan.price}
                  <span className={styles.period}>{plan.period}</span>
                </p>
                <ul className={styles.features}>
                  {plan.features.map((f) => (
                    <li key={f}>
                      <IconCheck size={16} /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  to="/acceso"
                  variant={plan.featured ? "primary" : "secondary"}
                  full
                >
                  Comenzar prueba
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
