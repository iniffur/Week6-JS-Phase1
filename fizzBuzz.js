const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0){
        return 'Fizzbuzz';
    } else if (num % 3 === 0 && num % 5 !== 0) {
        return 'Fizz';
    } else if (num % 3 !== 0 && num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
};

console.log(fizzBuzz(11));
