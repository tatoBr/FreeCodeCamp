function palindrome(str) {
  // Good luck!

  /********clean the string******/

  //creates a regular expression to filter the string
  const regExp = /[a-z0-9]/ig;

  //convert to lower case and remove all non-alphanumeric characters from the string
  let cleanStr = str.toLowerCase().match(regExp);  
  
  //
  let isPalindrome = true;
  for(let i = 0; i < cleanStr.length; i++)
  {
    let mirroredIndex = cleanStr.length - 1 - i;
    isPalindrome = 
    isPalindrome &&
    cleanStr[i] == cleanStr[mirroredIndex];
  }
  console.log(isPalindrome);
  return isPalindrome;
}



palindrome("2A3*3a2", "2A3 3a2");
