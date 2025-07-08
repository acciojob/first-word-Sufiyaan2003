function firstWord(s) {
  // your code here
  let word = ""; 

  // Remove leading spaces
  let i = 0;
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // Read characters until the first space or end of string
  while (i < s.length && s[i] !== ' ') {
    word += s[i];
    i++;
  }

  return word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
