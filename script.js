const consoleContainer = document.querySelector(".console-container");
const clearButton = document.querySelector(".btn-destructive");
const questionButtons = document.querySelectorAll(".question-item .btn");

function print(message, type = "log") {
  const output = document.createElement("span");
  output.className = "console-output";

  if (type == "error") {
    output.style.color = "red";
    console.error(message);
  } else {
    console.log(message);
  }

  output.textContent = message;
  consoleContainer.appendChild(document.createElement("br"));
  consoleContainer.appendChild(output);
  consoleContainer.scrollTop = consoleContainer.scrollHeight;
}

clearButton.addEventListener("click", () => {
  consoleContainer.innerHTML = "";
  print(
    "✨ JavaScript Questions Ready! Click any 'Run Code' button to see the output.",
  );
  print("---------------------------------");
});

function question1() {
  const fullName = prompt("Enter your Full Name");
  const favoriteHobby = prompt("Enter your Favorite Hobby");
  print(
    "My Name is " + fullName + " & My Favorite Hobby is " + favoriteHobby + ".",
  );
}

function question2() {
  print(`Arthmetic Calculation :- ${45 * 2 - 10}`);
}

function question3() {
  print("Current Year :- " + new Date().getFullYear());
}

function question4() {
  const firstName = prompt("Enter your First Name");
  const lastName = prompt("Enter your Last Name");
  print("Your Full Name is :- " + firstName + " " + lastName);
}

function question5() {
  var age = 15;
  print("Before :- " + age);
  age = 25;
  print("After :- " + age);
}

function question6() {
  print(`Console.error("Error Message")`, "error");
}

function question7() {
  const number = Number(prompt("Enter A Number"));
  print("Square of " + number + " is " + number * number);
}

function question8() {
  const isValid = false;
  print("Boolean Variable :- " + isValid);
}

function question9() {
  const age = Number(prompt("Enter your Age"));
  print("Is age greater than 18? " + (age > 18));
}

function question10() {
  print(`Division of 100 by 0 is ${100 / 0}`);
}

function question11() {
  let defaultLanguage = "English";
  print("Variable Declared using let: " + defaultLanguage);
}

function question12() {
  const PI = 3.14;
  print("PI Value is " + PI);
}

function question13() {
  var age = 15;
  print("Before :- " + age);
  age = 25;
  print("After :- " + age);
}

function question14() {
  let value = null;
  print("Type of Null is : " + JSON.stringify(typeof value));
}

function question15() {
  const value = "25";
  print(
    "Value is " + value + " Type of Value is " + JSON.stringify(typeof value),
  );
}

function question16() {
  const isBool = true;
  print("Boolean Value Type is " + JSON.stringify(typeof isBool));
}

function question17() {
  const StringValue = "Harshit Jain";
  const NumberValue = 21;
  const BooleanValue = true;
  print(
    "String Value : " +
      StringValue +
      ", Number Value : " +
      NumberValue +
      ", Boolean Value : " +
      BooleanValue,
  );
}

function question18() {
  var value;
  print("Variable Without Value : " + JSON.stringify(typeof value));
}

function question19() {
  var value = undefined;
  print("Variable With Undefined Value : " + JSON.stringify(typeof value));
}

function question20() {
  const arr = [];
  print("Empty Array Value : " + JSON.stringify(arr));

  try {
    arr = [1, 2, 3, 4];
    print("Re-Assigning Array Value (1, 2, 3, 4) : " + JSON.stringify(arr));
  } catch (error) {
    print("Re-Assigning Array Value Error : " + error.message, "error");
  }

  arr.push(2);
  arr.push(5);
  print("Pushing New Array Value : " + JSON.stringify(arr));
}

function question21() {
  print("Printing Value From 1 to 50 using For.");
  for (let i = 1; i <= 50; i++) {
    print(i);
  }
}

function question22() {
  let sum = 0;
  let i = 1;

  while (i <= 10) {
    sum += i;
    i++;
  }
  print("Your Sum Value From 1 To 10 is " + sum);
}

