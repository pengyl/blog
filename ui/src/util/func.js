import Vue from 'vue'
import  NOTIFY from './notify';
import axios from './http';
import responseCheck from './responseCheck'
export  default function () {
  Vue.prototype.$NOTIFY = NOTIFY;
  Vue.prototype.$responseCheck = responseCheck;
  Vue.prototype.$http = axios(
    {
      baseURL: 'http://127.0.0.1:8086/blog',
      timeout: 5000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials:false //加了这段就可以跨域了
    }
  )
}
