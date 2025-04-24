const { expect } = require('chai');
   const Calculator = require('../calculator.js');

   describe('Тесты для метода add(сложение)', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  

     it('сложение двух положительных чисел', () => {
      expect(calculator.add(2, 3)).to.equal(5);

      })

      it('сложение двух отрицательных чисел', () => {
        expect(calculator.add(-2, -3)).to.equal(-5);
  
      })

      it('сложение числа и 0', () => {
        expect(calculator.add(2, 0)).to.equal(2);
  
      })

      it('сложение положительного и отирицательного числа', () => {
        expect(calculator.add(2, -3)).to.equal(-1);
  
      })

      it('сложение двух нулей', () => {
        expect(calculator.add(0, 0)).to.equal(0);
  
      })
      it('сложение целого и десятичного чисел', () => {
        expect(calculator.add(0.125, 1)).to.equal(1.125);
  
      })

      it('сложение десятичных числе', () => {
        expect(calculator.add(0.125, 0.125)).to.equal(0.25);
  
      })

      it('сложение целого числа и 9', () => {
        expect(calculator.add(5,9)).to.equal(14);
  
      })

      it('сложение числа и пробела', () => {
        expect(calculator.add(5, )).to.equal(5);
  
      })


      it('сложение трех чисел', () => {
        expect(calculator.add(5,5,5)).to.equal(15);
  
      })


});