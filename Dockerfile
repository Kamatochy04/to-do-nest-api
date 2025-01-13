# Используем официальный Node.js образ в качестве базового
FROM node:14

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Указываем команду для запуска приложения
CMD ["npm", "run", "start:prod"]

# Указываем порт, который будет использоваться приложением
EXPOSE 3000
