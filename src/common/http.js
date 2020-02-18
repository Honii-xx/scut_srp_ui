import axios from 'axios'
import store from '../common/store'
axios.defaults.baseURL = 'http://localhost:3000/'
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers.authorization = store.state.token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
export default axios