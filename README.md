<div align="center">

# ALETHEIA · Landing Page

**Evidencia íntegra. Verdad innegable.**

Preservación criptográfica de evidencia digital para despachos jurídicos en Colombia.

[![React](https://img.shields.io/badge/React-19-1C85BD?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-193459?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-1668A0?logo=vite&logoColor=white)](https://vite.dev)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-12172B)](https://github.com/css-modules/css-modules)

</div>

---

## ¿Qué es esto?

La **landing page pública** de ALETHEIA: el primer contacto de un abogado con el
producto. Comunica en segundos qué es, cómo funciona y cuánto cuesta, e incluye
una **demo interactiva de SHA-256** que se ejecuta por completo en el navegador.

Está construida con **React 19 + TypeScript + Vite** y **CSS Modules** (sin
frameworks de utilidades). El diseño respeta la identidad del logo: un degradado
cerúleo → navy que es la firma visual de la marca.

## Tecnologías

| Pieza    | Tecnología                | Por qué                                                          |
| -------- | ------------------------- | ---------------------------------------------------------------- |
| UI       | React 19                  | Componentes reutilizables y mantenibles.                         |
| Lenguaje | TypeScript                | Tipado estricto: menos errores en tiempo de ejecución.           |
| Bundler  | Vite 8                    | Arranque y recarga instantáneos; build optimizado.               |
| Estilos  | CSS Modules               | Estilos con alcance local por componente, sin choques de clases. |
| Rutas    | React Router (HashRouter) | Robusto en GitHub Pages, sin errores 404.                        |
| Hash     | Web Crypto API            | SHA-256 nativo del navegador, sin dependencias.                  |

## Estructura del proyecto

```
src/
├── assets/logos/        Logo e isotipo (PNG optimizados)
├── components/
│   ├── Header/          Cabecera fija con menú móvil
│   ├── Footer/          Pie de página
│   └── ui/              Piezas reutilizables: Button, Icon, Reveal
├── hooks/
│   └── useReveal.ts     Animación de entrada al hacer scroll (IntersectionObserver)
├── lib/
│   └── sha256.ts        Cálculo de SHA-256 en el navegador (texto y archivo)
├── pages/
│   ├── Landing.tsx      Ensambla las 9 secciones
│   └── UnderConstruction/   Página de la zona de acceso (/acceso)
├── sections/            Una carpeta por sección de la landing
│   ├── Hero/  Problem/  Pipeline/  ShaDemo/  Benefits/
│   └── Pricing/  Testimonials/  Faq/  FinalCta/
└── styles/
    ├── tokens.css       Design tokens (fuente única de verdad)
    ├── globals.css      Reset y estilos base
    └── layout.css       Utilidades de layout
```

## Cómo ejecutarlo en local

> Requiere [Node.js 20+](https://nodejs.org) y [pnpm](https://pnpm.io).

```bash
pnpm install     # instala dependencias
pnpm dev         # arranca el servidor de desarrollo (http://localhost:5173)
pnpm build       # compila a la carpeta dist/
pnpm preview     # sirve el build ya compilado para revisarlo
```

## Despliegue

El sitio se publica en **GitHub Pages** automáticamente con GitHub Actions cada
vez que se hace `push` a `main`. La guía completa, paso a paso y sin asumir nada,
está en **[`DEPLOY-Y-GITFLOW.md`](./DEPLOY-Y-GITFLOW.md)**.

Dominio de producción: **[aletheia.sbs](https://aletheia.sbs)**

### Con Docker (alternativa)

```bash
docker build -t aletheia-landing .
docker run -p 8080:80 aletheia-landing   # disponible en http://localhost:8080
```

## Seguridad y privacidad

- La demo calcula el SHA-256 **en tu dispositivo**: ningún archivo se envía a un servidor.
- Cabeceras de seguridad (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) en la configuración de nginx.
- Los secretos (`.env`) están excluidos del repositorio por `.gitignore`.

---

<div align="center">
Hecho por <strong>Juan Diego Acevedo</strong> · SENA ADSO — Medellín
</div>
