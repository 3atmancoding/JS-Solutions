function flatArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flatArray(curr) : curr);
  }, []);
}

let arr = [1, 2, [4, 5], [6, 7, [8, 9]], 10];
flatArray(arr);
//Output :: [1, 2, 4, 5, 6, 7, 8, 9, 10]
