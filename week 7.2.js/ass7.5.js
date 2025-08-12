function checkEvenNumber(n) {
  return new Promise((res, rej) => {
    // It's best practice to reject with an Error object.
    if (n % 2 === 0) {
      res("Even, like my pizza slices");
    } else {
      rej(new Error("Odd, like my neighbour's cat"));
    }
  });
}

checkEvenNumber(4).then(console.log).catch(err => console.error(err.message));
checkEvenNumber(7).then(console.log).catch(err => console.error(err.message));

function getUserData() {
  return new Promise(res => setTimeout(() => res({ name: "Alice", age: 25 }), 2000));
}

function getPostsByUser(name) {
  return new Promise(res => setTimeout(() => res([`${name} spilled coffee ☕`, `${name} found socks 🧦`]), 1000));
}

getUserData()
  .then(({ name }) => getPostsByUser(name))
  .then(posts => console.log("Chained results:", posts))
  .catch(error => console.error("Error in chain:", error));


Promise.all([
  new Promise(r => setTimeout(() => r("1s burp"), 1000)),
  new Promise(r => setTimeout(() => r("2s sneeze"), 2000)),
  new Promise(r => setTimeout(() => r("3s yawn"), 3000))
]).then(results => console.log("Promise.all results:", results))
  .catch(error => console.error("Error in Promise.all:", error));


(async () => {
  try {
    const { name } = await getUserData();
    const posts = await getPostsByUser(name);
    console.log("Async/await results:", posts);
  } catch (error) {
    console.error
  }
})();