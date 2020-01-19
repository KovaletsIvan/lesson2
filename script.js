// task 1
//1
var x = 1;
var y = 2;
var rest1 = x + "" + y;
console.log(rest1);
console.log(typeof rest1);

// 2
var x = 1;
var y = 2;
var rest2 = (x == 1) + "2";
console.log(rest2);
console.log(typeof rest2);

// 3
var x = 1;
var y = 2;
var rest3 = x < y;
console.log(rest3);
console.log(typeof rest3);

// 4
var x = 1;
var y = "n";
var rest4 = x - y;
console.log(rest4);
console.log(typeof rest4);

// task 2
var num = prompt("Enter Your number", "Number");
var positiv = num % 2;
var seven = num % 7;
if (num < 0) {
  console.log("The number is negativ");
}
if (seven == 0) {
  console.log("Your number is multiple of 7");
}
if (positiv == 0) {
  console.log("Your number is multiple of 2");
} else {
  console.log("Your number is not multiple of 2");
}

// task3
var age = confirm("Are you an adult ?");
var isAdult = prompt("Pleas enter your age", "Age");
if (isAdult >= 18) {
  console.log("You have reached the age of majority!");
}
if (isAdult <= 10) {
  console.log("Yuo are too young!");
}
if (isAdult >= 100) {
  console.log("Really?!");
}

// task 4
var a = prompt("Pleas enter the first side langth of triangle ", "a");
var b = prompt("Pleas enter the second side langth of triangle ", "b");
var c = prompt("Pleas enter the third side langth of triangle ", "c");
a = +a;
b = +b;
c = +c;
var p, S;
if (a < 0 || b < 0 || c < 0) {
  console.log("Incorrect Data!");
}
p = (a + b + c) / 2;
S = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
if (S > 0) {
  console.log(S.toFixed(3));
} else {
  console.log("It is impossible to builde triangle by your data");
}
if (
  ((a * a + b * b) ** (1 / 2)).toFixed(2) == c ||
  ((b * b + c * c) ** (1 / 2)).toFixed(2) == a ||
  ((a * a + c * c) ** (1 / 2)).toFixed(2) == b
) {
  console.log("It is right triangle");
}

// Task 5

// 1
var date = new Date();
var time = date.getHours();
if (time <= 23 && time <= 5) {
  console.log("Good night");
}
if (time > 5 && time <= 11) {
  console.log("Good morning");
}
if (time > 11 && time <= 17) {
  console.log("Good afternoon");
}
if (time > 17 && time < 23) {
  console.log("Good evening");
}

// 2
switch (time) {
  case 1:
    console.log("Good Night");
    break;
  case 2:
    console.log("Good Night");
    break;
  case 3:
    console.log("Good Night");
    break;
  case 4:
    console.log("Good Night");
    break;
  case 5:
    console.log("Good Night");
    break;
  case 6:
    console.log("Good Morning");
    break;
  case 7:
    console.log("Good Morning");
    break;
  case 8:
    console.log("Good Morning");
    break;
  case 9:
    console.log("Good Morning");
    break;
  case 10:
    console.log("Good Morning");
    break;
  case 11:
    console.log("Good Morning");
    break;
  case 12:
    console.log("Good Afternoon");
    break;
  case 13:
    console.log("Good Afternoon");
    break;
  case 14:
    console.log("Good Afternoon");
    break;
  case 15:
    console.log("Good Afternoon");
    break;
  case 16:
    console.log("Good Afternoon");
    break;
  case 17:
    console.log("Good Afternoon");
    break;
  case 18:
    console.log("Goog Evening");
    break;
  case 19:
    console.log("Goog Evening");
    break;
  case 20:
    console.log("Goog Evening");
    break;
  case 21:
    console.log("Goog Evening");
    break;
  case 22:
    console.log("Goog Evening");
    break;
  case 23:
    console.log("Goog Evening");
    break;
  case 00:
    console.log("Goog Hight");
    break;
}

// Task 6

var arr = [];
arr = [7, "Jhon", true, null];
console.log(arr.length);

var info = prompt("Pleas enter any data", "Input");
arr[5] = info;
console.log(arr);
console.log(arr.length);

/*arr.push(info);
console.log(arr);*/
