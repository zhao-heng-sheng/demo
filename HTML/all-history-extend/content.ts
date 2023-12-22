import axios from "axios"

import { getBsInfo, getOS } from "./utils"

;(async () => {
  console.log(navigator, "123")
  console.log(getBsInfo(), "xxx")
  let browserType = getBsInfo().bs_name
  let { href: url, hostname: domain, port } = window.location
  let title = document.title
  let os = getOS()
  let latitude, longitude

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
})()

export {}
