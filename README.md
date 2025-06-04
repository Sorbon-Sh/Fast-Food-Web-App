# 🍕 Fast Food Web App — Аналог сайта Dodo Pizza

Интерфейс веб-приложения для онлайн-заказа еды, вдохновлённый дизайном Dodo Pizza. Проект демонстрирует современные подходы к разработке UI с использованием React, Vite, Tailwind CSS, Redux и Supabase.

---

## ⚙️ Используемые технологии

### 🔧 Библиотеки и фреймворки

- **React 18** — интерфейс
- **Vite** — быстрый сборщик проекта
- **TypeScript** — строгая типизация
- **Tailwind CSS** — утилитарный CSS
- **React Router v6** — маршрутизация
- **Redux Toolkit + React-Redux** — управление глобальным состоянием
- **Supabase JS** — взаимодействие с базой данных и авторизация
- **React Hook Form** — управление формами
- **Ant Design (antd)** — UI-компоненты
- **React Hot Toast** — уведомления
- **Prettier + Tailwind плагин** — автоформатирование
- **ESLint + TypeScript ESLint** — анализ и проверка кода

### 🎠 Слайдеры и карусели

- `react-multi-carousel`

---

## 🚀 Быстрый старт

### Установка зависимостей

```bash
pnpm install
```

### Запуск в режиме разработки

```bash
pnpm dev
```


### Сборка для продакшена

```bash
pnpm build
```

### Предпросмотр продакшн-сборки

```bash
pnpm preview
```

---

## 📁 Структура проекта

```bash
Fast-Food-Web-App/
├── public/                       # Публичные файлы
│   └── index.html
│
├── src/
│   ├── assets/                   # Изображения и медиа
│   ├── components/               # Переиспользуемые UI-компоненты
│   │   ├── Header.tsx
│   │   ├── ProductCard.tsx
│   │   └── ...
│   ├── hooks/                    # Кастомные хуки
│   │   └── useFetchProducts.ts
│   ├── layouts/                  # Макеты страниц
│   │   └── MainLayout.tsx
│   ├── lib/                      # Подключение внешних сервисов (напр. Supabase)
│   │   └── supabase.ts
│   ├── pages/                    # Страницы приложения
│   │   ├── Home.tsx
│   │   ├── Menu.tsx
│   │   └── ...
│   ├── styles/                   # Tailwind и глобальные стили
│   │   └── index.css
│   ├── types/                    # Общие типы TypeScript
│   │   └── index.ts
│   ├── utils/                    # Вспомогательные функции
│   │   └── formatPrice.ts
│   ├── App.tsx                   # Главный компонент приложения
│   └── main.tsx                  # Точка входа
│
├── .eslintrc.cjs                 # Настройки ESLint
├── .prettierrc                   # Настройки Prettier
├── tailwind.config.js            # Конфигурация Tailwind CSS
├── tsconfig.json                 # Настройки TypeScript
├── vite.config.ts                # Конфигурация Vite
└── package.json                  # Скрипты и зависимости
```

---

## 🎯 Возможности

- Просмотр товаров (например, пицца, напитки)
- Слайдеры и карусели для продуктов
- UI с использованием Tailwind и Ant Design
- Валидация форм с React Hook Form
- Интерактивный, адаптивный интерфейс
- Интеграция Supabase (база данных)


---


## 🧪 Линтинг и форматирование

- `pnpm lint` — запуск ESLint
- Prettier настроен с Tailwind CSS плагином

---

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Используй свободно — с указанием авторства.

---

