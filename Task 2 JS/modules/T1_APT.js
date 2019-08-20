const inp = document.querySelector(".T1_APT input");
const btn = document.querySelector(".T1_APT button");
btn.addEventListener("click", APT);

const numbersRegExp = new RegExp("^[0-9]+");

const verifier = str => {
  if (!numbersRegExp.test(str)) alert("Invalid String");
  else return 1;
};

// Не работают отрицательные числа
const subSum = arr => {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      max = cur;
      cur = 0;
      break;
    } 
    cur += Number(arr[i]);
    if ( cur > max) max = cur;
  }
  return max;
};

export function APT() {
  if (!verifier(inp.value)) throw "Wrong string";
  const val = inp.value;
  const arr = val.split(" ");
  console.log(subSum(arr));
}
