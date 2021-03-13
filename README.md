# JAVASCRIPT ALGORITHMS

## BIG-O NOTATION

a tool used to analyze the cost of an algorithm. Big O describes the complexity of your code using algebraic terms.

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
