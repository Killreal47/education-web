
'use strict';


// Задачи по Js

//__________________________________________________
//                19 УРОК

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// let personalMovieDB = {
// 	count : numberOfFilms,
// 	movies : {},
// 	actors: {},
// 	genres : [],
// 	privat : false
// };

// let onceFilm = prompt('Один из последних просмотренных фильмов?', '');
// let balsFilm = prompt('На сколько балов оцените его?', '');

// personalMovieDB.movies[onceFilm] = balsFilm ;

// console.log(personalMovieDB);

// 21 Урок Логические операторы
//____________________________________________________

// && - выводит первое ложное 
// || - выводит первое истинное false - если оба ложных; true - оба истинных

// console.log( NaN || 2 || undefined ); //2 +

// console.log( NaN && 2 && undefined ); // NaN +

// console.log( 1 && 2 && 3 ); // 3 +

// console.log( !1 && 2 || !3 ); // 2 - false

// console.log( 25 || null && !3 ); // 25 +

// console.log( NaN || null || !3 || undefined || 5); // 5 +

// console.log( NaN || null && !3 && undefined || 5); // 5 +

// console.log( 5 === 5 && 3 > 1 || 5); // true +

// console.log( !4 );


// 22, 23 Урок Циклы
//____________________________________________________

// let result = '';
// let lengt = 7 ;

// for (let i = 1; i < lengt; i++){
// 	for (let j = 0; j < i; j++){
// 		result += '*';
// 	}
// 	result += '\n';
// }

// console.log(result);



// function firstTask() {
// 	for (let i = 5; i <= 10; i++) {
// 		console.log(i);
// 	}

// }

// // Место для второй задачи
// function secondTask() {
// 	for (let i = 20; i >= 10; i--) {
// 		console.log(i);
// 		if (i === 13) {
// 			break;
// 		}
// 	}
// }

// // Место для третьей задачи
// function thirdTask() {
// 	for (let i = 2; i <= 10; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}


// }

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
// 	let i = 2;
// 	while (i <= 16) {
// 		if (i % 2 === 0) {
// 			continue;
// 		} else {
// 			console.log(i);
// 		}
// 		i++;
// 	}
// }

// // Заполните массив цифрами от 5 до 10 включительно. 
// //Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
// 	const arrayOfNumbers = [];
// 	for (let i = 5; i <= 10; i++) {
// 		arrayOfNumbers[i - 5] = i;
// 	}
// 	console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// const dlina = arr.length;

// for (let i = 0; i < dlina ; i++ ){
// 	let NumberOfArr = arr[i] ;
// 	result[i]= NumberOfArr ;
// }

// console.log(result);

// //________________________


// function secondTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	for (let i = 0; i < data.length; i++) {
// 		 if (typeof(data[i]) === 'number') {
// 			  data[i] = data[i] * 2;
// 		 } else if (typeof(data[i]) === 'string') {
// 			  data[i] = `${data[i]} - done`;
// 		 }
// 	}
// 	console.log(data);
// 	return data;
// }

// // ____________________

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++){

// 	result[i-1] = data[data.length - i];

// }
// console.log(result);

//**************************************************************************************



//____________________________________

// 24 Урок

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания


// const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


// let nameFilm = prompt('Какие последние фильмы вы посмотрели ?', '');
// let markFilm = +prompt('Какую оценку дадите этому фильму ?', '');



// for (let i = 0; i <  2 ; i++){
// 	let nameFilm = prompt('Какие последние фильмы вы посмотрели ?', '');
// 	let markFilm = +prompt('Какую оценку дадите этому фильму ?', '');

// 	if (nameFilm != null && markFilm != 0 && nameFilm.length <= 50 && nameFilm != false && markFilm != false) {
// 		personalMovieDB.movies[nameFilm] = markFilm;
// 		console.log('Супер !');
// 	}
// 	else {
// 		i--;
// 	}
	
// }
// console.log([personalMovieDB.movies]);

// __________________________________________________________________

// Функции 27 урок

// function sayHello(name) {
// 	return `Привет, ${name} `;
// }

// sayHello('Alex');

// function returnNeighboringNumbers(fullNamber) {
// 	return [fullNamber - 1, fullNamber, fullNamber + 1];
// }

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, 
// второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, 
// разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. 
//(Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
// проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, 
// она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, 
// то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, 
//которая и нужна для работы в 95% случае на фронтенде.



// function getMathResult(num, times) {
// 	if (typeof(times) !== 'number' || times <= 0) {
// 		return num;
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times){
// 			str += `${num * i}`;
// 		}
// 		else {
// 			str += `${num * i} ---`;
// 		}
// 	}
// 	return str;
// }












































































































































