/**
 * str = 'hello123@!$world'
 * output =['hello', '123', '@!$' 'world]
 */

let str; //should be a string
function stringSplitter(str) {
  return (output = str.match(
    /[a-zA-Z]+|[0-9]+|[!-\/:-@[-`{-~()]+(?:\.[0-9]+|)/g
  ));
}
