import axios from 'axios'
export {}
console.log(window.location)
axios.get('http://localhost:3000/').then((res) => {
  console.log(res)
})
