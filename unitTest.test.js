const Checkcode = require('./unitTest');

describe('length test', () => {
  test('gidz tech community have that', () => {
    const check = new Checkcode()
    expect(check.stringLength('camiluxThecommunity')).toBe(
      'String is to shorter or to long!'
    );
  });
  test('camilux length', () => {
    const check = new Checkcode();
    expect(check.stringLength('gidz')).toBe(4);
  });
  test('empty string test', () => {
    const check = new Checkcode();
    expect(check.stringLength('')).toBe('String is to shorter or to long!');
  });
});


describe('reverser string test', () => {
  const check = new Checkcode();
  test('my reversed', () => {
    expect(check.reverseString('camilux')).toBe('xulimac');
  });
  test('the reversed', () => {
    const check = new Checkcode();
    expect(check.reverseString('zetron')).toBe('nortez');
  });
});

describe('calculation tests', () => {
  test('sum 45 + 15', () => {
      const check = new Checkcode();
    expect(check.sum(45, 15)).toBe(60);
  });
  test('substract 45 - 15', () => {
      const check = new Checkcode();
    expect(check.substract(45, 15)).toBe(30);
  });
  test('multiply 12 * 6', () => {
      const check = new Checkcode();
    expect(check.multiply(12, 6)).toBe(72);
  });
  test('divide 30 / 15', () => {
      const check = new Checkcode();
    expect(check.divide(30, 15)).toBe(2);
  });
});

describe('Test upper case', () => {
  test('make upper case', () => {
     const check = new Checkcode();
    expect(check.capitalise('camilux')).toBe('CAMILUX');
  });
});