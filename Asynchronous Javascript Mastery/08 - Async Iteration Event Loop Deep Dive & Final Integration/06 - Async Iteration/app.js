// An asynchronous iterable can produce values
// over time instead of providing everything immediately.

const asyncNumbers = {
  current: 1,
  max: 3,

  [Symbol.asyncIterator]() {
    return this;
  },

  async next() {
    if (this.current > this.max) {
      return {
        done: true,
        value: undefined,
      };
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    return {
      done: false,
      value: this.current++,
    };
  },
};

// We can manually use the async iterator.

async function readValues() {
  const iterator = asyncNumbers[Symbol.asyncIterator]();

  console.log(await iterator.next());

  console.log(await iterator.next());

  console.log(await iterator.next());

  console.log(await iterator.next());
}

readValues();

// Each next() call returns a Promise.
//
// Promise resolves to:
//
// {
//   value: ...,
//   done: false
// }
//
// Final result:
//
// {
//   value: undefined,
//   done: true
// }
