/**
 * input = 'Hello'
 * output = 'Helo'
 */
/** Using filter method
 * @param str string
 */

/* Solution explained: So each element's index is matched with current index. Since the indexOf finds first index of any matching element here 'l' will first occur
on index 2 when i = 2, i++ and i =3 but indexOf still finds first l on index 2. Hence we find the duplicate
*/

let str = 'Hello';
function duplicateInString(str) {
  let newStr = [];
  let arr = str.split('');
  newStr = arr.filter((el, i) => arr.indexOf(el) === i);
  return newStr.join('');
}
duplicateInString(str);
