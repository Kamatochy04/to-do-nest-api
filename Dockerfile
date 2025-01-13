# Используем официальный Node.js образ в качестве базового
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем Prisma CLI
RUN npm install -g prisma

# Копируем все файлы в рабочую директорию
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Выполняем миграции Prisma
RUN npx prisma migrate deploy

# Указываем команду для запуска приложения
CMD ["npm", "run", "start:prod"]

# Указываем порт, который будет использоваться приложением
EXPOSE 3000
