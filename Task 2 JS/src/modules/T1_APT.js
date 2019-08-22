const inp = document.querySelector(".T1_APT input");
const btn = document.querySelector(".T1_APT button");
btn.addEventListener("click", APT);

const numbersRegExp = new RegExp("^[0-9-+]+");

const verifier = str => {
  if (!numbersRegExp.test(str)) alert("Invalid String");
  else return 1;
};

const subSum = arr => {
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
  console.log(max);
  return max;
};

export function APT() {
  // проверка на числа в инпуте
  if (!verifier(inp.value)) throw "Wrong string";
  const val = inp.value;
  // выделить массив чисел
  const arr = val.split(" ").map(Number);
  subSum(arr);
}
