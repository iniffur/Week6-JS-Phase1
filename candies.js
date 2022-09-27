const addToBatch = (array, num) =>{
    if (array.length < 5) {
        array.push(num)
    } return array;
};

console.log(addToBatch([2, 15, 12, 12], 8));