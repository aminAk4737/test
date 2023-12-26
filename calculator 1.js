"use strict";
// ساخت متغیر برای هر تگ
const input = document.getElementById("input");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const minus = document.getElementById("minus");
const add = document.getElementById("add");
const multiple = document.getElementById("multiple");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");
const ch = document.getElementById("cH");
const history = document.getElementById("history");
let h = [];
let result;

// ساخت توابع برای  اکشن دار شدن هر دکمه
one.onclick = (event) => (input.value += 1);
two.onclick = (event) => (input.value += 2);
three.onclick = (event) => (input.value += 3);
four.onclick = (event) => (input.value += 4);
five.onclick = (event) => (input.value += 5);
six.onclick = (event) => (input.value += 6);
seven.onclick = (event) => (input.value += 7);
eight.onclick = (event) => (input.value += 8);
nine.onclick = (event) => (input.value += 9);
zero.onclick = (event) => (input.value += 0);
minus.onclick = (event) => (input.value += "-");
add.onclick = (event) => (input.value += "+");
dot.onclick = (event) => (input.value += ".");
history.onclick = (event) => (input.value = h);
multiple.onclick = (event) => (input.value += "*");
divide.onclick = (event) => (input.value += "/");
clear.onclick = (event) => (input.value = "");
ch.onclick = (event) => {
  h = [];
  input.value = "";
};
equal.onclick = (event) => {
  result = input.value + "=" + eval(input.value) + "/";
  h.push(result);
  input.value = eval(input.value);
};

document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    input.value += 0;
  }
  if (event.key === "1") {
    input.value += 1;
  }
  if (event.key === "2") {
    input.value += 2;
  }
  if (event.key === "3") {
    input.value += 3;
  }
  if (event.key === "4") {
    input.value += 4;
  }
  if (event.key === "5") {
    input.value += 5;
  }
  if (event.key === "6") {
    input.value += 6;
  }
  if (event.key === "7") {
    input.value += 7;
  }
  if (event.key === "8") {
    input.value += 8;
  }
  if (event.key === "9") {
    input.value += 9;
  }
  if (event.key === "+") {
    input.value += "+";
  }
  if (event.key === "*") {
    input.value += "*";
  }
  if (event.key === "-") {
    input.value += "-";
  }
  if (event.key === "/") {
    input.value += "/";
  }
  if (event.key === "=") {
    result = input.value + "=" + eval(input.value) + "/";
    h.push(result);
    input.value = eval(input.value);
  }
  if (event.key === "Enter") {
    result = input.value + "=" + eval(input.value) + "/";
    h.push(result);
    input.value = eval(input.value);
  }
  if (event.key === "Backspace") {
    input.value = "";
  }
  if (event.key === ".") {
    input.value += ".";
  }
  if (event.key === "h") {
    input.value = h;
  }
  if (event.key === "c") {
    h = [];
    input.value = "";
  }
});
