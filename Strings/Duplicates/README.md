# Solution for duplicate in a string via different approaches

```bash
forEach
```

Each element in the array will be checked if it is included in the array
If it is included it will be pushed into a new array

```bash
filter
```

We will filter each element whose index is not equal to the current index
We use `indexOf` which will find the first index of any element in the array
If an element is repeated more than once it will get filtered since `indexOf ` finds the first element only

```bash
reduce
```

We will use reduce method. The syntax is Array.reduce(callback,initialValue) where callback is `accumulator, current, index, array`
We will use accumulator as a blank array which is equal to initialValue
We will check if accumulator has current using `indexOf`
If not we will push it in accumulator
