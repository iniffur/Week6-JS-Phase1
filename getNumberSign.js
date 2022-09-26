const getNumberSign = (num) => {
    if (num === 0) {
        return 'zero'
    } else if (num > 0) {
        return 'positive'
    } else {
        return 'negative'
    }
};

console.log(getNumberSign(14));

module.exports = getNumberSign;
