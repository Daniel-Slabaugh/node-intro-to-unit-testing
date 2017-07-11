const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', () => {

  it('should return fizz-buzz for multiples of 15', () => {
    const normalCases = [15, 30, 15*(Math.floor(Math.random() * (100 - 1)) + 1)];

    normalCases.forEach((number) => {
      const result = fizzBuzzer(number);
      result.should.equal('fizz-buzz');
    });  
  });

  it('should return buzz for multiples of 5', () => {
    const normalCases = [5, 10, 35];
    normalCases.forEach((number) => {
      const result = fizzBuzzer(number);
      result.should.equal('buzz');
    });
  });

  it('should return fizz for multiples of 3', () => {
    const normalCases = [3, 9, 33];
    normalCases.forEach((number) => {
      const result = fizzBuzzer(number);
      result.should.equal('fizz');
    });
  });

  it('should throw error if non-numeric value is input', () => {
    const normalCases = ['5', [5,6], true];
    normalCases.forEach((number) => {
      (() => fizzBuzzer(number)).should.throw(Error);
    });
  });

});