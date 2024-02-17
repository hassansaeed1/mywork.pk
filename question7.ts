import chalk from "chalk";
`7. Create a function that filters out negative numbers`

function removeNegativeNumbers(inputArray: number[]): number[] {
    let filteredArray = inputArray.filter((num) => num >= 0);
    return filteredArray;
}

var inputNumbers = [10, -5, 7, -3, 0, 15, -8];
var positiveNumbers = removeNegativeNumbers(inputNumbers);
console.log(chalk.blue(`Positive numbers: ${positiveNumbers}`))

