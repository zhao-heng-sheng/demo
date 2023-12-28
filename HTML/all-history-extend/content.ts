import axios from "axios"

import { getBsInfo, getOS } from "./utils"

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
    let notRecordDomain = ["localhost", "127.0.0.1"]
    if (notRecordDomain.includes(domain)) return
    axios.post(`${process.env.REQ_DOMAIN}/history`, {
      url,
      domain,
      port,
      title,
      browserType,
      os,
      latitude,
      longitude
    })
  }
  addHistory()
  window.addEventListener("hashchange", (e) => {
    regainBrowserData()
    addHistory()
  })
})()

export {}
