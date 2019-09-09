export default class DateDisplayFormatter {
  DayReg = /((0[1-9]|[12]\d|3[01]))/;
  MonthReg = /(0[1-9]|1[0-2])/;
  YearReg = /([12]\d{3})/;
  options = {};
  result = "";

  constructor(str) {
    if (str) {
      let optionsArr = this.getOptionsFromString(str);
      const result = this.getOutputData(optionsArr)
      this.result = result;
    }
  }

  prepareData(str, dateFrom = "DDMMYYYY") {
    let date = { day: "", month: "", year: "" };
    if (dateFrom.length != str.length) {
      alert(`Your date doesn't match the format.`);
      throw new Error(`Your date doesn't match the format.`);
    }

    for (let i = 0; i < str.length; i++) {
      switch (dateFrom[i]) {
        case "D":
          date.day += str[i];
          break;
        case "M":
          date.month += str[i];
          break;
        case "Y":
          date.year += str[i];
          break;
      }
    }
    return date;
  }

  verify(date) {
    let { day, month, year } = date;
    if (!this.DayReg.test(day)) {
      alert(`Day should be more than 0 and less than 31, your day is ${day}`);
      throw new Error(`Invalid day: ${day}`);
    } else if (!this.MonthReg.test(month)) {
      alert(
        `Month should be more than 0 and less than 12, your month is ${month}`
      );
      throw new Error(`Invalid month: ${month}`);
    } else if (!this.YearReg.test(year)) {
      alert(
        `Year should be more than 1000 and less than 3000, your year is ${year}`
      );
      throw new Error(`Invalid year: ${year}`);
    }
  }

  processData(date, dateTo = "DD Month YYYY") {
    let result = "";
    if (dateTo == "DD Month YYYY") {
      let monthsList = this.getMonth();
      date.month = monthsList[Number(date.month)];
    }
    for (let i = 0; i < dateTo.length; i++) {
      switch (dateTo[i]) {
        case "D":
          result += date.day;
          i += date.day.length - 1;
          break;
        case "M":
          result += date.month;
          i += date.month.length - 1;
          break;
        case "Y":
          result += date.year;
          i += date.year.length - 1;
          break;
        default:
          result += dateTo[i];
      }
    }
    return result;
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
  getOutputData(options) {
    if (options) {
      let date = options[0];
      const dateFrom = options[1];
      const dateTo = options[2];
      date = this.prepareData(date, dateFrom);
      this.verify(date);
      if (dateTo == "fromNow") {
        return this.fromNow(date);
      } else {
        let result = this.processData(date, dateTo);
        return result;
      }
    }
  }

  // Возвращает сколько лет прошло
  fromNow(date) {
    let year = new Date().getFullYear();
    let yearsHadPassed = year - date.year;
    return yearsHadPassed > 0
      ? `It was ${yearsHadPassed} years ago.`
      : `It will be in ${-yearsHadPassed} years.`;
  }

  getOptionsFromString(str) {
    const optionsArr = str.split(", ");
    return optionsArr;
  }

  getMonth() {
    return {
      1: "January ",
      2: "February ",
      3: "March ",
      4: "April ",
      5: "May ",
      6: "June ",
      7: "July ",
      8: "August ",
      9: "September ",
      10: "October ",
      11: "November ",
      12: "December "
    };
  }
}
