class Checkcode {
  constructor() {}


 stringLength(string) {
    if (string.length <= 1 || string.length >= 10) {
      return 'String is to shorter or to long!';
    } else {
      console.log(string.length);
      return string.length;
    }
  }

  reverseString(string) {
    const splitString = string.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    return joinArray;
  }

  sum(a, b) {
    return a + b;
  }
  substract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    return a / b;
  }
  capitalise(string) {
    return string.toUpperCase();
  }
}

module.exports = Checkcode;
