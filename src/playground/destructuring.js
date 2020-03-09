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

const book = {
  title: "Ego is the Enemy",
  Author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);
