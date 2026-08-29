// fetch resolves with a Response object.
//
// The Response object contains information
// about the HTTP response.

async function inspectResponse() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log(response);

  console.log(`Status: ${response.status}`);

  console.log(`Status Text: ${response.statusText}`);

  console.log(`OK: ${response.ok}`);

  console.log(`URL: ${response.url}`);

  console.log(`Redirected: ${response.redirected}`);

  console.log(`Response Type: ${response.type}`);

  const data = await response.json();

  console.log(data);
}

inspectResponse();

// response.ok is true when the status
// is normally between 200 and 299.

async function checkResponse() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  if (response.ok) {
    console.log("Request seccessful");
  } else {
    console.log("Request failed");
  }
}

checkResponse();
