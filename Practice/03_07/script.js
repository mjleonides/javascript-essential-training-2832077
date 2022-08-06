/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const dog1 = {
  name: "Olive",
  color: "golden",
  legsNum: 4,
  earsNum: 2,
  favoritePerson: {
    name: "Kenzie",
  },
};
const dog2 = {
  name: "Sage",
  color: "white",
  legsNum: 4,
  earsNum: 2,
  favoritePerson: {
    name: "Taylor",
  },
};
const dog3 = {
  name: "Tucker",
  color: "black",
  legsNum: 4,
  earsNum: 2,
  favoritePerson: {
    name: "Courtney",
  },
};

let dogs = [dog1, dog2, dog3];
let i = 0;

function dogPersons() {
  let currentDog = dogs[i];

  console.log(
    currentDog.name,
    "'s favorite person is",
    currentDog.favoritePerson.name
  );

  i += 1;
}

dogs.forEach(dogPersons);
