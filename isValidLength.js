const isValidLength = (phoneNumber) => {
    const validLength = 10;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
};

console.log(isValidLength('0775323454'));

module.export = isValidLength;