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

console.log(findCharacter("usa5", 1))

