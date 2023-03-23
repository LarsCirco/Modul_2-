const vowels = 'aeiou';

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

function disemvowel(str) {
    return (str || "").replace(/[aeiou]/gi, "");
  }

  disemvowel = str => str.replace(/[aeiou]/gi,'');