function vowelInString(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  return arr.reduce((acc, curr) => {
    return vowels.indexOf(curr) > -1 ? acc.concat(curr) : acc;
  }, []);
}
const str = 'america';
vowelInString(str);
