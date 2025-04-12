//create a random number between 1and 6 dice
const dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//create object for car
const car={
    name:"Toyota",
    model:"Corolla",
    color:"White",
    year:2019,
}
console.log(car);
console.log(car.name);

//create an object and update the value of the object
const person={
    name:"cutie",
    age:21,
    city:"Delhi"
}
console.log(person);
person.city="New York";
person.age=22;
person.name="Riya";
person.country="USA";
console.log(person)