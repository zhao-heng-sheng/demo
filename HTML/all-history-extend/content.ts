import axios from "axios"

import { getBsInfo, getOS } from "./utils"

const _historyWrap = function (type) {
  const orig = history[type]
  const e = new Event(type)
  return function () {
    const rv = orig.apply(this, arguments)
    e.arguments = arguments
    window.dispatchEvent(e)
    return rv
  }
}
history.pushState = _historyWrap("pushState")
history.replaceState = _historyWrap("replaceState")

;(async () => {
  let { href: url, hostname: domain, port } = window.location
  let browserType = getBsInfo().bs_name
  let title = document.title
  let os = getOS()
  let latitude, longitude
  let regainBrowserData = () => {
    ;({ href: url, hostname: domain, port } = window.location)
    title = document.title
  }
  let addHistory = () => {
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
  addHistory()
  window.addEventListener("hashchange", (e) => {
    console.log('hashchange');
    
    regainBrowserData()
    addHistory()
  })
  window.addEventListener("pushState", function (e) {
    console.log('pushState');
    
    regainBrowserData()
    addHistory()
  })
  window.addEventListener("replaceState", function (e) {
    console.log('replaceState');
    
    regainBrowserData()
    addHistory()
  })
})()

export {}
