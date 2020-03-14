//
// Object Destructuring
//

// const person = {
//   name: "Alex",
//   age: 26,
//   location: {
//     city: "Sydney",
//     temp: 28
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   Author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;
// console.log(publisherName);

//
// Array Destructuring
//

const address = ["1299 S Juniper Street", "Sydney", "NSW", "2009"];
const [, city, state = "QLD"] = address;
console.log(`You are in ${city} ${state}`);

const item = ["coffee (hot)", "$2.00", "$2.55", "$2.75"];
const [menuItem, , medPrice] = item;
console.log(`A medium ${menuItem} costs ${medPrice}`);
