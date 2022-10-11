/* 
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},
	rememberMyFilm: function () {
		for (let i = 0; i < 2; i++) {
			let nameFilm = prompt('Какие последние фильмы вы посмотрели ?', '').trim();
			let markFilm = +prompt('Какую оценку дадите этому фильму ?', '');

			if (nameFilm != null && markFilm != 0 && nameFilm.length <= 50 && nameFilm != false && markFilm != false) {
				personalMovieDB.movies[nameFilm] = markFilm;
				console.log('Супер !');
			}
			else {
				i--;
			}

		}
	},
	detectPersonalLevel: function () {
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
	},
	showMyDB: function (hiden) {
		if (!hiden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat == true ){
			personalMovieDB.privat = false;
			return personalMovieDB.privat;
		} else {
			personalMovieDB.privat = true;
			return personalMovieDB.privat;
		}
	},
	writeYourGenres: function () {
		for (let i = 0; i < 3; i++) {
			const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

			if(genre == '' || genre == null){
				console.log('Ошибка');
				i--;
			}else {
				personalMovieDB.genres[i] = genre;	
			}
			personalMovieDB.genres.forEach((item, i) => {
				console.log(`Любимый жанр ${i + 1} - это ${item}`);
			});
			
		}
		
	},
};





































































