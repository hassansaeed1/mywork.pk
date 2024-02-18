`4. Calculate the sum of numbers within an array`;
function sumArray(numbers) {
    return numbers.reduce((pn, inde) => pn + inde, 0);
}
var mixedArray = [2, 4.5, 1, -3.2, 6.7, 0.5];
var mixedSum = sumArray(mixedArray);
console.log(`Sum of Array: ${mixedSum}`);
export {};
