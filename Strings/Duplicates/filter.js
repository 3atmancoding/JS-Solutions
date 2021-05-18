/**
 * input = 'Hello'
 * output = 'Helo'
 */
/** Using filter method
 * @param str string
 */
let str = 'Hello';
function duplicateInString(str) {
  let newStr = [];
  let arr = str.split('');
  newStr = arr.filter((el, i) => arr.indexOf(el) === i);
  return newStr.join('');
}
duplicateInString(str);
