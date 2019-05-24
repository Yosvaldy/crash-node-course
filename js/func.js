const greeting = () => {
    console.log('Hello');
};

const sayName = () => {
    console.log('Human!');
};

module.exports.greeting = greeting; //It exports the 'greeting' function
module.exports.sayName = sayName; //It exports the 'greeting' function