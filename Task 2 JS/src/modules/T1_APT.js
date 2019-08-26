export default class ArrayProcessingTool {
  numbersRegExp = new RegExp("^[0-9-+]+");

  constructor(param = "0") {
    if (!Number(param)) return 0;
    this.verify(param);
    this.val = this.getNumbersArray(param);
    this.arr = this.val;
  }

  getNumbersArray(val = this.val) {
    return val.split(" ").map(Number);
  }

  verify(val = this.val) {
    if (!this.verifier(val)) throw "Wrong string";
  }

  verifier(str) {
    if (!this.numbersRegExp.test(str)) alert("Invalid String");
    else return 1;
  }

  subSumOn(arr = this.arr) {
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
  }

  subSumOnSquared(arr = this.arr) {
    let cur = 0;
    let max = 0;
    // Баблсорт в мире проверки подмассива
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
  }

  minElement(arr = this.arr) {
    const min = arr.reduce((a, b) => {
      return a < b ? a : b;
    });
    return min;
  }

  maxElement(arr = this.arr) {
    const max = arr.reduce((a, b) => {
      return a > b ? a : b;
    });
    return max;
  }

  averageElement(arr = this.arr) {
    // Сортировка по возрастанию
    const sortedArr = arr.sort((a, b) => {
      return a - b;
    });
    // Проверка на чётность / нечётность
    if (!(sortedArr.length % 2)) {
      return (
        (sortedArr[sortedArr.length / 2 - 1] +
          sortedArr[sortedArr.length / 2]) /
        2
      );
    } else {
      return sortedArr[sortedArr.length / 2];
    }
  }

  risingSubsting(arr = this.arr) {
    let cur = [];
    let max = [];
    for (let i = 0; i < arr.length; i++) {
      if (cur.length == 0) {
        cur.push(arr[i]);
      } else if (cur[cur.length - 1] - arr[i] < 0) {
        cur.push(arr[i]);
      } else if (max.length <= cur.length) {
        max = cur;
        cur = [];
        cur.push(arr[i]);
      }
      if (arr.length == i + 1 && cur.length >= max.length) {
        max = cur;
      }
    }
    return max;
  }
}
