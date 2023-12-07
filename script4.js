/* Problem 1
Object Manipulation:

Create an object representing a person with properties like name, age, and country.
Write a function to print out all the person's properties in the object. */

function personDetails(person) {
  return `Name : ${person.names}, Age : ${person.age}, Country : ${person.country}`;
}

const person = {
  names: "Abir Hasan",
  age: 23,
  country: "Switzerland",
};

let PrintResult = personDetails(person);
console.log(PrintResult);

/* problem 2 
Looping Through an Object:

Given an object with various properties, write a function that loops through the object and prints out the key-value pairs. */

function printObject(obj) {
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

const user = {
  name: "Abraham",
  age: 30,
  city: "New York",
};

printObject(user);

/* problem-3
Array of Objects:

Create an array of objects where each object represents a book with properties like title, author, and published year.
Write a function that takes this array and prints out the titles of all the books published after a certain year. */

const books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

function printBooksAfterYear(books, year) {
  const filteredBooks = books.filter((book) => book.year > year);
  filteredBooks.forEach((book) => console.log(book.title));
}

printBooksAfterYear(books, 1940);

/* problem-4
Function as a Parameter:

Write a function that takes two parameters: an array of numbers and a function. Apply the function to each element in the array and return the modified array. */

function applyFunctionToNumbers(numbers, func) {
  return numbers.map(func);
}

const numbers = [1, 2, 3, 4, 5];

function double(number) {
  return number * 2;
}

const doubledNumbers = applyFunctionToNumbers(numbers, double);
console.log(doubledNumbers);

/* problem-5
Object Constructor:

Create a constructor function for a 'Person' object with properties like name, age, and a method to get a greeting.
Create instances of this object and call the greeting method. */

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  };
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet();
person2.greet();
