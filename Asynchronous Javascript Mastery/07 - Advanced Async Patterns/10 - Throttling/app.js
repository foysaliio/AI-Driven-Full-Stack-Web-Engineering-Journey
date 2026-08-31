// Throttling limits how frequently
// a function can execute.
//
// Unlike debounce, it can continue executing
// at controlled intervals while events continue.

function throttle(callback, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) {
      return;
    }

    canRun = false;

    callback(...args);

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

// Example

function trackScroll() {
  console.log("Scroll position tracked");
}

const throttledScroll = throttle(trackScroll, 1000);

// Simulating many events

throttledScroll();
throttledScroll();
throttledScroll();
throttledScroll();

// Browser example

const handleScroll = throttle(() => {
  console.log(`Scroll Y: ${window.scrollY}`);
}, 500);

window.addEventListener("scroll", handleScroll);

// Common use cases:
//
// scroll events
// mouse movement
// analytics
// resize tracking
