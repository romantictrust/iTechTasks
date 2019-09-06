import "./style.css";
import APT from "./modules/ArrayProcessingTool.js";
import DDF from "./modules/DateDisplayFormatter.js";
import TF from "./modules/TextFormatter.js";
import SC from "./modules/StringCalculator.js";
import AS from "./modules/ArraySorter.js";
import BC from "./modules/BinaryConverter.js";
import CC from "./modules/CachingCalculator.js";

// Объекты классов с примерами входных данных
let apt1 = new APT([-1, 2, 3, -9]);
let ddf1 = new DDF("31102011", {
  inp: "EN",
  out: "EN",
  format: "Full",
  delimiter: "-"
});
let sc1 = new SC("(2)**3+12");
let as1 = new AS("1 2 3 4 5 1 2 3 4 5 5 4 3 2 1", {
  sortOption: "increase",
  sortType: "bubble"
});
let bc1 = new BC("112", { systemFrom: "10", systemTo: "16" });
let cc = new CC();

// APT
// applyOutput(0, 'O(n)', apt1.subSumOn());
// applyOutput(0, 'O(n^2)', apt1.subSumOnSquared())
// applyOutput(0, 'Min', apt1.minElement());
// applyOutput(0, 'Max', apt1.maxElement());
// applyOutput(0, 'Average', apt1.averageElement());
// applyOutput(0, 'Selection Task', apt1.risingSubsting([1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1]));

//DDF
// applyOutput(
//   1,
//   `DDFobject {${ddf1.options.inp},
//   ${ddf1.options.out},
//   ${ddf1.options.format},
//   ${ddf1.options.delimiter}}/`,
//   ddf1.result
// );

//SC
// applyOutput(3, "Calculation result", sc1.getResult(sc1.val));

//AS
// applyOutput(
//   4,
//   `ASobject {${as1.options.sortOption}, ${as1.options.sortType}}`,
//   as1.result
// );

//BC
// applyOutput(5, `BSobject {${bc1.options.systemFrom}, ${bc1.options.systemTo}}`, bc1.result);

const inp = document.querySelectorAll("input");
const btn = document.querySelectorAll("button");
const out = document.querySelectorAll("span");
const sel = document.querySelectorAll("select");
const txt = document.querySelectorAll("textarea");

// Добавляем листенеры на каждую кнопку
btn[0].addEventListener("click", inputWorkerAPT);
btn[1].addEventListener("click", inputWorkerDDF);
btn[2].addEventListener("click", inputWorkerTF);
btn[3].addEventListener("click", inputWorkerSC);
btn[4].addEventListener("click", inputWorkerAS);
btn[5].addEventListener("click", inputWorkerBC);
btn[6].addEventListener("click", inputWorkerCC);

// Листенереры
function inputWorkerAPT() {
  cleanUp(0);
  const str = getInputData(inp, 0);
  const apt = new APT();
  apt.verify(str);
  const arr = getNumbersArray(str);
  let result = apt.subSumOn(arr);
  let description = "O(n):";
  applyOutput(0, description, result);
  result = apt.subSumOnSquared(arr);
  description = "O(n^2):";
  applyOutput(0, description, result);
  result = apt.minElement(arr);
  description = "Min:";
  applyOutput(0, description, result);
  result = apt.maxElement(arr);
  description = "Max:";
  applyOutput(0, description, result);
  result = apt.averageElement(arr);
  description = "Average:";
  applyOutput(0, description, result);
  result = apt.risingSubsting(arr);
  description = "Rising substring:";
  applyOutput(0, description, result);
}

function inputWorkerDDF() {
  cleanUp(1);
  const str = getInputData(inp, 1);
  const options = getSelectOptions([0, 1, 2, 3]);
  const ddf = new DDF();
  ddf.verify(str, options.inp);
  const date = ddf.getDateObject(str, options);
  const result = ddf.getOutputData(date, options);
  const description = "Your date is:";
  applyOutput(1, description, result);
}

function inputWorkerTF() {
  cleanUp(2);
  const str = getInputData(txt, 0);
  const options = {};
  options["maxStrLen"] = getInputData(inp, 2);
  options["rowsNumber"] = getInputData(inp, 3);
  options["carryover"] = getInputData(inp, 4);
  const tf = new TF();
  tf.verify(options.maxStrLen);
  tf.verify(options.rowsNumber);
  const result = tf.getFormattedText(str, options);
  applyOutput(2, "", result);
}

function inputWorkerSC() {
  cleanUp(3);
  const str = getInputData(inp, 5);
  const sc = new SC();
  sc.verify(str);
  const result = sc.getResult(str);
  applyOutput(3, "Result is:", result);
}

function inputWorkerAS() {
  cleanUp(4);
  const str = getInputData(inp, 6);
  const options = getSelectOptions([4, 5]);
  const as = new AS();
  as.verify(str);
  const arr = getNumbersArray(str);
  const result = as.getSortedArr(arr, options);
  const description = "Sorted sring:";
  applyOutput(4, description, result);
}

function inputWorkerBC() {
  cleanUp(5);
  const str = getInputData(inp, 7);
  const options = getSelectOptions([6, 7]);
  let bc = new BC();
  bc.verify(str, options);
  const result = bc.getSystem(str, options);
  const description = "Convertered number:";
  applyOutput(5, description, result);
}

function inputWorkerCC() {
  cleanUp(6);
  const str = getInputData(inp, 8);
  cc.verify(str);
  const result = cc.getMemoized(str);
  const description = "Calculated:";
  applyOutput(6, description, result);
}

// Возвращает строку из input
function getInputData(inpType = inp, inpNum = 0) {
  if (inpType[inpNum].value) return inpType[inpNum].value;
}

// Возвращает массив опций из select
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
      document.createTextNode(`${description} ${element}  `)
    );
  });
}

// Выделяем массив чисел из строки
function getNumbersArray(str) {
  return str.split(" ").map(Number);
}
