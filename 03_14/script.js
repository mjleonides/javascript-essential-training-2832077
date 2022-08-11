/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

/* console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge()); */


const book_1 = new Book(
  "Deep Work",
  "Cal Newton",
  2012,
  357,
  true
)

const book_2 = new Book(
  "Resilient Web Design",
  "Jeremy Keith",
  2016,
  200,
  true
)

const book_3 = new Book(
  "1984",
  "George Orwell",
  1949,
  328,
  true
)

const book_4 = new Book(
  "Animal Farm",
  "George Orwell",
  1945,
  112,
  true
)

const book_5 = new Book(
  "To Kill A Mockingbird",
  "Harper Lee",
  1960,
  281,
  true
)

console.log(book_5);
book_5.updateReadStatus(false);
console.log(book_5);