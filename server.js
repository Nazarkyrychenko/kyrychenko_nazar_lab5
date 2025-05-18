var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let books = [
	{ id: 1, title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopian' },
	{ id: 2, title: 'Project Hail Mary', author: 'Andy Weir', year: 2021, genre: 'Science Fiction' },
	{ id: 3, title: 'The Midnight Library', author: 'Matt Haig', year: 2020, genre: 'Fantasy' },
	{ id: 4, title: 'Verity', author: 'Colleen Hoover', year: 2018, genre: 'Thriller' },
	{ id: 5, title: 'Darkly Dreaming Dexter', author: 'Jeff Lindsay', year: 2004, genre: 'Crime Thriller' },
];

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/books', function (req, res) {
	res.send(books);
});

app.get('/books/:id', function (req, res) {
	var book = books.find(function (book) {
		return book.id === Number(req.params.id);
	});
	res.send(book);
});

app.get('/books/author/:author', function (req, res) {
	var author = req.params.author.toLowerCase();
	var results = books.filter(function (book) {
		return book.author.toLowerCase().includes(author);
	});
	res.send(results);
});

app.get('/books/genre/:genre', function (req, res) {
	var genre = req.params.genre.toLowerCase();
	var results = books.filter(function (book) {
		return book.genre.toLowerCase() === genre;
	});
	res.send(results);
});

let users = [
	{ login: "is-32fiot-23-099", lastname: "Кириченко", firstname: "Назар", course: 2, group: "ІС-32" },
	{ login: "is-34f", lastname: "Ivahno", firstname: "Bohdan", course: 2, group: "ІС-34" }
];

app.get('/userdata/:login', function (req, res) {
	var login = req.params.login;
	var user = users.find(function (u) {
		return u.login === login;
	});
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ error: "Користувача з таким логіном не знайдено" });
	}
});

app.listen(3000, function () {
	console.log('порт: 3000');
});
