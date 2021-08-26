const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const lastOfFilms = prompt('Один из последних просмотренных фильмов?', "");
// const ratingOfFilms = prompt('Насколько оцените его?', "");

const a = prompt('Один из последних просмотренных фильмов?', ""),
      b = prompt('Насколько оцените его?', ""),
      c = prompt('Один из последних просмотренных фильмов?', ""),
      d = prompt('Насколько оцените его?', "");

// personalMovieDB.movies = {
//     lastOfFilms: ratingOfFilms
// }

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);