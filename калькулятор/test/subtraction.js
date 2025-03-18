const { expect } = require('chai');
   const Calculator = require('../calculator.js');

   describe('Тесты для метода subtraction(вычитание)', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });

      it('вычитание двух положительных чисел', () => {
        expect(calculator.subtraction(5, 3)).to.equal(2);
      });

      it('вычитание двух отрицательных чисел', () => {
        expect(calculator.subtraction(-5, -3)).to.equal(-2);
      });

      it('вычитание 0 от целого числа', () => {
        expect(calculator.subtraction(5, 0)).to.equal(5);
      });

      it('вычитание двух нулей', () => {
        expect(calculator.subtraction(0, 0)).to.equal(0);
      });

      it('вычитание целого числа от 0', () => {
        expect(calculator.subtraction(0, 3)).to.equal(-3);
      });

      it('вычитание двух десятичных чисел', () => {
        expect(calculator.subtraction(5.5, 3.5)).to.equal(2);
      });

      it('вычитание десятичного числа от целого числа', () => {
        expect(calculator.subtraction(5, 0.3)).to.equal(4.7);
      });


    });