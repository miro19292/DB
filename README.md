# 📚 Онлайн Книжарница (MongoDB Проект)

## 🗂️ Описание на базата данни

Проектът моделира онлайн книжарница с възможности за управление на книги, автори, клиенти, поръчки и рецензии. Базата данни е подходяща за реален уеб магазин.

## 📁 Колекции

### `books`
Информация за книги:
- `title`: заглавие (string)
- `genre`: жанр (string)
- `price`: цена (number)
- `stock`: наличност (number)
- `authors`: масив от имена (array of strings)
- `published`: обект с година и издателство (object)
- `tags`: тагове (array)

### `authors`
Информация за автори:
- `name`, `birthYear`, `nationality`
- `books`: масив със заглавия
- `awards`: масив с награди

### `customers`
Информация за клиенти:
- `name`, `email`, `address` (object със street, city, zip)
- `orders`: масив от референции (по имейл или ID)

### `orders`
Детайли на поръчките:
- `customerEmail`: имейл на клиента
- `date`: дата
- `items`: масив от книги с бройки
- `total`: обща цена
- `status`: статус

### `reviews`
Рецензии за книги:
- `bookTitle`, `customerEmail`, `rating`, `comment`, `date`

## 🛠️ Инсталация

1. Уверете се, че имате MongoDB инсталирана и пусната.
2. Стартирайте Mongo shell:
