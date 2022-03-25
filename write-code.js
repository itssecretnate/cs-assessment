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
