export default class DateDisplayFOrmatter {
  dateEnRegExp = /((0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])[12]\d{3})/;
  dateUSARegExp = /((0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[12]\d{3})/;
  dateCanadaRegExp = /[12]\d{3}((0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01]))/;

  //   constructor(val, options) {
  //     this.verify(val, options.Inp);
  //   }

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
      alert("Invalid date");
      throw new Error("Invalid date");
    }
  }

  getDateObject(val, options) {
    let date = { day: 0, month: 0, year: 0 };
    switch (options.Inp) {
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

  getOutputData(date, options) {
    let str = this.getFormattedDate(
      date,
      options.Out,
      options.Delimiters,
      options.Format
    );
    return str;
  }

  getFormattedDate(date, out, delimiter, format) {
    let str;
    let monthsList = this.getMonth();
    let month = date.month;
    let year = new Date().getFullYear();
    let yearsHadPassed = year - date.year;
    if (format == "FromNow") {
      return yearsHadPassed > 0
        ? `It was ${yearsHadPassed} years ago.`
        : `It will be in ${-yearsHadPassed} years.`;
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