function question23() {
  const value = "JavaScript";
  print("Printing characters using for...of");

  for (let char of value) {
    print(char);
  }
}

function question24() {
  let i = 1;
  print("Printing ODD Numbers Between 1 to 20.");
  while (i <= 20) {
    i++;
    if (i % 2 === 0) {
      continue;
    }
    print(i);
  }
}

function question25() {
  let i = 5;
  print("Printing Value From 5 To 1. Using Do While");
  do {
    print(i);
    i--;
  } while (i >= 1);
}

function question26() {
  let res = 1;
  for (let i = 1; i <= 5; i++) {
    res = res * i;
  }
  print("5 Factorial is : " + res);
}

function question29() {
  print("Printing Numbers From 1 to 100 Divisible By 5 Using While.");
  let i = 1;

  while (i <= 100) {
    if (i % 5 === 0) {
      print(i);
    }
    i++;
  }
}

function question30() {
  const object = {
    name: "Harshit",
    age: "21",
  };

  print("Printing Object Before For in");
  print(JSON.stringify(object));

  print("Printing Object { name, age } & Print Keys Using For in");
  for (let key in object) {
    print(key);
  }
}

function question31() {
  const number = Number(prompt("Enter a Number"));
  print("Check Your Number is Postive / Negative - " + number);
  if (number > 0) {
    print("Positive");
  } else {
    print("Negative");
  }
}

function question32() {
  const age = Number(prompt("Enter your Age"));

  print("Check Person's Age They're Minor / Major");
  if (age >= 18) {
    print("Adult");
  } else {
    print("Minor");
  }
}

function question33() {
  const value = Number(prompt("Enter a Value"));
  print("Check Even or Odd");

  if (value % 2 == 0) {
    print("Even, Your Value is " + value);
  } else {
    print("Odd Your Value is " + value);
  }
}

function question34() {
  const num1 = Number(prompt("Enter a Number 1"));
  const num2 = Number(prompt("Enter a Number 2"));

  print("Finding Greater Value Between 2 Numbers.");
  print("Your Number 1 Value is " + num1);
  print("Your Number 2 Value is " + num2);

  if (num1 > num2) {
    print("Number 1 Value is Greater Than Number 2");
  } else if (num1 == num2) {
    print("Number 1 & Number 2 Value is Equal");
  } else {
    print("Number 2 Value is Greater Than Number 1");
  }
}

function question35() {
  const score = Number(prompt("Enter your Score"));

  print("Score Grading");
  print("Your Score is : " + score);

  if (score >= 90) {
    print("Your Score Grading is : Excellent");
  } else if (score >= 70) {
    print("Your Score Grading is : Good");
  } else {
    print("Your Score Grading is : Needs Improvement");
  }
}

function question36() {
  const year = Number(prompt("Enter a Year"));
  print("Check Leap Year");

  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    print("Leap Year");
  } else {
    print("Not a Leap Year");
  }
}

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18,
  question19,
  question20,
  question21,
  question22,
  question23,
  question24,
  question25,
  question26,
  question29,
  question30,
  question31,
  question32,
  question33,
  question34,
  question35,
  question36,
  // question37,
  // question38,
  // question39,
  // question40,
  // question41,
  // question42,
  // question43,
  // question44,
  // question45,
  // question46,
  // question47,
  // question48,
  // question49,
  // question50,
];

questionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (questions[index]) {
      print(`Q${index + 1} - Output :-`);
      questions[index]();
      print("---------------------------------");
    } else {
      print(`Q${index + 1} - Output :-`);
      print("This question is not implemented yet.");
      print("---------------------------------");
    }
  });
});

print(
  "✨ JavaScript Questions Ready! Click any 'Run Code' button to see the output.",
);
print("---------------------------------");

const allDetails = document.querySelectorAll("#questions");

allDetails.forEach((details) => {
  details.addEventListener("toggle", (event) => {
    if (details.open) {
      allDetails.forEach((otherDetails) => {
        if (otherDetails !== details && otherDetails.open) {
          otherDetails.open = false;
        }
      });
    }
  });
});
