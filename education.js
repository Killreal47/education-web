
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



// В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. 
// Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
// (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. 
// Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. 
// Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. 
// Конечно, там будет куда больше условий, но смысл остается таким же.

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂


// function calculateVolumeAndArea(width) {

// 	if (typeof (width) !== 'number' || width < 0 || !Number.isInteger(width)) {
// 		return 'При вычислении произошла ошибка';
// 	}

// 	let volume = 0;
// 	let area = 0;

// 	volume = width * width * width;
// 	area = 6 * (width * width);
// 	return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// function getCoupeNumber(seatNumber){
// 	if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
// 	 	return 'Ошибка. Проверьте правильность введенного номера места';
// 	}
// 	else if (seatNumber == 0 || seatNumber > 36) {
// 		return 'Таких мест в вагоне не существует';
// 	}

// 	return Math.ceil(seatNumber / 4);
// }



const arr = [2, 5, 6, 8, 9, 15];


arr.forEach(function (item, i, arr) {
	console.log(`${i}:${item} внутри массива ${arr}`);
});


// В этих заданиях мы с вами потренируемся работать с объектами. Это важный навык и нам нужно понимать как работают эти структуры.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно,
//  но по порядку, так что вы будете получать разные уведомления при проверке.

// У вас есть готовый объект с данными. Разработчик Х хочет написать часть функционала, но ему не хватает навыков. Выполните часть заданий за него.

// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). 
// Если данные в объекте поменяются, то и сообщение тоже изменится.



// const personalPlanPeter = {
// 	name: 'Peter',
// 	age: '36',
// 	skills:{
// 		languages: ['ru', 'eng'],
// 		programmingLangs: {
// 			 js: '20%',
// 			 php: '10%'
// 		},
// 		exp: '1 month'
// 	},
// 	showAgeAndLangs(plan){
// 		const {age} = plan;
// 		const {languages} = plan.skills;
// 		let str = `Мне ${age} и я владею языками: `;

// 		languages.forEach(function(lang){
// 			str += `${lang.toUpperCase()} `;
// 		});

// 		return str;
// 	}

// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// // function showExperience(plan){
// // 	const {exp} = plan.skills;
// // 	console.log(exp);
// // 	return exp;
// // }
// // showExperience(personalPlanPeter);


// function showProgrammingLangs(plan){
// 	let str = '';
// 	const {programmingLangs} = plan.skills;
// 	for (let key in programmingLangs){
// 		str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
// 	}
// 	console.log(str);
// 	return str;
// }

// showProgrammingLangs(personalPlanPeter);

// __________________________________________________________________________________
// (*) Продвинутые задания на использование функций


// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
// Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// Ответ с кодом этих задач можно найти тут: ссылка


// function getTimeFromMinutes(minutesTotal) {
// 	if (!Number.isInteger(minutesTotal) || typeof (minutesTotal) !== 'number' || minutesTotal < 0 ) {
// 		return 'Ошибка, проверьте данные';
// 	}
// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;

// 	let hoursTxt = '';

// 	if(hours === 1 ){
// 		hoursTxt = 'час';
// 	} else if (hours > 1 && hours <= 4 ){
// 		hoursTxt = 'часа';
// 	} else if (hours > 4 && hours <= 10 ){
// 		hoursTxt = 'часов';
// 	} else {
// 		hoursTxt = 'часов';
// 	}


// 	let str = ` Это ${hours} ${hoursTxt} и ${minutes} минут`;
// 	console.log(str);
// 	return `Это ${hours} ${hoursTxt} и ${minutes} минут `;
// }


// getTimeFromMinutes(0);


// function findMaxNumber(a, b, c, d){
// 	if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number' ){
// 		return 0;
// 	} else { 
// 		return Math.max(a, b, c, d);
// 	}
// }


// findMaxNumber();


// function fib(arg) {
// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	if (typeof(arg) !== 'number' || arg <= 0 || !Number.isInteger(arg)){
// 		return '';
// 	} 

// 	for(let i = 0; i < arg; i++){
// 		if(i + 1 === arg){
// 			result += `${first}`;
// 		} else {
// 			result += `${first} `;
// 		}

// 		let third = first + second;
// 		first = second;
// 		second = third;
// 	}

// 	console.log(result);
// 	return result;
// }

// fib(10);




// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin
// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) 
// Поэтому нам нужно привести строки в один формат для правильной работы.


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
// 	let result = `Семья состоит из: `;

// 	if (arr.length === 0){
// 		return 'Семья пуста';
// 	} else {
// 		arr.forEach((elem)=>{
// 			result += `${elem} ` ;
// 		});
// 		console.log(result);
// 		return result;
// 	}


// }
// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach((elem => {
// 		console.log(elem.toLowerCase());
// 	 }));
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
// 	let result = '';

// 	for (let i = str.length - 1; i >= 0; i--) {
// 		result += str[i];

// 	}

// 	console.log(result);
// 	return result;
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
// 	let str = '';
// 	if (arr.length === 0){
// 		str = 'Нет доступных валют';
// 	} else {
// 		str = 'Доступные валюты:\n';
// 	}

// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		if(element == missingCurr){
// 			continue;
// 		} 
// 		str += `${element}\n`;
// 		console.log(str);
// 	}
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB');

// const par = [4, 1, 3];

// function squareSum(numbers){
// 	let result = 0 ;

// 	numbers.forEach(function(n){
// 		result += n * n ;
// 	});

// 	console.log(result);
// 	return result;
// }

// squareSum(par);
Object.setPrototypeOf(obj1 , obj2);