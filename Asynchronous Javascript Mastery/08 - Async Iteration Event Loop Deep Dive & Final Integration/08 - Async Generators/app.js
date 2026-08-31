// An async generator combines:
// async functions + generators.
//
// It can await asynchronous work
// and yield values one at a time.

async function* fetchPages() {
  for (let page = 1; page <= 3; page++) {
    console.log(`Loading page ${page}...`);

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    yield {
      page,
      items: [`Item ${page}-1`, `Item ${page}-2`],
    };
  }
}

// Consume the async generator.

async function showPages() {
  for await (const result of fetchPages()) {
    console.log(`Page ${result.page} loaded`);

    console.log(result.items);
  }

  console.log("All pages loaded");
}

showPages();

// Practical paginated API style example

async function* loadUsersByPage(totalPages) {
  for (let page = 1; page <= totalPages; page++) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`,
    );

    if (!response.ok) {
      throw new Error(`Failed to load page ${page}`);
    }

    const users = await response.json();

    yield {
      page,
      users,
    };
  }
}

async function consumeUsers() {
  try {
    for await (const result of loadUsersByPage(2)) {
      console.log(`Received page ${result.page}`);

      result.users.forEach((user) => {
        console.log(user.name);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

consumeUsers();
