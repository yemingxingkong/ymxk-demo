//公共js文件

//api连接前缀
//var API_DOMAIN = 'http://00.000.00.00:8085/';
var API_DOMAIN = "http://localhost:8085/";

//为true输出日志
var debug = true;

var PAY_DOMAIN = "";

// 获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
}

/**
 * 打印日志
 */
function log(data) {
  if (debug) {
    console.log(mklog());
    if (typeof data == "object") {
      console.log(JSON.stringify(data)); //console.log(JSON.stringify(data, null, 4));
    } else {
      console.log(data);
    }
  }
}

/**
 * @description 调试用的时间戳
 * @author suwill
 * @param {none} 不需要参数
 * @example mklog()
 */
function mklog() {
  var date = new Date(); //新建一个事件对象
  var seperator1 = "/"; //日期分隔符
  var seperator2 = ":"; //事件分隔符
  var month = date.getMonth() + 1; //获取月份
  var strDate = date.getDate(); //获取日期
  var ss = date.getSeconds(); //获取秒
  if (month >= 1 && month <= 9) {
    //判断月份
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  if (ss >= 0 && ss <= 9) {
    ss = "0" + ss;
  }
  var ms = date.getMilliseconds();
  if (ms >= 10 && ms <= 100) {
    ms = "0" + ms;
  } else if ((ms >= 0) & (ms <= 9)) {
    ms = "00" + ms;
  }
  var currentdate =
    "2" +
    date.getYear() -
    100 +
    seperator1 +
    month +
    seperator1 +
    strDate +
    " " +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    ":" +
    ss +
    "'" +
    ms;
  //	var currentdate = date.getHours() + seperator2 + date.getMinutes() + ":" + ss + "'" + ms;
  return currentdate + "|";
}