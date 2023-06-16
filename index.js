// checks to see if a word without spaces is a palindrome
function isPalindrome(word = 'abccba') {
  //determine half of word
  const length = word.length  
  const loops = Math.floor(length/2)

  if (length === 1){ //returns true if word is only one character
    return true
  } else { 

    for (let i = 0; i < loops; i++) {
      //as loop runs first and last chance to itterate on towards the center of the word
      let first = word.charAt(i)
      let last = word.charAt(length - (i+1))  
      
      if (first === last) {
        if (i < loops) {
          return true
        } else {
          continue
        }
      } else {
        return false
      }
    }
  }

}

/* 
  Add your pseudocode here
  get lenth of word
  divide by 2
  7/2 = 3.5 round down = 3
  loop 3 times
  1st = last then increment
  2nd = 2nd to last
  3rd = 3rd to last
  if true = true



*/

/*
  Add written explanation of your solution here
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

