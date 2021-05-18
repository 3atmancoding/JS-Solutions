/**
 * input = 'Hello'
 * output = 'Helo'
 */
/** Using reduce method
 * @param str string
 */
let str = 'hello';
function remove(str) {
  let arr = str.split('');
  let unique = arr.reduce(function (acc, curr) {
    if (acc.indexOf(curr) < 0) acc.push(curr);
    return acc;
  }, []);
  return unique.join('');
}
remove(str);
