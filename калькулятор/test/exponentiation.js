const { expect } = require('chai');
   const Calculator = require('../calculator.js');

   describe('Тесты для метода exponentiation (экспонента)', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
 
        it('положительное число', () => {
            expect(calculator.exponentiation(6)).to.equal(36);
         });

         it('отрицательное число', () => {
            expect(calculator.exponentiation(-6)).to.equal(36);
         });

         it('десятичное число', () => {
            expect(calculator.exponentiation(0.5)).to.equal(0.25);
         });

         it('0 (ноль)', () => {
            expect(calculator.exponentiation(0)).to.equal(0);
         });

      });