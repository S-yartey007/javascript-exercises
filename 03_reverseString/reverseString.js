const reverseString = function(string) {
    const char = string.split("")
    let temp = "";
    for(let i = char.length-1; i >= 0; i--) {
             temp += char[i];
    }
return temp    

};

// Do not edit below this line
module.exports = reverseString;
