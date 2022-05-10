/*
 * @Author: 秦自勇
 * @Date: 2021-08-24 09:40:30
 * @LastEditors: huangl
 * @LastEditTime: 2021-10-25 15:31:12
 * @Description: 请求地址
 * @FilePath: \vue-admin-template\config\index.js
 */

const config = {
    dev: {
        api: 'http://127.0.0.1:8083'
    },
    production: {
        api: ''
    }
    
}

export default config[process.env.VUE_APP_BASE_API]