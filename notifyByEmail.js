const notifyByEmail = (emailAddress) =>{
    return 'Email sent to ' + emailAddress;
}

const notifyByText = (phoneNumber) => {
    'Text sent to ' + phoneNumber;
}

const notify = (str, func) => {
    return func(str);
}

notify('hello@makers.tech.test', notifyByEmail);
notify('+10000000000', notifyByText);

