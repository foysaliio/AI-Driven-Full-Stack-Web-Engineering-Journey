// Sometimes we have many asynchronous tasks.
//
// Running every task at once may not always
// be the best choice for a real server.

function processItem(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Processed item: ${item}`);

      resolve(item * 2);
    }, 500);
  });
}

const items = [1, 2, 3, 4, 5, 6];

// Process all items concurrently.

const processAll = async () => {
  const promises = items.map((item) => {
    return processItem(item);
  });

  const results = await Promise.all(promises);

  console.log(results);
};

processAll();

// Process items in smaller batches.

async function processInBatches(items, batchSize) {
  const results = [];

  for (let index = 0; index < items.length; index += batchSize) {
    const batch = items.slice(index, index + batchSize);

    console.log(`Processing batch: ${batch}`);

    const batchResults = await Promise.all(
      batch.map((item) => {
        return processItem(item);
      }),
    );

    results.push(...batchResults);
  }

  return results;
}

processInBatches(items, 2).then((results) => {
  console.log("All batch results:");

  console.log(results);
});
