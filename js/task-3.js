
// TASK 3:
function filterArray(numbers, value) {
  let filteredArray = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > value) {
      filteredArray.push(currentNumber);
    }
  }

  return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Виклик функції filterArray() з випадковим масивом і числом
const randomArray = [8, 15, 3, 10, 22, 17];
const randomValue = 12;
console.log(filterArray(randomArray, randomValue));