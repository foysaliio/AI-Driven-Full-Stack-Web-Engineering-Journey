// Debouncing delays execution until
// repeated calls stop for a certain amount of time.

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Search example

function search(query) {
  console.log(`Searching API for: ${query}`);
}

const debouncedSearch = debounce(search, 500);

// Simulating rapid typing

debouncedSearch("F");

debouncedSearch("Fo");

debouncedSearch("Foy");

debouncedSearch("Foys");

debouncedSearch("Foysal");

// Only the final call should run
// after the user stops typing.

// Browser example

const searchInput = document.querySelector("#search");

const handleSearch = debounce((event) => {
  const query = event.target.value;

  console.log(`Send request for: ${query}`);
}, 500);

searchInput?.addEventListener("input", handleSearch);
