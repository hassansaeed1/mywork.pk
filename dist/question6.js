`6. Sort an array from lowest to highest`;
import chalk from "chalk";
function sortNumArray(arry) {
    let sortArray = arry.sort((a, b) => a - b);
    return sortArray;
}
let numbers = [3, -5, 10, -2.5, 7.8, -1.2];
console.log(chalk.red(sortNumArray(numbers)));
