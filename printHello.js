const printHello = () => {
    console.log('Hello there');
}

const executeAfterDelay = (delayTime, func) =>{
    setTimeout(func, delayTime * 1000);
}

executeAfterDelay(5, printHello);