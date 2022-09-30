'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilm() {
	for (let i = 0; i < 2; i++) {
		let nameFilm = prompt('Какие последние фильмы вы посмотрели ?', '');
		let markFilm = +prompt('Какую оценку дадите этому фильму ?', '');

		if (nameFilm != null && markFilm != 0 && nameFilm.length <= 50 && nameFilm != false && markFilm != false) {
			personalMovieDB.movies[nameFilm] = markFilm;
			console.log('Супер !');
		}
		else {
			i--;
		}

	}
}

rememberMyFilm();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	}
	else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	}
	else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	}
	else {
		console.log('Произошла ошибка');
	}
}

detectPersonalLevel();

function showMyDB (hiden){
	if (!hiden){
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);


function writeYourGenres () {
	for (let i = 0; i < 3; i++) {
		const genre = prompt( `Ваш любимый жанр под номером ${i + 1}`);
		personalMovieDB.genres[i] = genre;
	}
	console.log(personalMovieDB);
}

writeYourGenres ();



тест


тест 2





































































