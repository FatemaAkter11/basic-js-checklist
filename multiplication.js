/* Write a function that takes three numbers and return multiplication of the three numbers */

function multThreeNumber(num1, num2, num3) {
    let result = num1 * num2;
    let finalResult = result * num3;
    return finalResult;
}

console.log(multThreeNumber(10, 10, 10));