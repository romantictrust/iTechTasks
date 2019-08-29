export default class ArraySorter {
  numbersRegExp = new RegExp("^[0-9-+]+");

  verify(val = this.val) {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

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
        resultingArr = this.shellSort(arr, sortOption);
        break;
      case "simpleSelection":
        resultingArr = this.simpleSelectionSort(arr, sortOption);
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
    /* partition */
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
    /* recursion */
    if (left < j) this.quickSort(arr, left, j);
    if (i < right) this.quickSort(arr, i, right);
    return arr;
  }
}
