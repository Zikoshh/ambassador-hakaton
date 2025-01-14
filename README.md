CRM Hakaton

# ХАКАТОН+. Задача Амбассадоров Яндекс Практикума

## Описание
*Это web приложение позволяет управлять сообществом амбассадоров Яндекс Практикума, которое будет приносить прогнозиуремый поток маркетинговых привлечений в месяц.*


## Применяемые технологии
* CSS
* HTML
* Флэкс верстка
* Грид верстка
* Псевдоклассы в CSS
* Создана файловая структура по БЭМ (Nested).
* Использован JS для открытия и закрытия попап окон, создание, удаление карточек.
* Валидация с помощью JS.
* ООП, JS разбит на модули
* Material UI
* API
* React
* React routing
* Сделана регистрация и авторизация пользователей

## Разработчики
* [Станислав Угланов](https://github.com/levinnsk)
* [Евгений Зарянов](https://github.com/EvgenyZaryanov)
* [Дмитрий Данильченко](https://github.com/DimaDanilchenko)

## Доработки в следующем релизе
* Модуль настройки
* Модуль аналитики
* Модуль задач

## Доступ ##
* [Адрес сайта: https://http://185.23.236.21/](http://185.23.236.21/)

# Инструкция по запуску, разработке и сборке

## Подготовка рабочего места:
1. Скачать и установить node js версии 21.x.x  [по ссылке https://nodejs.org/en](https://nodejs.org/en).
2. Скачать и установить Visual Studio Code [по ссылке https://code.visualstudio.com/](https://code.visualstudio.com/).
3. В Visual Studio Code установить плагины: 
* ESLint
* Prettier - Code formatter

4. Создать папку на диске, например ambassador_crm.
5. В Visual Studio Code открыть папку ambassador_crm и открыть командную строку (сочетание клавиш Ctrl + ~).
6. В командной строке выполнить команду
```bash
npm install
```

## Запуск разработки:
1. В командной строке выполнить команду
```bash
npm run dev
```
2. [По ссылке http://localhost:5173/](http://localhost:5173/) откроется веб-приложение.
3. При необходимости внести изменения в код.

## Запуск сборки:
1. В командной строке выполнить команду
```bash
npm run build
```
2. В папке dist соберется рабочий пакет веб-приложения, который можно размещать на удаленном ресурсе.
