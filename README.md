1. GET /books – Повертає всі книги
Відповідь:
Масив об’єктів, кожен з яких має поля:

id: число

title: рядок

author: рядок

year: число

genre: рядок

Приклад:
[
{
"id": 1,
"title": "1984",
"author": "George Orwell",
"year": 1949,
"genre": "Dystopian"
},
{
"id": 2,
"title": "Dune",
"author": "Frank Herbert",
"year": 1965,
"genre": "Fantasy"
}
...
]

2. GET /books/:id – Повертає одну книгу за її ID
Відповідь:
Об’єкт з полями:

id: число

title: рядок

author: рядок

year: число

genre: рядок

3. GET /books/author/:author – Повертає книги за автором
Відповідь:
Масив об’єктів з книгами, аналогічно до відповіді GET /books.

4. GET /books/genre/:genre – Повертає книги за жанром
Відповідь:
Масив об’єктів з книгами, аналогічно до відповіді GET /books.


