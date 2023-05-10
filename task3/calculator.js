//Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }

    multiply(a, b) {
        return a * b;
    }
}

module.exports = Calculator;
