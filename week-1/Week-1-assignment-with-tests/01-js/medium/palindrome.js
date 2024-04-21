/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const word=str.toLowerCase().replace(/[^\w]/g, "");
  let m=word.length;
  let i=0,j=m-1;
  while(i<=j){
    if(word[i]!=word[j])return false;
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;


/*
EXPLANATION :
str.replace(/[^\w]/g, "")
-> 
/[^\w]/g is a regular expression pattern inside the first parameter of replace()
->
[^\w]: This part defines a character set that matches any character that is not a word character.
\w matches any word character (alphanumeric characters plus underscore), and ^ inside the square brackets negates the character set, 
so [^\w] matches any character that is not a word character.
/g: This is a flag indicating that the replacement should be done globally (i.e., all occurrences should be replaced, not just the first one found).
"" is the second parameter of replace(), which is the replacement string. In this case, it's an empty string "". 
This means that any characters matched by the regular expression pattern will be replaced with nothing, effectively removing them from the string.
*/
