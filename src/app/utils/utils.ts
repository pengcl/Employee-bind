import {of as observableOf} from 'rxjs';

const isCn = function(str) {
  if (/.*[\u4e00-\u9fa5]+.*$/.test(str)) {
    return false;
  }
  return true;
};

export function formData(body: object): FormData {
  const _formData: FormData = new FormData();
  for (const kn in body) {
    if (body) {
      _formData.append(kn, body[kn] === undefined ? '' : body[kn]);
    }
  }
  return _formData;
}

export function formDataToUrl(body: object, ifFist?: boolean): string {
  let str = '';
  for (const keyName in body) {
    if (!str && ifFist) {
      str = '?' + keyName + '=' + (body[keyName] === undefined ? '' : encodeURI(encodeURI(body[keyName])));
    } else {
      str = str + '&' + keyName + '=' + (body[keyName] === undefined ? '' : encodeURI(encodeURI(body[keyName])));
    }
  }
  return str;
}

export function getIndex(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i;
    }
  }
}

export function resultProcess(res) {
  if (res.code === '0000') {
    return observableOf(res.result);
  } else {
    return observableOf(null);
  }
}

export function fmtCallbackUrl(url) {
  const params = [];
  if (url.indexOf('?') === -1) {
    return url;
  } else {
    const arr = url.split('?');
    let path = arr[0];
    const queryParams = arr[1].split('&');
    queryParams.forEach((param) => {
      const key = param.slice(0, param.indexOf('='));
      if (key !== 'openid' && key !== 'key' && key !== 'id' && key !== 'referee') {
        params.push(param);
      }
    });
    params.forEach((param, index) => {
      path = path + (index === 0 ? '?' : '&') + param;
    });
    return path;
  }
}

import {PayDto} from '../@core/dto/pay.dto';

declare var WeixinJSBridge: any;

export function onBridgeReady(body: PayDto, callback) {
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      'appId': body.appId,     // 公众号名称，由商户传入
      'timeStamp': body.timeStamp,         // 时间戳，自1970年以来的秒数
      'nonceStr': body.nonceStr, // 随机串
      'package': 'prepay_id=u802345jgfjsdfgsdg888',
      'signType': 'MD5',         // 微信签名方式：
      'paySign': body.paySign // 微信签名
    },
    function(res) {
      if (res.err_msg === 'get_brand_wcpay_request:ok') {
        callback();
        // 使用以上方式判断前端返回,微信团队郑重提示：
        // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
    });
}

// if (typeof WeixinJSBridge == "undefined"){
//   if( document.addEventListener ){
//     document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//   }else if (document.attachEvent){
//     document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
//     document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//   }
// }else{
//   onBridgeReady();
// }

export function minDate() {
  const now = new Date();
  return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
}

// 根据开始日期和结束日期获取所有日期的方法
export function get(day1, day2) {
  let date1 = getDate(day1);
  let date2 = getDate(day2);
  // @ts-ignore
  if (date1.getTime() > date2.getTime()) {
    const tempDate = date1;
    date1 = date2;
    date2 = tempDate;
  }
  if (day1 > day2) {
    const tempDate = day1;
    day1 = day2;
    day2 = tempDate;
  }
  // @ts-ignore
  if (date1.getTime() === date2.getTime()) {
    // @ts-ignore
    date1.setDate(date1.getDate() - 1);
  }
  // @ts-ignore
  date1.setDate(date1.getDate() + 1);
  const dateArr = [];
  let i = 0;
  // @ts-ignore
  while (!(date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate())) {
    // @ts-ignore
    let dayStr = date1.getDate().toString();
    if (dayStr.length === 1) {
      dayStr = '0' + dayStr;
    }
    // @ts-ignore
    let monthStr = (date1.getMonth() + 1).toString();
    if (monthStr.length === 1) {
      monthStr = '0' + monthStr;
    }
    // @ts-ignore
    dateArr[i] = date1.getFullYear() + '-' + monthStr + '-' + dayStr;
    i++;
    // @ts-ignore
    date1.setDate(date1.getDate() + 1);
  }
  if (day1 !== day2) {
    dateArr.splice(0, 0, day1);
  }
  dateArr.push(day2);
  return dateArr;
}

export function getDate(str) {
  let tempDate = getNowFormatDate();
  // @ts-ignore
  tempDate = new Date(tempDate);
  const list = str.split('-');
  // @ts-ignore
  tempDate.setFullYear(list[0]);
  // @ts-ignore
  tempDate.setMonth(list[1] - 1);
  // @ts-ignore
  tempDate.setDate(list[2]);
  return tempDate;
}

// 获取当前时间，格式YYYY-MM-DD
export function getNowFormatDate() {
  const date = new Date();
  const seperator1 = '-';
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  let m = '';
  let d = '';
  if (month >= 1 && month <= 9) {
    m = '0' + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    d = '0' + strDate;
  }
  let currentdate = year + seperator1 + m + seperator1 + d;
  return currentdate;
}

// 时间戳转换成日期格式
export function timestampToTime(timestamp) {
  const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return Y + M + D;
}

