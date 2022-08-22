/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const navbar = `
<ul class="nav-list">
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
  <li><a href="#">Link</a></li>
</ul>
`;

const header = document.querySelector("header");

const newNav = document.createElement("nav");
newNav.classList.add("navbar");
newNav.setAttribute("id", "navbar");
newNav.innerHTML = navbar;

header.append(newNav);

const deskItems = ["mouse", "notebook", "water", "ring", "keyboard"];

deskItems.forEach(function (item) {
  if (item === "mouse") {
    console.log(item, "is outta here!");
    deskItems.splice(deskItems.indexOf(item), 1);
  }
});

console.log(deskItems);
