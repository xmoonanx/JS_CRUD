const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  div: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  powerof: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const multiResult = calculator.multi(10, minusResult);
const divResult = calculator.div(multiResult, plusResult);
const powerResult = calculator.powerof(divResult, minusResult);

// In function, write the other works after return,
// the other works not execute!
// If there R the other works before return,
// this works is execute!
// In other words, it is executed until return.
