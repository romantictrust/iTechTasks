export default class CachingCalculator {
  numbersRegExp = /[^0-9\/\(\).*+-]/;
  cache = {};

  // Проверяем на наличие функции в кэше
  getMemoized(str) {
    console.log(this.cache);
    if (str in this.cache) {
      console.log("Fetching from cache");
      return this.cache[str];
    } else {
      console.log("Calculating result");
      let result = this.getResult(str);
      this.cache[str] = result;
      return result;
    }
  }

  verify(val) {
    if (this.numbersRegExp.test(val)) {
      alert(`Invalid numbers: ${val}`);
      throw new Error(`Invalid numbers: ${val}`);
    }
  }

  // Считаем
  getResult(val) {
    let result = eval(val);
    return result;
  }
}
