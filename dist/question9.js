import chalk from "chalk";
`9. Return a Boolean if a number is divisible by 10`;
function isDivisibleBy10(number) {
    return number % 10 === 0;
}
let userinput = 15;
var result = isDivisibleBy10(userinput);
console.log(chalk.yellow(result));
