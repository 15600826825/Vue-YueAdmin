import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//判断是否是本地调试 或者是 服务器访问
// const base = window.location.href.indexOf("localhost") >= 0 ? 'http://www.yueshijue.com' : window.location.protocol + "//" + window.location.host;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
const postAxios = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
export const requestLogin = params => { return postAxios.post('/user/signinPost', qs.stringify(params))}
export const requestExit = params => { return axios.get('/user/logout', qs.stringify(params))}
