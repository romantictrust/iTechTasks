export default class TextFormatter {
  numbersRegExp = new RegExp("^[0-9]");

  verify(val = "0") {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  getFormattedText(str, options) {
    let result = this.chooseType(str, options);
    return result.join("");
  }

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

  formatRowsNumber(str, rowsNumber) {
    rowsNumber = Number(rowsNumber);
    let shortedStrLen = Math.ceil(str.length / rowsNumber);
    for (let i = shortedStrLen; i < str.length; i += shortedStrLen) {
      str.splice(i, 0, "\n");
    }
    return str;
  }

  formatStrLen(str, maxStrLen) {
    for (let i = maxStrLen; i < str.length; i += maxStrLen + 1) {
      str.splice(i, 0, "\n");
    }
    return str;
  }

  formatCarryover(str, carryover) {
    for (let i = 0; i < str.length; i++) {
    if (str[i] == carryover) {str.splice(i+1, 0, "\n"); i++;}
    }
    return str;
  }
}
