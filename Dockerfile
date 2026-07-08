FROM node:23-bookworm

RUN apt-get update && apt-get install -y --no-install-recommends libvips-dev build-essential python3 && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@9

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc ./

RUN pnpm install

RUN npm rebuild --build-from-source sharp

# Copy source
COPY . .

# Build
RUN pnpm run build

# Expose port
EXPOSE 4321

# Start with astro preview
CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--allowed-hosts", "blog.hikamer.f5.si", "--port", "4321"]
