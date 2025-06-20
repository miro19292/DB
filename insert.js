// Създаване и избор на база данни
use onlineBookstore;

/* ------------------------ Колекция: books ------------------------ */
db.books.insertMany([
  {
    title: "The Pragmatic Programmer",
    genre: "Programming",
    price: 45.00,
    stock: 12,
    authors: ["Andrew Hunt", "David Thomas"],
    published: { year: 1999, publisher: "Addison-Wesley" },
    tags: ["software", "development"]
  },
  {
    title: "Clean Code",
    genre: "Programming",
    price: 50.00,
    stock: 8,
    authors: ["Robert C. Martin"],
    published: { year: 2008, publisher: "Prentice Hall" },
    tags: ["best practices", "clean"]
  },
  {
    title: "Atomic Habits",
    genre: "Self-help",
    price: 30.00,
    stock: 20,
    authors: ["James Clear"],
    published: { year: 2018, publisher: "Penguin" },
    tags: ["productivity", "habits"]
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    price: 25.00,
    stock: 15,
    authors: ["J.R.R. Tolkien"],
    published: { year: 1937, publisher: "George Allen & Unwin" },
    tags: ["adventure", "classic"]
  },
  {
    title: "1984",
    genre: "Dystopian",
    price: 18.00,
    stock: 9,
    authors: ["George Orwell"],
    published: { year: 1949, publisher: "Secker & Warburg" },
    tags: ["politics", "totalitarianism"]
  },
  {
    title: "Sapiens",
    genre: "History",
    price: 35.00,
    stock: 7,
    authors: ["Yuval Noah Harari"],
    published: { year: 2011, publisher: "Harvill Secker" },
    tags: ["civilization", "anthropology"]
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    price: 40.00,
    stock: 10,
    authors: ["Eric Ries"],
    published: { year: 2011, publisher: "Crown Business" },
    tags: ["entrepreneurship", "startup"]
  },
  {
    title: "Thinking, Fast and Slow",
    genre: "Psychology",
    price: 38.00,
    stock: 13,
    authors: ["Daniel Kahneman"],
    published: { year: 2011, publisher: "Farrar, Straus and Giroux" },
    tags: ["cognitive", "bias"]
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    price: 22.00,
    stock: 14,
    authors: ["Harper Lee"],
    published: { year: 1960, publisher: "J. B. Lippincott & Co." },
    tags: ["justice", "racism"]
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    price: 28.00,
    stock: 18,
    authors: ["J.K. Rowling"],
    published: { year: 1997, publisher: "Bloomsbury" },
    tags: ["magic", "adventure"]
  }
]);

/* ------------------------ Колекция: authors ------------------------ */
db.authors.insertMany([
  { name: "Andrew Hunt", birthYear: 1964, nationality: "American", books: ["The Pragmatic Programmer"], awards: ["Jolt Award"] },
  { name: "David Thomas", birthYear: 1965, nationality: "American", books: ["The Pragmatic Programmer"], awards: [] },
  { name: "Robert C. Martin", birthYear: 1952, nationality: "American", books: ["Clean Code"], awards: ["Software Craftsmanship Award"] },
  { name: "James Clear", birthYear: 1986, nationality: "American", books: ["Atomic Habits"], awards: [] },
  { name: "J.R.R. Tolkien", birthYear: 1892, nationality: "British", books: ["The Hobbit"], awards: ["International Fantasy Award"] },
  { name: "George Orwell", birthYear: 1903, nationality: "British", books: ["1984"], awards: [] },
  { name: "Yuval Noah Harari", birthYear: 1976, nationality: "Israeli", books: ["Sapiens"], awards: [] },
  { name: "Eric Ries", birthYear: 1978, nationality: "American", books: ["The Lean Startup"], awards: [] },
  { name: "Daniel Kahneman", birthYear: 1934, nationality: "Israeli-American", books: ["Thinking, Fast and Slow"], awards: ["Nobel Prize in Economics"] },
  { name: "Harper Lee", birthYear: 1926, nationality: "American", books: ["To Kill a Mockingbird"], awards: ["Pulitzer Prize"] }
]);

/* ------------------------ Колекция: customers ------------------------ */
db.customers.insertMany([
  { name: "Ivan Petrov", email: "ivan@abv.bg", address: { street: "Bulgaria Blvd. 12", city: "Sofia", zip: "1000" }, orders: [] },
  { name: "Maria Ivanova", email: "maria@gmail.com", address: { street: "Vitosha 5", city: "Sofia", zip: "1000" }, orders: [] },
  { name: "Georgi Georgiev", email: "georgi@yahoo.com", address: { street: "Shipka 2", city: "Plovdiv", zip: "4000" }, orders: [] },
  { name: "Elena Nikolova", email: "elena@abv.bg", address: { street: "Tzar Simeon 23", city: "Varna", zip: "9000" }, orders: [] },
  { name: "Petar Dimitrov", email: "petar@gmail.com", address: { street: "Dondukov 77", city: "Ruse", zip: "7000" }, orders: [] },
  { name: "Desislava Todorova", email: "d.todorova@gmail.com", address: { street: "Patriarh Evtimii 11", city: "Burgas", zip: "8000" }, orders: [] },
  { name: "Todor Stoyanov", email: "t.stoyanov@outlook.com", address: { street: "Lom 33", city: "Pleven", zip: "5800" }, orders: [] },
  { name: "Nina Petrova", email: "nina.petrova@abv.bg", address: { street: "Rakovski 14", city: "Sofia", zip: "1000" }, orders: [] },
  { name: "Kiril Ivanov", email: "k.ivanov@gmail.com", address: { street: "Trakia 4", city: "Stara Zagora", zip: "6000" }, orders: [] },
  { name: "Albena Kostova", email: "albena.k@dir.bg", address: { street: "Slivnitsa 8", city: "Blagoevgrad", zip: "2700" }, orders: [] }
]);

