// HTTP status codes describe
// the result of an HTTP request.

async function checkStatus(url) {
  const response = await fetch(url);

  console.log(`Status: ${response.status}`);

  if (response.status >= 200 && response.status < 300) {
    console.log("Successful request");
  } else if (response.status === 404) {
    console.log("Resource not found");
  } else if (response.status >= 500) {
    console.log("Server error");
  } else {
    console.log("Other HTTP response");
  }
}

checkStatus("https://jsonplaceholder.typicode.com/posts/1");

// response.ok is usually simpler.

async function getPost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json();
}

getPost(1)
  .then((post) => {
    console.log(post);
  })
  .catch((error) => {
    console.log(error.message);
  });

// Common status code categories:
//
// 1xx → Informational
// 2xx → Success
// 3xx → Redirection
// 4xx → Client Error
// 5xx → Server Error
//
// Common examples:
//
// 200 → OK
// 201 → Created
// 204 → No Content
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error
