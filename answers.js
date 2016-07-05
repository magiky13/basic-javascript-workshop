// this is a comment!
//this function should take the first character of a string 
function firstCharacter(string) {
    return string.substring(0,1);
}

//console.log(firstCharacter(""))
function lastCharacter(string) {
    return string.substring(string.length - 1, string.length);
}

//console.log(lastCharacter(""))

function findCharacter(input, num) {
    return input.charAt(num);
    // var numberToFind = isFinite(input);
    // var onlyCharacters = isNaN(input);
    // var characterToFind = onlyCharacters.substring(numberToFind -1, numberToFind);
}

//console.log(findCharacter("usa5", 1))

function addTwoNumbers(numberOne, numberTwo) {
    if(isFinite(numberOne) && isFinite(numberTwo)) {
    return numberOne + numberTwo
}
else {
        return ("Use Numbers!")
}
}

console.log(addTwoNumbers(23, "sdsfsdf"))

