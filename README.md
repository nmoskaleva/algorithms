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

- need order
- when you need fast access
