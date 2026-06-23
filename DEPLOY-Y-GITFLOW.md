# Guía de despliegue y Git Flow — ALETHEIA Landing

Esta guía te lleva de la mano, **sin asumir nada**, desde un proyecto en tu
computador hasta el sitio publicado en `https://aletheia.sbs`. Sigue los pasos
en orden. Cada bloque de código es un comando que copias y pegas en la terminal.

---

## 0. Antes de empezar (requisitos)

Necesitas instalado:

- **Git** → comprueba con `git --version`
- **Node.js 20+** → comprueba con `node --version`
- **pnpm** → si no lo tienes: `npm install -g pnpm`
- Una cuenta de **GitHub** (gratuita).

Configura tu identidad de Git una sola vez (usa tus datos reales):

```bash
git config --global user.name "Juan Diego Acevedo"
git config --global user.email "informacion@aletheia.sbs"
```

---

## 1. El modelo Git Flow, explicado simple

Git Flow es una forma ordenada de trabajar con ramas. Usaremos tres tipos:

| Rama          | Para qué sirve                                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| `main`        | La versión **estable y publicada**. Lo que está aquí es lo que ve el mundo. Nunca trabajas directo sobre ella. |
| `develop`     | La rama de **integración**. Aquí se juntan las funcionalidades terminadas antes de pasar a `main`.             |
| `feature/...` | Una rama **por cada cosa nueva** que construyes. Sale de `develop` y vuelve a `develop`.                       |

**La regla de oro:** nunca escribes código directamente en `main`. Trabajas en
una rama `feature/...`, la terminas, la integras en `develop`, y cuando `develop`
está probado, lo llevas a `main` — que es lo que dispara el despliegue.

---

## 2. Inicializar el repositorio local

Abre la terminal **dentro de la carpeta del proyecto** (`aletheia-landing/`) y:

```bash
git init                       # crea el repositorio
git branch -M main             # nombra la rama principal "main"
git add .                      # prepara todos los archivos
git commit -m "chore: estructura inicial del proyecto de la landing"
```

Crea ahora la rama de integración:

```bash
git checkout -b develop        # crea y se cambia a la rama develop
```

---

## 3. Crear el repositorio en GitHub y conectarlo

1. Entra a <https://github.com/new>.
2. **Repository name:** `aletheia-landing`
3. Déjalo **público** (necesario para GitHub Pages gratuito) y **NO** marques
   "Add a README" (ya tienes uno).
4. Clic en **Create repository**.
5. GitHub te muestra la URL del repo. Conéctalo (reemplaza `TU-USUARIO`):

```bash
git remote add origin https://github.com/TU-USUARIO/aletheia-landing.git
git push -u origin main        # sube main
git push -u origin develop     # sube develop
```

---

## 4. Activar GitHub Pages

1. En tu repo de GitHub ve a **Settings** (Configuración).
2. En el menú lateral, **Pages**.
3. En **Source** (Origen), elige **GitHub Actions**.

Listo. Como el proyecto ya incluye el workflow `.github/workflows/deploy.yml`,
**cada push a `main` compilará y publicará el sitio automáticamente**. No tienes
que hacer nada más aquí.

> El primer despliegue tarda 1–2 minutos. Míralo en la pestaña **Actions** del
> repo: cuando el job aparezca en verde, el sitio está arriba.

Mientras configuras el dominio propio, tu sitio estará disponible en:
`https://TU-USUARIO.github.io/aletheia-landing/`

---

## 5. Conectar el dominio aletheia.sbs (Hostinger)

El proyecto ya incluye el archivo `public/CNAME` con `aletheia.sbs`, así que
GitHub sabe qué dominio servir. Falta apuntar el dominio hacia GitHub.

### 5.1 En GitHub

1. **Settings → Pages → Custom domain**: escribe `aletheia.sbs` y guarda.
2. Más abajo, marca **Enforce HTTPS** (puede tardar unos minutos en habilitarse).

### 5.2 En Hostinger (panel de DNS)

Entra a Hostinger → tu dominio → **DNS / Nameservers** y crea estos registros:

