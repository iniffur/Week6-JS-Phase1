const checkLength = (number) => {
    if (number.length <= 10) {
        return true;
    } else return false;
};

const filterLongNumbers = (numbersArray) => {
    return numbersArray.filter(checkLength);
};

console.log(filterLongNumbers(['123214', '124', '123123124123523452']));