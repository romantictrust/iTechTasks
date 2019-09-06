export default class ArraySorter {
  numbersRegExp = new RegExp("^[0-9-+]+");
  options = {};
  result = "";

  constructor(val, options) {
    if (val) {
      this.options = options;
      this.verify(val, options.inp);
      let arr = this.getNumbersArray(val);
      this.result = this.getSortedArr(arr, options);
    }
  }

  verify(val = this.val) {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  // Возвращает массив чисел из строки
  getNumbersArray(str) {
    return str.split(" ").map(Number);
  }

  // Выбор сортировки и режима сортировки
  getSortedArr(arr, options) {
    let sortOption = 0;
    let resultingArr = [];
    // Для сортировки массива по убыванию/возрастанию *
    switch (options.sortOption) {
      case "increase":
        sortOption = 1;
        break;
      case "decrease":
        sortOption = -1;
        break;
    }
    switch (options.sortType) {
      case "bubble":
        resultingArr = this.bubbleSort(arr);
        break;
      case "quick":
        resultingArr = this.quickSort(arr, 0, arr.length - 1);
        break;
      case "shell":
        resultingArr = this.shellSort(arr);
        break;
      case "insertion":
        resultingArr = this.insertionSort(arr);
        break;
    }
    if (sortOption == 1) return resultingArr;
    else return resultingArr.reverse();
  }

  bubbleSort(arr) {
    for (let j = 1; j < arr.length; j++) {
      for (let i = 0; i < arr.length - j; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    }
    return arr;
  }

  quickSort(arr, left, right) {
    let i = left;
    let j = right;
    let tmp;
    let pivotidx = (left + right) / 2;
    const pivot = parseInt(arr[pivotidx.toFixed()]);
    // partition
    while (i <= j) {
      while (parseInt(arr[i]) < pivot) i++;
      while (parseInt(arr[j]) > pivot) j--;
      if (i <= j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      }
    }
    // recursion
    if (left < j) this.quickSort(arr, left, j);
    if (i < right) this.quickSort(arr, i, right);
    return arr;
  }

  shellSort(arr) {
    let increment = arr.length / 2;
    while (increment > 0) {
      for (let i = increment; i < arr.length; i++) {
        let j = i;
        let temp = arr[i];
        while (j >= increment && arr[j - increment] > temp) {
          arr[j] = arr[j - increment];
          j = j - increment;
        }
        arr[j] = temp;
      }
      increment == 2
        ? (increment = 1)
        : (increment = parseInt((increment * 5) / 11));
    }
    return arr;
  }

  insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[0]) {
        // Передвигаем элемент на первую позицию
        arr.unshift(arr.splice(i, 1)[0]);
      } else if (arr[i] > arr[i - 1]) {
        // Проверяем позицию элемента
        continue;
      } else {
        // Смотрим куда элемент нужно переместить
        for (let j = 1; j < i; j++) {
          if (arr[i] >= arr[j - 1] && arr[i] <= arr[j]) {
            // Перемещаем элемент
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
    return arr;
  }
}
