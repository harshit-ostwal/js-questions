const consoleContainer = document.querySelector(".console-container");
const clearButton = document.querySelector(".btn-destructive");
const questionButtons = document.querySelectorAll(".question-item .btn");

async function print(message) {
  const output = document.createElement("span");
  output.className = "console-output";

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

const questions = [];

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
