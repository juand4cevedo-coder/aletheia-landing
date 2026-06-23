# ---------- Etapa 1: build ----------
# Compilamos la landing con Node + pnpm y obtenemos la carpeta dist/.
FROM node:20-alpine AS build
WORKDIR /app

# pnpm viene incluido vía corepack en las imágenes node modernas
RUN corepack enable

# Copiamos solo los manifiestos primero para aprovechar la caché de capas
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiamos el resto del código y compilamos
COPY . .
RUN pnpm build

# ---------- Etapa 2: runtime ----------
# Imagen final minúscula: solo nginx sirviendo los archivos estáticos.
FROM nginx:1.27-alpine AS runtime

# Configuración de nginx pensada para una SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos el resultado del build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK CMD wget -q --spider http://localhost/ || exit 1
CMD ["nginx", "-g", "daemon off;"]