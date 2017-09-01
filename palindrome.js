// https://jsfiddle.net/conneraiken/5qfj32z0/3/

var palindromeStr = 'race  car';
 
alert(`Is '${palindromeStr}' a palindrome? Well, it is ${isPalindrome(palindromeStr)}.`);


function isPalindrome(inputStr) {
  var palindromeTemp = inputStr.slice(); 
  
  // Clean out any spaces
  palindromeTemp = palindromeTemp.replace(/\s/g, ""); // do a global a regex search for whitespace
  inputStr = inputStr.replace(/\s/g, ""); // todo: add symbols to regex
  
  // Split the string characters into an array
  palindromeTemp = palindromeTemp.split(''); 
  
  // Reverse the array
  palindromeTemp = palindromeTemp.reverse();
  
  // Join the array back to a string
  palindromeTemp = palindromeTemp.join('');
  
  return (palindromeTemp === inputStr);
}
