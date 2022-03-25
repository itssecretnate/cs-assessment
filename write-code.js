// Sum Zero

function addToZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) return true;
        }
    }
    return false;

}

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True


//  Unique Characters

function hasUniqueChars(stringToCheck) {
    for(let i = 0; i < stringToCheck.length; i++) {
        for(let j = i + 1; j < stringToCheck.length; j++) {
            if(stringToCheck[i] == stringToCheck[j]) return false;
        }
    }
    return true;
}


hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False


// Pangram Sentance
function isPangram(sentence) {
    sentence = sentence.toLowerCase();

    let lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const lettersArr = [];

    for(let i = 0; i < sentence.length; i++) {
      if(lowercaseLetters.includes(sentence[i]) && !lettersArr.includes(sentence[i])) lettersArr.push(sentence[i]);
    }

    if(lettersArr.length === 26) return true;
    else return false;
}

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False
