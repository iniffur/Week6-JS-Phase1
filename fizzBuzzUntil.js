const fizzBuzzUntil = (finalNum) => {
    for (let num = 1 ; num <= finalNum ; num++) {
        if (num % 3 === 0 && num % 5 === 0){
            console.log('Fizzbuzz');
        } else if (num % 3 === 0 && num % 5 !== 0) {
            console.log('Fizz');
        } else if (num % 3 !== 0 && num % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(num);
        };
    };
};

fizzBuzzUntil(17);

module.exports = fizzBuzzUntil;