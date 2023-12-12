/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  s1 = str1.toLowerCase();
  s2 = str2.toLowerCase();
  let bool = true;
  if(s1.length != s2.length) bool = false;
  for(let i=0; i<s1.length; i++){
    if(!s2.includes(s1[i])){
      bool = false;
    }
  }
  return bool;
}

module.exports = isAnagram;
