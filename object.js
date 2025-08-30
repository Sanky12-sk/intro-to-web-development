// Using Object Literals
const person1 = {
  name: "John",
  age: 30,
  profession: "Developer"
};

// Using Constructor Function
function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}
const person2 = new Person("Jane", 25, "Designer");

// Using Object.create() Method
const person3 = Object.create(null);
person3.name = "Mike";
person3.age = 35;
person3.profession = "Engineer";

console.log(person1.name); // Output: John
console.log(person2["age"]); // Output: 25
console.log(person3)