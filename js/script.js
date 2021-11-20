"use strict";

let numberoffilms;
let personalMovieDB = {
    count: numberoffilms,
    actors:{},
    movies:{},
    genres:[],
    privat: false,


};

function numboffilms (){
    while (numberoffilms == "" || numberoffilms == null || isNaN(numberoffilms)){
        numberoffilms = prompt("Сколько фильмов вы просмотрели?", "" );
    }

}
numboffilms();

        
    
    function remembermyfilms(){
        for(let i = 0; i < 2; i++){
            const    a = prompt("последний просмотренный фильм", ""),
                    b = prompt ("оценка фильму", "");
               
    
                if (a != null && b != null && a != "" && b != "" && a.length < 50){
                    personalMovieDB.movies [a] = b;
                    console.log("done");
                }else{
                    i--;
                }   
    }
}
    remembermyfilms();

        function detectpersonallevel() {
            if (personalMovieDB.count <= 10){
                console.log("мало фильмов");
            }else if (personalMovieDB.count < 30){
                console.log("супер");
            }else if (personalMovieDB.count > 30){
                console.log("вы киноман");
            }else {
                console.log("даун введи число");
            }
     
        }
        detectpersonallevel();

    function showmyDB(){
        if(personalMovieDB.privat != true){
        console.log(personalMovieDB);
    }
    }
    showmyDB();

    function writeyourGenres (){
        for( let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[ i - 1] = genre;
        }
    }
    writeyourGenres();



    

