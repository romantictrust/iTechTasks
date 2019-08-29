export default class StringCalculator {
  numbersRegExp = /[^0-9\/\(\).*+-]/;
  val;

  constructor(val = "0"){
    this.verify(val);
    this.val = val;
  }

  verify(val = "0") {
    if (this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  getResult(val) {
    let result = eval(val)
    return result;
  }
}
