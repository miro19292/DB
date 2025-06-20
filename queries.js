use onlineBookstore;

/* ---------------------- Колекция: books ---------------------- */

// Извличане на всички книги
db.books.find();

// Филтриране по жанр
db.books.find({ genre: "Fantasy" });

// Филтриране по жанр и цена
db.books.find({ genre: "Programming", price: { $lt: 50 } });

// Актуализиране: Промяна на цената на една книга
db.books.updateOne(
  { title: "Clean Code" },
  { $set: { price: 48.00 } }
);

// Изтриване: Изтриване на книга с малък склад
db.books.deleteOne({ stock: { $lt: 10 } });

// Агрегиране: Брой книги по жанр
db.books.aggregate([
  { $group: { _id: "$genre", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } }
]);

/* ---------------------- Колекция: authors ---------------------- */

// Извличане на всички автори
db.authors.find();

// Филтриране по националност
db.authors.find({ nationality: "American" });

// Филтриране по година на раждане и националност
db.authors.find({ birthYear: { $lt: 1970 }, nationality: "American" });

// Актуализиране: Добавяне на награда към автор
db.authors.updateOne(
  { name: "James Clear" },
  { $push: { awards: "Goodreads Choice Award" } }
);

// Изтриване: Изтриване на автор без книги
db.authors.deleteOne({ books: { $size: 0 } });

// Агрегиране: Брой автори по националност
db.authors.aggregate([
  { $group: { _id: "$nationality", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

/* ---------------------- Колекция: customers ---------------------- */

// Извличане на всички клиенти
db.customers.find();

// Филтриране по град
db.customers.find({ "address.city": "Sofia" });

// Филтриране по имейл и пощенски код
db.customers.find({ email: /@gmail\.com$/, "address.zip": "1000" });

// Актуализиране: Промяна на адрес
db.customers.updateOne(
  { email: "ivan@abv.bg" },
  { $set: { "address.street": "Updated Street 99" } }
);

// Изтриване: Изтриване на клиент без имейл
db.customers.deleteOne({ email: null });

// Агрегиране: Брой клиенти по град
db.customers.aggregate([
  { $group: { _id: "$address.city", totalCustomers: { $sum: 1 } } },
  { $sort: { totalCustomers: -1 } }
]);

/* ---------------------- Колекция: orders ---------------------- */

// Извличане на всички поръчки
db.orders.find();

// Филтриране по статус
db.orders.find({ status: "completed" });

// Филтриране по имейл и сума
db.orders.find({ customerEmail: "georgi@yahoo.com", total: { $gt: 50 } });

// Актуализиране: Промяна на статус на поръчка
db.orders.updateOne(
  { customerEmail: "nina.petrova@abv.bg" },
  { $set: { status: "completed" } }
);

// Изтриване: Изтриване на отказана поръчка
db.orders.deleteOne({ status: "cancelled" });

// Агрегиране: Общо приходи по статус
db.orders.aggregate([
  { $group: { _id: "$status", totalRevenue: { $sum: "$total" } } },
  { $sort: { totalRevenue: -1 } }
]);

/* ---------------------- Колекция: reviews ---------------------- */

// Извличане на всички ревюта
db.reviews.find();

// Филтриране по оценка
db.reviews.find({ rating: 5 });

// Филтриране по книга и оценка
db.reviews.find({ bookTitle: "Sapiens", rating: { $gte: 4 } });

// Актуализиране: Промяна на коментар
db.reviews.updateOne(
  { customerEmail: "nina.petrova@abv.bg", bookTitle: "Thinking, Fast and Slow" },
  { $set: { comment: "Very thought-provoking book." } }
);

// Изтриване: Изтриване на ревю с ниска оценка
db.reviews.deleteOne({ rating: { $lt: 3 } });

// Агрегиране: Средна оценка по книга
db.reviews.aggregate([
  { $group: { _id: "$bookTitle", avgRating: { $avg: "$rating" } } },
  { $sort: { avgRating: -1 } }
]);
S