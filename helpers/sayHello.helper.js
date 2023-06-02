function sayHello() {
    console.log('Hello to DEC-2022');
}

//експорт в ноді
module.exports = {
    sayHello: sayHello, //можливо скоротити до sayHello
}