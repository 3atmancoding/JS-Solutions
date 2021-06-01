/**
 * input = 'Hello'
 * output = 'Helo'
 */
/** Using reduce method
 * @param str string
 
 Solution Explained
 ------------------
 1. We split the string to convert into an array
 2. Reduce function -> accmuluator is a blank array intially, current value is the first index value that is 'H'
 3. We check the condition if array has any element which is missing since indexOf is less than 0 we push in current value inside the array
 4. When we check for second 'l', array already has the value which makes indexOf > 0 hence we omit the second 'l' which is a duplicate
 
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
