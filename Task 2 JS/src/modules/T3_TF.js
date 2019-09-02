export default class TextFormatter {
  numbersRegExp = new RegExp("^[0-9]");

  verify(val = "0") {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  // Склеивает массив в строку и возвращает результат
  getFormattedText(str, options) {
    let result = this.chooseType(str, options);
    return result.join("");
  }

  // Возвращает результат форматирования текста
  chooseType(str, options) {
    let { maxStrLen, rowsNumber, carryover } = options;
    let strCopy = [...str];
    if (rowsNumber) {
      strCopy = this.formatRowsNumber(strCopy, rowsNumber);
    }
    if (maxStrLen) {
      strCopy = this.formatStrLen(strCopy, maxStrLen);
    }
    if (carryover) {
      strCopy = this.formatCarryover(strCopy, carryover);
    }
    return strCopy;
  }

  // Форматирование по количеству строк
  formatRowsNumber(str, rowsNumber) {
    rowsNumber = Number(rowsNumber);
    let shortedStrLen = Math.ceil(str.length / rowsNumber + 1);
    console.log(shortedStrLen, str.length);
    for (let i = shortedStrLen; i < str.length; i += shortedStrLen) {
      str.splice(i, 0, "\n");
    }
    return str;
  }

  // Форматирование по длинне строк
  formatStrLen(str, maxStrLen) {
    maxStrLen = Number(maxStrLen);
    for (let i = maxStrLen; i < str.length; i += maxStrLen + 1) {
      str.splice(i, 0, "\n");
    }
    return str;
  }

  // Форматирование по разделителю/слову/подстроке
  formatCarryover(str, carryover) {
    let carryLen = carryover.length;
    for (let i = 0; i < str.length; i++) {
      let currPhrase = "";
      if (str[i] == carryover[0]) {
        for (let j = 0; j < carryLen; j++) {
          currPhrase += str[i + j];
        }
        if (currPhrase == carryover) {
          str.splice(i + carryLen, 0, "\n");
          i += carryLen;
        }
      }
    }
    return str;
  }
}
