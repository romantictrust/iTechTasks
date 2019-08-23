import "./style.css";
import APT from "./modules/T1_APT.js";

const inp = document.querySelector(".T1_APT input");
const btn = document.querySelector(".T1_APT button");
const out = document.querySelector(".T1_APT .out span");

let aptExpample = new APT();

applyOutput(aptExpample.subSumOn([-1, 2, 3, -9]))

btn.addEventListener("click", inputWorker);

function getInputData() {
  if (inp.value) return inp.value;
}

// Удаляем предыдущий output
function cleanUp() {
  while (out.firstChild) out.removeChild(out.firstChild);
}

// Применяем выходные данные в блок output
function applyOutput(...outArgs) {
  outArgs.map(element => {
    out.appendChild(document.createTextNode(`${element}  `));
  });
}

function getNumbersArray(str) {
  return str.split(" ").map(Number);
}

function inputWorker() {
  cleanUp();
  const str = getInputData();
  const arr = getNumbersArray(str);
  let aptExpample = new APT();
  const result = aptExpample.subSumOn(arr);
  applyOutput(result);

  // applyOutput(`O(n):${subSumOn(arr)}`);
  // applyOutput(`O(n**2):${subSumOnSquared(arr)}`);
  // applyOutput(`Min:${minElement(arr)}`);
  // applyOutput(`Max:${maxElement(arr)}`);
  // applyOutput(`Average:${averageElement(arr)}`);
}
