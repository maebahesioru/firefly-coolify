FROM node:23-bookworm

# Install pnpm
RUN npm install -g pnpm@9

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml .npmrc ./

# Install dependencies (no frozen lockfile to allow platform-specific resolution)
RUN pnpm install

# Copy source
COPY . .

# Build
RUN pnpm run build

# Expose port
EXPOSE 4321

# Start with astro preview
CMD ["pnpm", "run", "preview", "--host", "0.0.0.0", "--allowed-hosts", "blog.hikamer.f5.si", "--port", "4321"]
