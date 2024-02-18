`10. Return the number of vowels in a string`;
let vowels = ["a", "e", "i", "o", "u"];
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]))
            count++;
    }
    return count;
}
console.log(countVowels("Hello my name is hassan"));
export {};
