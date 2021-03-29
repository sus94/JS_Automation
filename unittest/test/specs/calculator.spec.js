const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const expect = chai.expect;


describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator();
    });

    afterEach(() => {
        calculator = null;
    });

    describe('Addition', () => {
        it('1 + 1 should be equal to 2', () => {
            expect(calculator.add(1,1,'+')).to.equal(2);
        });
        it('should sum two numbers', () => {
            expect(calculator.add(2, 0,'+')).to.equal(2);
            expect(calculator.add(50, 39,'+')).to.equal(89);
            expect(calculator.add(10000, 89999,'+')).to.equal(99999);
        });
        it('should sum negative numbers', () => {
            expect(calculator.add(-31, 32,'+')).to.equal(1);
            expect(calculator.add(-31, -32,'+')).to.equal(-63);
        });
        it('should throw an error if provided with a string', function () {
            const callWithError = () => calculator.add(1, '1', '+');
            expect(callWithError).to.throw(`You have insterted not a number or an invalid symbol`);
        });
        it('should throw an error if provided with an invalid symbol', function () {
            const callWithError = () => calculator.add(1, '1', '/');
            expect(callWithError).to.throw(`You have insterted not a number or an invalid symbol`);
        });
    });

    describe('Multiplication', () => {
        it('1 * 1 should be equal to 1', () => {
            expect(calculator.mult(1, 1,'*')).to.equal(1);
        });
        it('should multiply two numbers', () => {
            expect(calculator.mult(3, 0,'*')).to.equal(0);
            expect(calculator.mult(50, 39,'*')).to.equal(1950);
        });
        it('should multiply two  negative numbers', () => {
            expect(calculator.mult(-3, 2, '*')).to.equal(-6);
            expect(calculator.mult(-5, -2, '*')).to.equal(10);
        });
        it('should throw an error if provided with a string', function () {
            const callWithError = () => calculator.add(1, '1', '*');
            expect(callWithError).to.throw(`You have insterted not a number or an invalid symbol`);
        });
        it('should throw an error if provided with an invalid symbol', function () {
            const callWithError = () => calculator.add(1, 1, '-');
            expect(callWithError).to.throw(`You have insterted not a number or an invalid symbol`);
        });
    });
});