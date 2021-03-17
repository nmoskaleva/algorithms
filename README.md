# JAVASCRIPT ALGORITHMS

## BIG-O NOTATION

a tool used to analyze the cost of an algorithm. Big O describes the complexity of your code using algebraic terms. Big O can give us high level understanding of the time and space complexity of an algorithm. Big O only cares about general trends, not precision. The time/space complexity (as measured by Big O) depends only on algorithm, not the hardware used to run it.

#### TIME COMPLEXITY

Big O Notation allows us to talk formally about how the runtime of an algorithm grows as the inputs grow.

The relationship between the input size and the runtime.

We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases.

`f(n)` is just a function with an input of `n`.

- `f(n)` could be linear `(f(n) = n)`
- `f(n)` could be quardatic `(f(n) = n^{2})`
- `f(n)` could be constant `(f(n) = 1)`
- `f(n)` could be something different

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

Always 3 operation => `O(1)`

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Number of operations is bounded by a multiple of `n` (say, `10n`)

\*\*\* Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2. But regardles of the exact number, the number of operations grows roughly proportionally with n.

#### SPACE COMPLEXITY

Focus on auxiliary space complexity – what happens inside the algorithm.

- most primitives (bool, numbers, undefined, null) are constant space
- strings require `O(n)` space (where `n` is the string length)
- reference types are generally `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

### ANALYZING PERFORMANCE OF ARRAYS AND OBJECTS

#### BIG O OF OBJECTS

##### WHEN TO USE OBJECTS

- don't need order \ need order
- when you need fast access (insert/remove – constant time | searching - linear time)

insertion/removal/access - O(N)
adding key/value - O(1)
accessing/removing a key in an object - O(1)
search - O(N)
`Object.keys - O(N)`
`Object.values - O(N)`
`Object.entries - O(N)`
`hasOwnProperty - O(1)`

#### BIG O OF ARRAYS

insertion/removal - DEPENDS
access - 0(1) (fast!)
search - O(N)

- inserting/removing in the beginning is costly - O(N)

##### WHEN TO USE ARRAYS

When you need fast access, but also an order.

## ALGORITHMS AND PROBLEM SOLVING PATTERNS

- Algorithm is a process or set of steps to accomplish a certain task.

### PROBLEM SOLVING

- Understand the problem
- Explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor

#### UNDERSTAND THE PROBLEM

- Restate problem in your own words;
- What are the inputs that go into the problem;
- What are the expected outcomes;
- Can the outputs be determined from the inputs (do we have enough information);
- How can I label important pieces of data;

#### EXPLORE CONCRETE EXAMPLES

- help understand problems better & provides sanity checks

Start with simple examples, than move to more complex ones.
Explore examples with empty inputs.
Explore examples with invalid inputs.

#### BREAK IT DOWN

You can start with writing comments of steps you're gonna take.

```function charCount(str) {
  // make object to return at the end
  // loop over a string, for each char
    // if the char is a key in object, add 1 to count
    // if the char is not in object, add it and set value to 1
  // return object at end
}
```

#### SOLVE/SIMPLIFY

by simplifying, you can gain a clue to the solution

```
function charCount(str) {
  // make object to return at the end
  let result = {};
  // loop over a string, for each char ...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a key in object, add 1 to count
    if (result[char] > 0) {
      result[char]++;
      // if the char is not in object, add it and set value to 1
    } else {
      result[char] = 1;
    }
  }
  // return object at end
  console.log(result);
  return result;
}
```

#### LOOK BACK AND REFACTOR

- Can you chack the result?
- Can you derive the result differently?
- Is it readable?
- Can you use the result or method for some other problem?
- Can you improve performance? (time/ space complexity)
- Can you think of other ways to refactor?
- How have other people solved this problem?

### PROBLEM SOLVING PATTERNS

Some patterns:

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

#### FREQUENCY COUNTERS

This pattern uses objects or sets to collect values/frequencies of values.
This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.
FC is usually O(N).

EXAMPLE:

Write a function `same`, which accepts 2 arrays. The function should return `true` if every value in the array has its corresponding value squared in the 2nd array. The frequency of values must be the same.

`same([1,2,3], [4,1,9]) // true `
`same([1,2,3], [1,9]) // false `
`same([1,2,1], [4,4,1]) // false, must be the same frequency`

```function same(arr1, arr2) {
  //if length of arr1 and arr2 is not the same - return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // create 2 objects
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // loop over arr1 and add to the 1st object values as keys and their count as values.
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  // do the same for arr2
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // compare 2 objects:
  // loop over the keys of the 1st object. If the key doesn't exist in ob2 – return false.
  for (let key in frequencyCounter1) {
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }
    // in the same loop, if obj1[key] !== obj2[key] return false – so compare the count of keys. if doesn't correspond - return false
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  // return true at the end of the function
  console.log(frequencyCounter2, frequencyCounter1);
  return true;
}
```

##### NESTED LOOPS SOLUTION

```
function sameLoops(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```
