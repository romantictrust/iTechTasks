import "./style.css";
import APT from "./modules/T1_APT.js";
import DDF from "./modules/T2_DDF.js";
import TF from "./modules/T3_TF.js";
import SC from "./modules/T4_SC.js";
import AS from "./modules/T5_AS.js";

let apt1 = new APT([-1, 2, 3, -9]);
let ddf1 = new DDF("31102011", {
  inp: "EN",
  out: "EN",
  format: "Full",
  delimiter: "-"
});
let sc1 = new SC("(2)**3+12");

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
//   `DDFobject: ${ddf1.options.inp}
//   ${ddf1.options.out}
//   ${ddf1.options.format}
//   ${ddf1.options.delimiter}`,
//   ddf1.result
// );

//SC
// applyOutput(3, "Calculation result", sc1.getResult(sc1.val));

//AS

const inp = document.querySelectorAll("input");
const btn = document.querySelectorAll("button");
const out = document.querySelectorAll("span");
const sel = document.querySelectorAll("select");
const txt = document.querySelectorAll("textarea");

btn[0].addEventListener("click", inputWorkerAPT);
btn[1].addEventListener("click", inputWorkerDDF);
btn[2].addEventListener("click", inputWorkerTF);
btn[3].addEventListener("click", inputWorkerSC);
btn[4].addEventListener("click", inputWorkerAS);

function inputWorkerAPT() {
  cleanUp(0);
  const str = getInputData(inp, 0);
  const apt = new APT();
  apt.verify(str);
  const arr = getNumbersArray(str);
  const result = apt.risingSubsting(arr);
  const description = "Rising substring";
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
  const description = "Your date is";
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
  applyOutput(3, "Result is", result);
}

function inputWorkerAS(){
  cleanUp(4);
  const str = getInputData(inp, 6);
  const options = getSelectOptions([4, 5]);
  const as = new AS();
  as.verify(str);
  const arr = getNumbersArray(str);
  const result = as.getSortedArr(arr, options);
  const description = "Sorted sring";
  applyOutput(4, description, result);
}

function getInputData(inpType = inp, inpNum = 0) {
  if (inpType[inpNum].value) return inpType[inpNum].value;
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
