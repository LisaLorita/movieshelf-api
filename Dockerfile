# Usa una imagen base de Node.js con soporte para TypeScript
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Usa el comando para iniciar la aplicación (en modo dev con nodemon)
CMD ["npm", "run", "dev"]