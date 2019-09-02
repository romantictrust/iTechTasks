export default class DateDisplayFormatter {
  dateEnRegExp = /((0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])[12]\d{3})/;
  dateUSARegExp = /((0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[12]\d{3})/;
  dateCanadaRegExp = /[12]\d{3}((0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/;
  options = {};
  result = "";

  constructor(val, options) {
    if (val) {
      this.options = options;
      this.verify(val, options.inp);
      const date = this.getDateObject(val, options);
      this.result = this.getOutputData(date, options);
    }
  }

  verify(val, option) {
    let Reg;
    switch (option) {
      case "EN":
        Reg = this.dateEnRegExp;
        break;
      case "USA":
        Reg = this.dateUSARegExp;
        break;
      case "Canada":
        Reg = this.dateCanadaRegExp;
        break;
    }
    if (!Reg.test(val)) {
      alert(`Invalid date: ${val}`);
      throw new Error(`Invalid date: ${val}`);
    }
  }

  // Возвращает объект с day month year
  getDateObject(val, options) {
    let date = { day: 0, month: 0, year: 0 };
    switch (options.inp) {
      case "EN":
        date.day = val.slice(0, 2);
        date.month = val.slice(2, 4);
        date.year = val.slice(4, 8);
        break;
      case "USA":
        date.day = val.slice(2, 4);
        date.month = val.slice(0, 2);
        date.year = val.slice(4, 8);
        break;
      case "Canada":
        date.day = val.slice(6, 8);
        date.month = val.slice(4, 6);
        date.year = val.slice(0, 4);
        break;
    }
    return date;
  }

  // Возвращает результат форматированной даты
  getOutputData(date, options) {
    let str;
    let monthsList = this.getMonth();
    let { month } = date;
    let { out, delimiter, format } = options;
    if (format == "FromNow") {
      return this.fromNow(date);
    } else if (format == "Full") {
      month = monthsList[Number(date.month)];
    }
    switch (out) {
      case "EN":
        str = date.day + delimiter + month + delimiter + date.year;
        break;
      case "USA":
        str = month + delimiter + date.day + delimiter + date.year;
        break;
      case "Canada":
        str = date.year + delimiter + month + delimiter + date.day;
        break;
    }
    return str;
  }

  // Возвращает сколько лет прошло
  fromNow(date) {
    let year = new Date().getFullYear();
    let yearsHadPassed = year - date.year;
    return yearsHadPassed > 0
      ? `It was ${yearsHadPassed} years ago.`
      : `It will be in ${-yearsHadPassed} years.`;
  }

  getMonth() {
    return {
      1: "January",
      2: "February",
      3: "March",
      4: "April",
      5: "May",
      6: "June",
      7: "July",
      8: "August",
      9: "September",
      10: "October",
      11: "November",
      12: "December"
    };
  }
}
