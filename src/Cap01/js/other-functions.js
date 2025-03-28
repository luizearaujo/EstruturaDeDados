console.log('>>> let');
let movie = 'Indiana Jones';

function showMovie(movie){
    console.log('movie: ' + movie);
}

function starWars(){
    let movie = 'Star Wars';
    showMovie(movie);
}

function marvel(){
    movie = 'Avengers';
    showMovie(movie);
}

function games(){
    let isFan = true;
    let phrase = 'Red Dead Redemption';

    console.log('before if: ' + phrase);

    if (isFan){
        let phrase = 'initial text';
        phrase = 'my horse!';
        console.log('inside if: ' + phrase);
    }

    phrase = 'go to the city!';
    console.log('after if: ' + phrase);
}

showMovie(movie);
starWars();
marvel();
showMovie(movie);
games();

console.log('>>> Constant');

const PI = 3.141593;
console.log('PI: ' + PI);
