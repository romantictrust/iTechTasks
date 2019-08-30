export default class BinaryConverter {
  numbersRegExp = new RegExp("^[0-9]");
  binaryRegExp = new RegExp("^[0-1]");
  hexadecimalRegExp = new RegExp("[0-9a-fA-F]+");

  options = {};
  result = "";

  constructor(str, options) {
    if (str) {
      this.options = options;
      this.verify(str, this.options);
      this.result = this.getSystem(str, options);
    }
  }

  verify(val = this.val, options = this.options) {
    switch (options["systemFrom"]) {
      case "2":
        if (!this.binaryRegExp.test(val)) {
          alert(`Wrong binary number: ${val}`);
          throw new Error(`Wrong binary number: ${val}`);
        } else break;
      case "16":
        if (!this.hexadecimalRegExp.test(val)) {
          alert(`Wrong hexadecimal: ${val}`);
          throw new Error(`Wrong hexadecimal: ${val}`);
        } else break;
      default:
        if (!this.numbersRegExp.test(val)) {
          alert(`Invalid numbers: ${val}`);
          throw new Error(`Invalid numbers: ${val}`);
        }
    }
  }

  getSystem(str, options) {
    const num = parseInt(str, options.systemFrom);
    return num.toString(options.systemTo);
  }
}
