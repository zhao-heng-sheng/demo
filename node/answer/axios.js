import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()
let {Authorization,Cookie} = process.env
console.log('Authorization:',Authorization);
console.log('Cookie:',Cookie);
axios.defaults.headers = {
  Authorization,
  Cookie,
  'Content-Type':'application/x-www-form-urlencoded',
  Pragma:'no-cache',
  'X-Requested-With':'XMLHttpRequest',
}

export default axios;