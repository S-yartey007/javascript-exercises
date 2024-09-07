const palindromes = function (string) {
 const regExp = /\w+/g
 let result = "";
let pureString = string.toLowerCase().match(regExp).join("")
for(let i = pureString.length -1 ; i >= 0; i--) {
    result += pureString[i];
}
return result === pureString;
};

// Do not edit below this line
module.exports = palindromes;
