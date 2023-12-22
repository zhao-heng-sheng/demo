import axios from "axios"

import { getBsInfo, getOS } from "./utils"

console.log(event)
;(async () => {
  let { href: url, hostname: domain, port } = window.location
  let browserType = getBsInfo().bs_name
  let title = document.title
  let os = getOS()
  let latitude, longitude
  let addHistory = ()=>{
    axios
      .post("http://localhost:3000/history", {
        url,
        domain,
        port,
        title,
        browserType,
        os,
        latitude,
        longitude
      })
      .then((res) => {
        console.log(res)
      })
  }
  addHistory();
  window.addEventListener('popstate',(e)=>{
    console.log(e);
    title = document.title
    addHistory();
  })
})()

export {}
