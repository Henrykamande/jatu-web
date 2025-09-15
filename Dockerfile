# ---- build stage ----
FROM node:16.20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --production=false

COPY . .
# no NODE_OPTIONS here
RUN npm run build

# ---- runtime stage ----
FROM node:16.20-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

# Copy runtime artifacts
COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/static ./static
COPY --from=build /app/nuxt.config.js ./nuxt.config.js

EXPOSE 3000
CMD ["npx", "nuxt", "start", "-p", "3000", "-H", "0.0.0.0"]
