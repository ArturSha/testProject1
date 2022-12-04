let numberOfFilms;

function start() {
  numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    let rate = prompt('На сколько оцените его ?', '');
    if (
      lastMovie != null &&
      rate != null &&
      lastMovie != 0 &&
      lastMovie.length < 50 &&
      rate != 0
    ) {
      personalMovieDB.movies[lastMovie] = rate;
    } else {
      i--;
    }
  }
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}
function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  }
}
function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
showMyDB();

detectPersonalLevel();
console.log(personalMovieDB, personalMovieDB.count);
