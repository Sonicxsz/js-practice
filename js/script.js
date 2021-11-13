"use strict";
const numberoffilms = +prompt("Сколько фильмов вы просмотрели?", "" );
const personalmovieDB = {
    count: numberoffilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false
};
const a = prompt("последний просмотренный фильм", ""),
    b = prompt ("оценка фильму", ""),
    c = prompt("последний просмотренный фильм", ""),
    d = prompt ("оценка фильму", "");
    
    personalmovieDB.movies [a] = b;
    personalmovieDB.movies [c] = d;
    
    console.log(personalmovieDB);