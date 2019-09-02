export default class StringCalculator {
  numbersRegExp = /[^0-9\/\(\).*+-]/;
  val;

  constructor(val) {
    if (val) {
      this.verify(val);
      this.val = val;
    }
  }

  verify(val) {
    if (this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  // Eval() ¯\_(ツ)_/¯
  getResult(val) {
    let result = eval(val);
    return result;
  }
}
