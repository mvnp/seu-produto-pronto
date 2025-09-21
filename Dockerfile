# Etapa de build (para compilar dependências, se tiver)
FROM node:24-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia apenas arquivos de dependência
COPY package*.json ./

# Instala dependências
RUN npm ci --omit=dev

# Copia o restante do código
COPY . .

# Etapa final (imagem enxuta)
FROM node:24-alpine AS runner

WORKDIR /app

# Copia dependências já instaladas da etapa anterior
COPY --from=builder /app /app

# Expõe a porta que o Node vai rodar
EXPOSE 3000

# Define variável de ambiente padrão
ENV NODE_ENV=production
ENV PORT=3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]