// Promise callbacks are microtasks.
// Timer callbacks are regular tasks.
//
// Microtasks are processed before the next regular task.

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Output:
//
// A
// D
// C
// B

// More detailed example

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");

    return Promise.resolve();
  })
  .then(() => {
    console.log("4");
  });

console.log("5");

// Output:
//
// 1
// 5
// 3
// 4
// 2

// A microtask can schedule another microtask.

Promise.resolve().then(() => {
  console.log("Microtask A");

  Promise.resolve().then(() => {
    console.log("Microtask B");
  });
});

setTimeout(() => {
  console.log("Timer");
}, 0);

// Output:
//
// Microtask A
// Microtask B
// Timer
