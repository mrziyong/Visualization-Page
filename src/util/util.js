/*
 * @Author: xuanpl
 * @Date: 2020-03-19 11:21:50
 * @LastEditors: huangl
 * @LastEditTime: 2021-10-25 16:04:44
 * @Description: util 工具包
 * @FilePath: \vue-admin-template\src\utils\util.js
 */

// import store from '@/store/index'

/** 转换rem为px，取整。需要等待rem生效后方可执行 */
export function rem2px(rem) {
  // return parseInt((store.state.deviceWidth / 3.75) * rem)
}

// 获取cookie、
export function getCookie(name) {
  var arr = ''
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) return arr[2]
  else return null
}

// 设置cookie
export function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  // exdate.setDate(exdate.getDate() + expiredays) //按天计算过期时间
  exdate.setTime(exdate.getTime() + expiredays * 60 * 1000) // 按小时计算
  document.cookie =
    c_name + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

// 删除cookie
export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
}

// localStorage
export const saveStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
export const getStore = (name) => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */
export const removeStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}
// sessionStorage 部分
/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}
/**
 * 获取sessionStorage
 */
export const getSession = (name) => {
  if (!name) return
  return window.sessionStorage.getItem(name)
}
/**
 * 删除sessionStorage
 */
export const removeSession = (name) => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
/**
 * 生成n位随机数
 */
export const getRandomNum = (n) => {
  var num = ''
  for (var i = 0; i < n; i++) {
    num += Math.floor(Math.random() * 9 + 1)
  }
  return num
}

/**
 * @description: 深拷贝
 * @param {object} obj
 * @return: obj
 */

export const deepClone = (target) => {
  // 定义一个变量
  let result
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === 'object') {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = [] // 将result赋值为一个数组，并且执行遍历
      for (const i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]))
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {}
      for (const i in target) {
        result[i] = deepClone(target[i])
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target
  }
  // 返回最终结果
  return result
}

/**
 * @description: 传入元素为对象的数组，根据筛选条件返回符合要求的数组
 * @param {type} params
 * @param {type} params
 * @param {type} params
 * @return: 符合条件的数组
 */
export const filterArrOnKeyValue = (arr, key, value) => {
  const result = []
  for (var i = 0; i < arr.length; i++) {
    const ele = arr[i]
    if (ele[key] === value) {
      result.push(ele)
    }
  }
  return result
}

/**
 * @description: 传入普通的obs图片数组，返回 + '~main'的水印数组
 * @param {Array} arr
 * @return: 返回 + '~main'的水印数组
 */
export const normalImgArr2MainArr = (arr) => {
  const result = arr.map((item) => {
    return item + '~main'
  })
  return result
}

/**
 * @description: 时间格式化函数
 * @param {type} params
 * @return {type}
 */
export const dateFormat = (fmt, date) => {
  if (typeof date !== 'object') {
    date = new Date(date)
  }
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

/**
 * 格式化秒
 * @param int  value 总秒数
 * @return string result 格式化后的字符串
 */
export const formatSeconds = (value) => {
  var theTime = parseInt(value); // 需要转换的时间秒 
  var theTime1 = 0; // 分 
  var theTime2 = 0; // 小时 
  var theTime3 = 0; // 天
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60);
    theTime = parseInt(theTime % 60);
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60);
      theTime1 = parseInt(theTime1 % 60);
      if (theTime2 > 24) {
        //大于24小时
        theTime3 = parseInt(theTime2 / 24);
        theTime2 = parseInt(theTime2 % 24);
      }
    }
  }
  var result = '';
  if (true) {
    result = parseInt(theTime); // 秒
  }
  if (true) {
    result = parseInt(theTime1) + ":" + result; // 分
  }
  if (theTime2 > 0) {
    result = parseInt(theTime2) + ":" + result; // 小时
  }
  if (theTime3 > 0) {
    result = parseInt(theTime3) + ":" + result; // 天
  }
  return result;
}

/**
 * @description: 将目标值替换成指定目标值
 * @param {type} params
 * @return {value}
 */
export const setReplace = (f, e) => {
  var reg = new RegExp(f, "g"); //创建正则 RegExp 对象
  return this.replace(reg, e);
}

/**
 * 
 * @param {*} res 
 * @returns 
 */
export const setImg = (res) => {
  return 'http://192.168.2.4:8899' + '/' + res
}