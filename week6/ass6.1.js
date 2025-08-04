/********************************************************************
*  Mini Utility Toolkit – JavaScript Functions
*  Copy-paste any block below into the console to see it run live!
********************************************************************/

// ---------- Part A: String Toolkit ----------

// 1. countVowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let ch of str) if (vowels.includes(ch)) count++;
  return count;
}
console.log('countVowels("Hello World") =>', countVowels("Hello World")); // 3

// 2. isPalindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
console.log('isPalindrome("madam") =>', isPalindrome("madam")); // true
console.log('isPalindrome("RaceCar") =>', isPalindrome("RaceCar")); // true
console.log('isPalindrome("hello") =>', isPalindrome("hello")); // false

// 3. reverseWords
function reverseWords(str) {
  return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}
console.log('reverseWords("hello world") =>', reverseWords("hello world")); // "olleh dlrow"
console.log('reverseWords("JavaScript is fun") =>', reverseWords("JavaScript is fun")); // "tpircSavaJ si nuf"

// ---------- Part B: Number Utilities ----------

// 4. isPrime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
console.log('isPrime(11) =>', isPrime(11)); // true
console.log('isPrime(4) =>', isPrime(4));   // false
console.log('isPrime(1) =>', isPrime(1));   // false

// 5. generateFibonacci
function generateFibonacci(n) {
  const fib = [];
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    fib.push(a);
    [a, b] = [b, a + b];
  }
  return fib;
}
console.log('generateFibonacci(7) =>', generateFibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// 6. findMax
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > max) max = arr[i];
  return max;
}
console.log('findMax([3, 7, 2, 9, 5]) =>', findMax([3, 7, 2, 9, 5])); // 9

// ---------- Part C: Logic-Based Functions ----------

// 7. gradeCalculator
function gradeCalculator(marks) {
  if (marks >= 80) return 'A';
  if (marks >= 60) return 'B';
  if (marks >= 40) return 'C';
  return 'F';
}
console.log('gradeCalculator(95) =>', gradeCalculator(95)); // A
console.log('gradeCalculator(73) =>', gradeCalculator(73)); // B
console.log('gradeCalculator(45) =>', gradeCalculator(45)); // C
console.log('gradeCalculator(20) =>', gradeCalculator(20)); // F

// 8. daysUntilWeekend
function daysUntilWeekend(day) {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const index = days.indexOf(day.toLowerCase());
  return index === -1 ? NaN : (6 - index) % 7;
}
console.log('daysUntilWeekend("Monday") =>', daysUntilWeekend("Monday")); // 5
console.log('daysUntilWeekend("Friday") =>', daysUntilWeekend("Friday"));   // 1
console.log('daysUntilWeekend("Saturday") =>', daysUntilWeekend("Saturday")); // 0

// ---------- Part D: Function Composition ----------

// 9. createGreeting
function createGreeting(time) {
  return name => `Good ${time}, ${name}`;
}
const morningGreet = createGreeting("morning");
console.log(morningGreet("James")); // Good morning, James
const eveningGreet = createGreeting("evening");
console.log(eveningGreet("Ana"));   // Good evening, Ana

// 10. calculator
function calculator(operation) {
  const ops = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  return ops[operation.toLowerCase()];
}
console.log('calculator("multiply")(6, 7) =>', calculator("multiply")(6, 7)); // 42
console.log('calculator("divide")(10, 2) =>', calculator("divide")(10, 2));  
 // 5
// ---------- Bonus: Task Runner ----------
// function taskRunner(tasks) {
//   return tasks.map(fn => fn());
// }
// const tasks = [() => 2 + 2, () => "Hello", () => isPrime(11)];
// console.log('taskRunner([...]) =>', taskRunner(tasks));