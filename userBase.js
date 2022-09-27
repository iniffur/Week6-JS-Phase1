let User = require('./user') 

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

class UserBase{
    count(){
        return users.length;
    };

    getNames(){
        return users.map((user) => {
            return `${user.name}`;
        });
    };

    getIntroductions(){
        return users.map((user) => {
            return `Hi, my name is ${user.name}`;
        });
    };
};

module.exports = UserBase;


