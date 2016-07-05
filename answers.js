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

//console.log(addTwoNumbers(23, "sdsfsdf"))

//e5
function multiplyTwoNumbers(numberOne, numberTwo) {
    if(isFinite(numberOne) && isFinite(numberTwo)) {
    return numberOne*numberTwo
}
else {
        return ("Use Numbers!")
}
}

//console.log(multiplyTwoNumbers(10, 60))

//function that takes 2 numbers and a string, should be #6

function simpleMath (number1, number2, string) {
    if(string === "add"){
        return number1 + number2
    }
    else if(string === "mult") {
        return number1*number2
    }
    else if(string === "subtract") {
        return number1 - number2
    }
    else if(string === "div") {
        return number1 / number2
    }
}

//console.log(simpleMath(3, 4, "subtract"))
        
//e7

function repeatStringByNumber(string, number) {
    return string.repeat(number);
}


//console.log(repeatStringByNumber("ssss", 8))
//e7 but should be e8

function inverseString(string) {
    return string.split("").reverse().join("");
}

//console.log(inverseString("abcdefg"))

function factorial(number) {
  if(number<0) {
      return "NOOOOOOOOOOOOOOOOOO"
  }
  else if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
} 

//console.log(factorial(-10))

//e10

function longestWord(string) {
    var words = string.split(" ");
    
}

//e11

function capitalizeWords(phrase) {
    var firstArray = phrase.split(" ");
    var finalArr = [];
    for(var i = 0; i < firstArray.length; i++){
        var firstLetter = firstArray[i].charAt(0).toUpperCase();
        var restOfWord = firstArray[i].substring(1).toLowerCase();
        var finalWord = firstLetter + restOfWord;
        finalArr.push(finalWord);
        var finalPhrase = finalArr.join(" ");
    }
   return finalPhrase;
}

console.log(capitalizeWords("allo, jaime mAnger des bananes!"))