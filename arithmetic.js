module.exports = {
    sum: (a, b) => a + b,
    substraction: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b === 0) ? "Zero division" : a / b
}