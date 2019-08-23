const inp = document.querySelector(".T1_APT input");
const btn = document.querySelector(".T1_APT button");
const out = document.querySelector(".T1_APT .out span");
btn.addEventListener("click", APT);

const numbersRegExp = new RegExp("^[0-9-+]+");

// Удаляем предыдущий output
const cleanUp = () => {
  while (out.firstChild) out.removeChild(out.firstChild);
};

// Применяем выходные данные в блок output
const applyOutput = (...outArgs) => {
  outArgs.map(element => {
    out.appendChild(document.createTextNode(`${element}  `));
  });
};

const verifier = str => {
  if (!numbersRegExp.test(str)) alert("Invalid String");
  else return 1;
};

const subSumOn = arr => {
  let cur = 0;
  let max = 0;
  // удаляем первые неположительные элементы массива
  while (arr[0] <= 0) arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    // проверяем чтобы отрицательный элемент мог дать большую сумму
    if (arr[i] < 0 && (arr[i] + arr[i + 1] <= 0 || arr[i] + cur <= 0)) {
      cur = 0;
      continue;
    }
    cur += arr[i];
    // получаем большую сумму из массива
    if (cur > max) max = cur;
  }
  return max;
};

const subSumOnSquared = arr => {
  let cur = 0;
  let max = 0;
  // баблсорт в мире проверки подмассива
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      cur += arr[j];
      // Проверяем максимальную сумму в данный проход цикла.
      if (cur < 0) continue;
      else if (cur > max) max = cur;
    }
    cur = 0;
  }
  return max;
};

const minElement = arr => {
  const min = arr.reduce((a, b) => {
    return a < b ? a : b;
  });
  return min;
};

const maxElement = arr => {
  const max = arr.reduce((a, b) => {
    return a > b ? a : b;
  });
  return max;
};

const averageElement = arr => {
  const average = arr.reduce((a, b) => a + b) / arr.length;
  return average;
};

export function APT() {
  // проверка на числа в инпуте
  if (!verifier(inp.value)) throw "Wrong string";
  const val = inp.value;
  cleanUp();
  // выделить массив чисел
  const arr = val.split(" ").map(Number);
  // applyOutput(`O(n):${subSumOn(arr)}`);
  // applyOutput(`O(n**2):${subSumOnSquared(arr)}`);
  applyOutput(`Min:${minElement(arr)}`);
  applyOutput(`Max:${maxElement(arr)}`);
  applyOutput(`Average:${averageElement(arr)}`);
}
