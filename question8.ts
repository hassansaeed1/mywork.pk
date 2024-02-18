`8. Remove the spaces found in a string`

function removespace(input:string){
    return input.replace(/\s/g, "")
}
let userinput="h a s s a n "
console.log(removespace(userinput))