import chalk from "chalk";
`Create a function that reverses an array`

function reversesArray(arr:Array<number>){
    let arrayRevers=arr.reverse()
    return arrayRevers
}
let numbers: Array<number> = [1,14,10,25,22,30,55,43];

console.log(chalk.green(reversesArray(numbers)));