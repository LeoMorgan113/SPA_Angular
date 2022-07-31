let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = numberArray.filter(value => value%2==0 );
console.log("Array of numbers: ", numberArray);
console.log("Filtered array of numbers: ",newArray);

let shoppingList = ['eggs', 'bread', 'yogurt', 'rice'];
let filteredList = shoppingList.filter(value => value.includes('rice'));
console.log("Shopping list: ", shoppingList);
console.log("Filtered shopping list: ", filteredList);