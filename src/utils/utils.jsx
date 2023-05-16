//获取当前时间
function getNowTime() {
  var date = new Date();
  //年 getFullYear()：四位数字返回年份
  var year = date.getFullYear(); //getFullYear()代替getYear()
  //月 getMonth()：0 ~ 11
  var month = date.getMonth() + 1;
  //日 getDate()：(1 ~ 31)
  var day = date.getDate();
  //时 getHours()：(0 ~ 23)
  var hour = date.getHours();
  //分 getMinutes()： (0 ~ 59)
  var minute = date.getMinutes();
  //秒 getSeconds()：(0 ~ 59)
  var second = date.getSeconds();

  var time =
    year +
    "-" +
    addZero(month) +
    "-" +
    addZero(day) +
    " " +
    addZero(hour) +
    ":" +
    addZero(minute) +
    ":" +
    addZero(second);
  return time;
}

//小于10的拼接上0字符串
function addZero(s) {
  return s < 10 ? "0" + s : s;
}

function dateToString(date) {
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var hours = date.getHours().toString();
  if (hours.length == 1) {
    hours = "0" + hours;
  }
  var mintus = date.getMinutes().toString();
  if (mintus.length == 1) {
    mintus = "0" + mintus;
  }
  var second = date.getSeconds().toString();
  if (second.length == 1) {
    second = "0" + second;
  }
  var dateTime =
    year + "-" + month + "-" + day + " " + hours + ":" + mintus + ":" + second;
  return dateTime;
}
export { getNowTime, dateToString };
