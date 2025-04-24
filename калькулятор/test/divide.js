const { expect } = require('chai');
   const Calculator = require('../calculator.js');

   describe('Тесты для метода divide(деление)', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });

    it('деление двух положительных чисел', () => {
      expect(calculator.divide(6, 2)).to.equal(3);
    });

    it('деление двух отрицательных  чисел', () => {
        expect(calculator.divide(-6, -2)).to.equal(3);
      });

    it('деление положительного числа на отрицательное число', () => {
        expect(calculator.divide(6, -2)).to.equal(-3);
      });

    it('деление отрицательного числа на положительное число', () => {
        expect(calculator.divide(-6, 2)).to.equal(-3);
      });


    it('деление на 0', () => {
        expect(calculator.divide(6, 0)).to.equal(Infinity);
      });


    it('деление двух десятичных чисел', () => {
        expect(calculator.divide(0.25, 0.5)).to.equal(0.5);
      });

    it('деление на десятичное число', () => {
     expect(calculator.divide(6, 0.2)).to.equal(30);
    });
});