/* ------------------------ Колекция: orders ------------------------ */
db.orders.insertMany([
  {
    customerEmail: "ivan@abv.bg",
    date: new Date("2024-06-01"),
    items: [{ bookTitle: "The Pragmatic Programmer", quantity: 1 }],
    total: 45.00,
    status: "completed"
  },
  {
    customerEmail: "maria@gmail.com",
    date: new Date("2024-06-03"),
    items: [{ bookTitle: "Atomic Habits", quantity: 2 }],
    total: 60.00,
    status: "completed"
  },
  {
    customerEmail: "georgi@yahoo.com",
    date: new Date("2024-06-05"),
    items: [{ bookTitle: "1984", quantity: 1 }, { bookTitle: "Sapiens", quantity: 1 }],
    total: 53.00,
    status: "processing"
  },
  {
    customerEmail: "elena@abv.bg",
    date: new Date("2024-06-06"),
    items: [{ bookTitle: "The Lean Startup", quantity: 1 }],
    total: 40.00,
    status: "completed"
  },
  {
    customerEmail: "petar@gmail.com",
    date: new Date("2024-06-07"),
    items: [{ bookTitle: "The Hobbit", quantity: 2 }],
    total: 50.00,
    status: "shipped"
  },
  {
    customerEmail: "d.todorova@gmail.com",
    date: new Date("2024-06-08"),
    items: [{ bookTitle: "Clean Code", quantity: 1 }],
    total: 50.00,
    status: "processing"
  },
  {
    customerEmail: "t.stoyanov@outlook.com",
    date: new Date("2024-06-09"),
    items: [{ bookTitle: "Harry Potter and the Sorcerer's Stone", quantity: 1 }],
    total: 28.00,
    status: "completed"
  },
  {
    customerEmail: "nina.petrova@abv.bg",
    date: new Date("2024-06-10"),
    items: [{ bookTitle: "Thinking, Fast and Slow", quantity: 1 }],
    total: 38.00,
    status: "pending"
  },
  {
    customerEmail: "k.ivanov@gmail.com",
    date: new Date("2024-06-11"),
    items: [{ bookTitle: "Sapiens", quantity: 1 }],
    total: 35.00,
    status: "completed"
  },
  {
    customerEmail: "albena.k@dir.bg",
    date: new Date("2024-06-12"),
    items: [{ bookTitle: "To Kill a Mockingbird", quantity: 1 }],
    total: 22.00,
    status: "cancelled"
  }
]);

/* ------------------------ Колекция: reviews ------------------------ */
db.reviews.insertMany([
  { bookTitle: "The Pragmatic Programmer", customerEmail: "ivan@abv.bg", rating: 5, comment: "Very helpful!", date: new Date("2024-06-02") },
  { bookTitle: "Atomic Habits", customerEmail: "maria@gmail.com", rating: 4, comment: "Great advice.", date: new Date("2024-06-04") },
  { bookTitle: "1984", customerEmail: "georgi@yahoo.com", rating: 5, comment: "Timeless!", date: new Date("2024-06-05") },
  { bookTitle: "Sapiens", customerEmail: "georgi@yahoo.com", rating: 4, comment: "Very insightful.", date: new Date("2024-06-05") },
  { bookTitle: "The Lean Startup", customerEmail: "elena@abv.bg", rating: 3, comment: "Too repetitive.", date: new Date("2024-06-06") },
  { bookTitle: "The Hobbit", customerEmail: "petar@gmail.com", rating: 5, comment: "Loved it!", date: new Date("2024-06-07") },
  { bookTitle: "Clean Code", customerEmail: "d.todorova@gmail.com", rating: 5, comment: "Must-read for devs.", date: new Date("2024-06-08") },
  { bookTitle: "Harry Potter and the Sorcerer's Stone", customerEmail: "t.stoyanov@outlook.com", rating: 4, comment: "Magical!", date: new Date("2024-06-09") },
  { bookTitle: "Thinking, Fast and Slow", customerEmail: "nina.petrova@abv.bg", rating: 3, comment: "Challenging read.", date: new Date("2024-06-10") },
  { bookTitle: "To Kill a Mockingbird", customerEmail: "albena.k@dir.bg", rating: 5, comment: "Powerful message.", date: new Date("2024-06-12") }
]);
