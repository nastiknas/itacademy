const { expect } = require('chai');
   const Calculator = require('../calculator.js');

   describe('Тесты для метода multiply (умножение)', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });

     it('умножение двух положительных чисел', () => {
      expect(calculator.multiply(2, 3)).to.equal(6);
     });

     it('умножение двух отрицательных чисел', () => {
        expect(calculator.multiply(-2, -3)).to.equal(6);
      });
  
     it('умножение двух десятичных чисел', () => {
        expect(calculator.multiply(0.5, 0.6)).to.equal(0.30);
      });
  
     it('умножение целого числа и 1', () => {
        expect(calculator.multiply(2, 1)).to.equal(2);
      });
  
     it('умножение целого числа и 0', () => {
        expect(calculator.multiply(2, 0)).to.equal(0);
      });
  
     it('умножение положительного числа на отрицательное число', () => {
        expect(calculator.multiply(-2, 3)).to.equal(-6);
     });

     it('умножение двух 0', () => {
        expect(calculator.multiply(0, 0)).to.equal(0);
     });

});