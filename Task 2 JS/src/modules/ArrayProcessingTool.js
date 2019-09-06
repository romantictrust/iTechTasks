export default class ArrayProcessingTool {
  numbersRegExp = new RegExp("^[0-9-+]+");

  constructor(val) {
    if (val) {
      this.verify(val);
      this.arr = this.getNumbersArray(val);
    }
  }

  getNumbersArray(val = this.val) {
    if (typeof val == "string") return val.split(" ").map(Number);
    else return val;
  }

  verify(val = this.val) {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  subSumOn(arr = this.arr) {
    let mutant = [...arr];
    let cur = 0;
    let max = 0;
    // удаляем первые неположительные элементы массива
    while (mutant[0] <= 0) mutant.splice(0, 1);
    for (let i = 0; i < mutant.length; i++) {
      // проверяем чтобы отрицательный элемент мог дать большую сумму
      if (
        mutant[i] < 0 &&
        (mutant[i] + mutant[i + 1] <= 0 || mutant[i] + cur <= 0)
      ) {
        cur = 0;
        continue;
      }
      cur += mutant[i];
      // получаем большую сумму из массива
      if (cur > max) max = cur;
    }
    return max;
  }

  subSumOnSquared(arr = this.arr) {
    let cur = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
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

  // Медианное значение массива
  averageElement(arr = this.arr) {
    let mutant = [...arr];
    const middle = Math.ceil(arr.length / 2);
    // Сортировка по возрастанию
    const sortedArr = mutant.sort((a, b) => {
      return a - b;
    });
    // Проверка на чётность / нечётность
    if (!(sortedArr.length % 2)) {
      return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
    } else {
      return sortedArr[middle];
    }
  }

  // Возрастающая последовательность
  risingSubsting(arr = this.arr) {
    let cur = [];
    let max = [];
    for (let i = 0; i < arr.length; i++) {
      if (cur.length == 0) {
        cur.push(arr[i]);
      } else if (arr[i] > 0 && cur[cur.length - 1] - arr[i] < 0) {
        cur.push(arr[i]);
      } else if (cur[cur.length - 1] < 0 && cur[cur.length - 1] + arr[i] < 0) {
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
