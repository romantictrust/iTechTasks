import "./style.css";
import APT from "./modules/T1_APT.js";
import DDF from "./modules/T2_DDF.js";

let apt = new APT([-1, 2, 3, -9]);
let ddf = new DDF([]);

// APT
// applyOutput(0, 'O(n)', apt.subSumOn());
// applyOutput(0, 'O(n^2)', apt.subSumOnSquared())
// applyOutput(0, 'Min', apt.minElement());
// applyOutput(0, 'Max', apt.maxElement());
// applyOutput(0, 'Average', apt.averageElement());
// applyOutput(0, 'Selection Task', apt.risingSubsting([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));

const inp = document.querySelectorAll("input");
const btn = document.querySelectorAll("button");
const out = document.querySelectorAll("span");
const sel = document.querySelectorAll("select");

btn[0].addEventListener("click", inputWorkerAPT);
btn[1].addEventListener("click", inputWorkerDDF);

function inputWorkerAPT() {
  cleanUp(0);
  const str = getInputData(0);
  apt.verify(str);
  const arr = getNumbersArray(str);
  const result = apt.risingSubsting(arr);
  const description = "Rising substring";
  applyOutput(0, description, result);
}

function inputWorkerDDF() {
  cleanUp(1);
  const str = getInputData(1);
  const options = getSelectOptions([0, 1, 2, 3]);
  ddf.verify(str, options.Inp);
  const date = ddf.getDateObject(str, options);
  const result = ddf.getOutputData(date, options);
  const description = "Your date is";
  applyOutput(1, description, result);
}

function getInputData(inpNum = 0) {
  if (inp[inpNum].value) return inp[inpNum].value;
}

function getSelectOptions(optionsArr) {
  const options = {};
  optionsArr.map(el => {
    options[sel[el].name] = sel[el].value;
  });
  return options;
}

// Удаляем предыдущий output
function cleanUp(outNum = 0) {
  while (out[outNum].firstChild)
    out[outNum].removeChild(out[outNum].firstChild);
}

// Применяем выходные данные в блок output
function applyOutput(outNum, description = "result", ...outArgs) {
  const out = document.querySelectorAll("span");
  outArgs.map(element => {
    out[outNum].appendChild(
      document.createTextNode(`${description}: ${element}  `)
    );
  });
}

function getNumbersArray(str) {
  return str.split(" ").map(Number);
}
