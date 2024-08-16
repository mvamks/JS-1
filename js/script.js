"use strict";

/* const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; */

/* const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


//или


/* for (let i = 0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
    
} */
// 2 variant
   /*  let i = 0;
    while (i < 2) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        i++; 
    } */

    // 3 variant

  /*   let i = 0;
    do {
      console.log (i)
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        i++; 
    } while (i < 2);





if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
    console.log("Вы киноман");

    

} else {
    console.log("Произошла ошибка");
}


console.log(personalMovieDB); */



let numberOfFilm; // создаем пустую переменную

function start() {
    numberOfFilm = +prompt("Сколько фильмов Вы уже посмотрели?", ''); //записываем данные в переменную

    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    }    // Если намберФильм = пустая строка или намберФильм равно ноль или намберФильм не число, то isNan возвращает правдивое значение (ввод цифры в строку) и выполняет условие - задает вопрос "Сколько фильмов вы посмотрели?"
}

start();


const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm () {
    for (let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = +prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }  
    }
}
/* rememberMyFilm (); */

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

/* detectPersonalLevel(); */


/* function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(); */



// или 

function showMyDB(hidden) {
    if (!hidden) { 
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i} `);
        personalMovieDB.genres [i - 1] = genre;
    }
}

writeYourGenres();

/* console.log(personalMovieDB); */















