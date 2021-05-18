/**
 * input = 'Hello'
 * output = 'Helo'
 */
/** Using forEach method
 * @param str string
 */
let str = 'Hello';
function duplicateInString(str) {
  let unique = [];
  let arr = str.split('');
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique.join('');
}
