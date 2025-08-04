
/******************************************************************
 * 1. Multiplication Table Generator (for loop)
 ******************************************************************/
function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

/******************************************************************
 * 2. Count-down Timer (while loop)
 ******************************************************************/
function countDown(start) {
  let current = start;
  while (current >= 0) {
    console.log(current);
    current--;
  }
  console.log("Blast off!");
}

/******************************************************************
 * 3. Password Prompt Simulator (do…while loop)
 ******************************************************************/
function passwordPromptSimulator(correctPassword = "javascript") {
  // Simulate user attempts with a hard-coded array
  const attempts = ["1234", "letmein", "javascript"];
  let index = 0;

  do {
    const guess = attempts[index];
    index++;
    if (guess === correctPassword) {
      console.log(`Attempt ${index}: Access granted!`);
      break;
    } else {
      console.log(`Attempt ${index}: Incorrect password`);
    }
  } while (index < attempts.length);
}

/******************************************************************
 * 4. Prime Number Checker (for loop)
 ******************************************************************/
function isPrime(n) {
  if (n < 2) return console.log("Not Prime");

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("Not Prime");
      return;
    }
  }
  console.log("Prime");
}

/******************************************************************
 * Quick sanity checks – uncomment to run
 ******************************************************************/
// printMultiplicationTable(7);
// countDown(5);
// passwordPromptSimulator();
// isPrime(29);