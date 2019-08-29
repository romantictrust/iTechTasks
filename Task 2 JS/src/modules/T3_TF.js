export default class TextFormatter {
  numbersRegExp = new RegExp("^[0-9]");

  verify(val = "0") {
    if (!this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  getFormattedText(str, options) {

  }
}
