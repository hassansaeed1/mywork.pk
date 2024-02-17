import chalk from "chalk"

`Create a length converter function`

function kiloMetersToMiles(kiloMeter:number){
    let miles=kiloMeter*0.621371
    return miles
}

var userinput=10
var answer=kiloMetersToMiles(userinput)
console.log(chalk.red(`${userinput} kilometers is in miles= ${answer}`))
