//will stop the loop if the array has any negative number and returns all the positive number before the negative number (onlyPositive)

function onlyPositive(number) {
    for (const element of number) { //for of
        if (element < 0) {
            break;
        }
        console.log(element);
    }
}
let arrayNumber = onlyPositive([2, 5, 8, 44, 32, 0, -1, 56, 34, -77, 25]);
console.log(arrayNumber);