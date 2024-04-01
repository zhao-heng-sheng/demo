import axios from 'axios'

// 请求拦截
axios.interceptors.request.use(config=>{
  console.log('请求拦截',config);
  return config;
})
// 响应拦截
axios.interceptors.response.use(response=>{
  console.log('响应拦截',response);
  return response;
},error=>{
  console.log('响应拦截',error);
  return Promise.reject(error);
})

export default axios