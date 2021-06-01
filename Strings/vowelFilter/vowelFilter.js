function vowelInString(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  arr = arr.reduce((acc, curr) => {
    return vowels.indexOf(curr) > -1 ? acc.concat(curr) : acc;
  }, []);
  return arr.join('');
}
const str = 'america';
vowelInString(str);

//Output :: "aeia"

// Solution to find in form of array

function vowelInString(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  return arr.reduce((acc, curr) => {
    return vowels.indexOf(curr) > -1 ? acc.concat(curr) : acc;
  }, []);
}
const str = 'america';
vowelInString(str);

//Output ::  ["a", "e", "i", "a"]
