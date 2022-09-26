const lowercaseMessage = (message) => {
    return message.toLowerCase();
}

const transform = (message, func) => {
    return func(message);
}

console.log(transform('WHY ARE YOU SHOUTING', lowercaseMessage));

module.exports = lowercaseMessage;