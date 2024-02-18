`2. Print a table containing multiplication tables`
import chalk from "chalk";
import inquirer from "inquirer";

const answers = (await inquirer.prompt([
    {
      type: "input",
      name: "table",
      message: "which table do you want?",
    },
  ]));

for(let index = 1; index <= 10; index++) {

    console.log(chalk.green(  `${answers.table} x ${index} = ${answers.table * index}` ));}