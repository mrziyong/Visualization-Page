/*
 * @Author: 秦自勇
 * @Date: 2021-08-09 14:20:28
 * @LastEditors: huangl
 * @LastEditTime: 2021-10-27 14:36:20
 * @Description: 请求封装拦截
 * @FilePath: \vue-admin-template\src\utils\request.js
 */
import axios from "axios";
import { MessageBox, Message } from "element-ui";
// import router from "@/router";
import config from "../../config/index";
import { getCookie, delCookie, getStore, removeStore } from "./util"; // 引入工具包的getCookie

console.log('请求接口：', config)
// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: config.api,
  timeout: 5000 // 超时时间5秒
});
// 设置post请求头
(service.defaults.headers.post["Content-Type"] =
  "application/json;charset=utf-8"), // 服务器/格式/字符集
  // http request 拦截器，通过这个，把token传到后台
  service.interceptors.request.use(
    config => {
      const token = getCookie("VUE_ADMIN_TOKEN"); // 调用 util 包进行按key取出需要的 cookie
      config.headers = {
        "admin-token": `${token || ""}` // 请求头带上jwt的token
      };
      return config; // 正确返回token
    },
    err => {
      return Promise.reject(err); // 错误返回
    }
  );

service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    console.log('错误返回：', error)
    // const err = error.response.data;
    // if (err.errCode === 401) {
    //   MessageBox.confirm("您的登录已过期，请重新登录！", {
    //     confirmButtonText: "确认",
    //     cancelButtonText: "取消",
    //     type: "warning"
    //   }).then(() => {
    //     delCookie('VUE_ADMIN_TOKEN')
    //     router.push({ path: "/login" }); // cookie 失效后跳转回登录
    //   });
    // }
    // console.log("请求错误：", error.response.data);
    // return Promise.reject(error.message)
    // return Promise.reject(err);
  }
);

export default service;