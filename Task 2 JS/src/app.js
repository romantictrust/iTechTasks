import "./style.css";
import APT from "./modules/T1_APT.js";
import DDF from "./modules/T2_DDF.js";

const inp = document.querySelector(".T1_APT input");
const btn = document.querySelector(".T1_APT button");
const out = document.querySelector(".T1_APT .out span");

let apt = new APT();

// APT
// applyOutput('O(n)', apt.subSumOn([-1, 2, 3, -9]))
// applyOutput('O(n^2)', apt.subSumOnSquared([-1, 2, 3, -9]))
// applyOutput('Min', apt.minElement([-1, 2, 3, -9]));
// applyOutput('Max', apt.maxElement([-1, 2, 3, -9]));
// applyOutput('Average', apt.averageElement([-1, 2, 3, -9]));
// applyOutput('Selection Task', apt.risingSubsting([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]))


btn.addEventListener("click", inputWorker);

function getInputData() {
  if (inp.value) return inp.value;
}

// Удаляем предыдущий output
function cleanUp() {
  while (out.firstChild) out.removeChild(out.firstChild);
}

// Применяем выходные данные в блок output
function applyOutput(description = "result", ...outArgs) {
  outArgs.map(element => {
    out.appendChild(document.createTextNode(`${description}: ${element}  `));
  });
}

function getNumbersArray(str) {
  return str.split(" ").map(Number);
}

function inputWorker() {
  cleanUp();
  const str = getInputData();
  const arr = getNumbersArray(str);
  const result = apt.risingSubsting(arr);
  const description = "Rising substring";
  applyOutput(description, result);
}
