/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  let subject = ["A friend", "My cat", "The doctor", "My sister", "I"];
  let action = ["crashed", "peed", "cancelled", "lost", "dropped"];
  let what = ["my car", "the book", "the appointment", "the book", "the phone"];
  let when = [
    " last night ",
    " before class ",
    " yesterday ",
    " this weekend ",
    " this morning "
  ];

  let subIndex = Math.floor(Math.random() * subject.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let result =
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whatIndex];
  return result;
}

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = generateExcuse();
};

console.log("Hello Rigo from the console!");