| Tipo  | Nombre / Host | Valor / Apunta a       |
| ----- | ------------- | ---------------------- |
| A     | `@`           | `185.199.108.153`      |
| A     | `@`           | `185.199.109.153`      |
| A     | `@`           | `185.199.110.153`      |
| A     | `@`           | `185.199.111.153`      |
| CNAME | `www`         | `TU-USUARIO.github.io` |

> Esas cuatro IPs son las oficiales de GitHub Pages. El registro `CNAME` para
> `www` hace que `www.aletheia.sbs` también funcione.

La propagación del DNS puede tardar desde minutos hasta unas horas. Cuando
termine, `https://aletheia.sbs` mostrará tu landing con candado (HTTPS).

---

## 6. El flujo de trabajo diario (Git Flow en acción)

Cada vez que quieras cambiar o agregar algo, **no toques `main` ni `develop`
directamente**. Haz esto:

### 6.1 Crear una rama para la tarea

```bash
git checkout develop                       # parte siempre desde develop
git pull origin develop                    # asegúrate de tenerla al día
git checkout -b feature/seccion-precios    # crea la rama de la tarea
```

### 6.2 Trabajar y guardar avances con commits profesionales

Haz tus cambios en el código y guárdalos en commits pequeños y claros. Usamos
**Conventional Commits**: cada mensaje empieza con un tipo (`feat`, `fix`,
`style`, `docs`, `refactor`, `chore`) seguido de una descripción en presente.

```bash
git add src/sections/Pricing/
git commit -m "feat(pricing): agrega la tabla comparativa de los tres planes"

git add src/sections/Pricing/Pricing.module.css
git commit -m "style(pricing): resalta el plan profesional con borde de marca"
```

Ejemplos de buenos mensajes de commit para este proyecto:

```
feat(hero): añade animación de líneas diagonales en el fondo
feat(demo): calcula el hash de archivos arrastrados con Web Crypto
fix(header): corrige el menú móvil que no cerraba al navegar
style(tokens): ajusta la paleta a los colores reales del logo
docs(readme): documenta los comandos de ejecución local
refactor(reveal): extrae la lógica de scroll a un hook reutilizable
chore(deploy): configura el workflow de GitHub Pages
```

### 6.3 Subir la rama y terminar la tarea

```bash
git push -u origin feature/seccion-precios
```

Integra la tarea terminada en `develop`:

```bash
git checkout develop
git merge --no-ff feature/seccion-precios   # --no-ff conserva el historial de la rama
git push origin develop
```

(Opcional) borra la rama de la tarea una vez integrada:

```bash
git branch -d feature/seccion-precios
git push origin --delete feature/seccion-precios
```

### 6.4 Publicar: llevar develop a main

Cuando `develop` está probado y quieres que el mundo lo vea:

```bash
git checkout main
git merge --no-ff develop -m "release: publica la versión con la sección de precios"
git push origin main
```

Ese último `push origin main` **dispara automáticamente el despliegue**. En 1–2
minutos el cambio estará en `https://aletheia.sbs`.

---

## 7. Resumen en una imagen mental

```
feature/x ──┐
            ├─► develop ──► main ──► (GitHub Actions) ──► aletheia.sbs
feature/y ──┘
```

- Construyes en `feature/...`
- Integras en `develop`
- Publicas pasando `develop` a `main`
- El push a `main` despliega solo

---

## 8. Problemas frecuentes

| Síntoma                                   | Causa probable                            | Solución                                                         |
| ----------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------- |
| El sitio sale sin estilos / 404 en assets | El `base` de Vite no coincide con la ruta | Ya está resuelto: usamos `base: './'` (rutas relativas).         |
| Al refrescar una ruta interna da 404      | El servidor no reescribe rutas            | Ya está resuelto: usamos `HashRouter`.                           |
| El dominio no carga aún                   | El DNS todavía propaga                    | Espera; puede tardar horas. Verifica los registros A.            |
| El workflow falla en "Install"            | Falta el `pnpm-lock.yaml` en el repo      | Asegúrate de haber subido ese archivo (no está en `.gitignore`). |

---

Hecho para ALETHEIA · Juan Diego Acevedo · SENA ADSO — Medellín
