class Calculator {
    // constructor() {
    // }
    

    add(operand1, operand2, operator) {
        if(operator === '+' 
            && (typeof operand1 === 'number' && typeof operand2 === 'number')) {
            return operand1 + operand2;
        }
        throw new Error('You have insterted not a number or an invalid symbol');
    }
    mult(operand1, operand2, operator) {
        if(operator === '*'
            && (typeof operand1 === 'number' && typeof operand2 === 'number')) {
            return operand1 * operand2;
        }
        throw new Error('You have insterted not a number or an invalid symbol');
    }
}


module.exports = Calculator;

