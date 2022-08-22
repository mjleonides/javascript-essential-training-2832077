/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function classGunDec() {
  document.querySelector("main").classList.toggle("active");
}

const classGunExp = function () {
  document.querySelector("main").classList.toggle("active");
};

const classGunArrow = () => {
  document.querySelector("main").classList.toggle("active");
};
