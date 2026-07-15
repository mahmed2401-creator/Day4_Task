///// Part A /////

//1
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "White"
};

console.log(car);

//2
console.log(car.brand);
console.log(car["year"]); 


//3
car.color = "black";
car.price = 500000;

console.log(car);

//4
delete car.year;

console.log(car.year);//the result (undefined) becuse delete year property

//5
const student = {
  "student-name": "Sara",
  age: 20
};

console.log(student["student-name"]);

//6
const book = {
  title: "JavaScript Basics",
  author: {
    firstName: "John",
    lastName: "Smith"
  }
};

console.log(book.author.lastName);

//7
const person = {
  name: "Ali",
  age: 25,
  city: "Cairo"
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));


//8
const settings = {
  theme: "dark",
  lang: "en"
};

Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings);//not change becuse (freeze) not allow modify in object

///// Part B /////

//9
const cities = ["Cairo", "Alex", "Giza", "Luxor", "Aswan"];

console.log(cities);
console.log(cities.length);

//10
console.log(cities[0]); 
console.log(cities[1]); 
console.log(cities[cities.length - 1]); 

//11
cities.push("Fayoum");
console.log(cities);

cities.unshift("Mansoura");
console.log(cities);

//12
cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

//13
const skills = ["HTML", "CSS", "JS", "React"];

console.log(skills.indexOf("JS"));
console.log(skills.includes("Python"));

//14
const items = ["pen", "book", "bag"];

items.forEach((item, index) => {
  console.log(index, item);
});

//15
const colors = ["red", "green", "blue", "yellow"];

for (const color of colors) {
  if (color === "blue") {
    break;
  }

  console.log(color);
}

//16
const letters = ["A", "B", "C"];

letters.push("D");
letters.push("E");

letters.shift();

console.log(letters);
console.log(letters.length);

///// Part C /////

//17
const fruits = ["apple", "banana", "cherry"];

const upper = fruits.map((fruit) => fruit.toUpperCase());

console.log(upper);
console.log(fruits);

//18
const nums = [10, 55, 30, 80, 45, 90];

const result = nums.filter((num) => num > 50);

console.log(result);

//19
const cities = ["Cairo", "Giza", "Alex", "Aswan"];

const city = cities.find((c) => c.startsWith("A"));
const index = cities.findIndex((c) => c.startsWith("A"));

console.log(city);
console.log(index);

//20
const letters = ["a", "b", "c", "d", "e"];

const copy = letters.slice(1, 4);

console.log(copy);
console.log(letters);

//21
const words = ["one", "two", "three", "four", "five"];

const removed = words.splice(1, 2);

console.log(removed);
console.log(words);

//22
const numbers = [40, 100, 1, 5, 25];

numbers.sort((a, b) => a - b);

console.log(numbers);

//23
const ages = [16, 21, 17, 19];

const hasAdult = ages.some((age) => age >= 18);
const allAdults = ages.every((age) => age >= 18);

console.log(hasAdult);
console.log(allAdults);

//24
const numbers = [5, 10, 15, 20];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);

///// Part D /////


//25
const students = [
  { name: "Omar", grade: 80 },
  { name: "Mona", grade: 90 },
  { name: "Ali", grade: 70 }
];

students.forEach((student) => {
  console.log(`${student.name} : ${student.grade}`);
});

//26
const result = students
  .filter((student) => student.grade >= 80)
  .map((student) => student.name);

console.log(result);

//27
const products = [
  { name: "Pen", price: 10 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 25 }
];

const total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total);

//28
const arr = ["js", "html", "css", "js", "react", "js"];

const count = arr.filter((item) => item === "js").length;

console.log(count);

//29
const classroom = {
  teacher: "Ahmed",
  students: ["Omar", "Mona", "Ali", "Sara"]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

//30
const products = [
  { id: 1, title: "Pen", price: 10 },
  { id: 2, title: "Book", price: 50 },
  { id: 3, title: "Bag", price: 25 }
];
//A)
const titles = products.map((product) =>
  product.title.toUpperCase()
);

console.log(titles);
//B)
const cheapProducts = products.filter(
  (product) => product.price < 30
);

console.log(cheapProducts);

//C)
const total = products.reduce(
  (sum, product) => sum + product.price,
  0
);

console.log(total);
