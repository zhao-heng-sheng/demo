import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  useEffect(()=>{
    // chrome.webNavigation.onCommitted.addListener((val)=>{
    //   console.log('xxx',val)
    // })
    console.log(window.location);
    console.log("zxcvx")
  })

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 300
      }}>
      <h2>
        Welcome to your
        <a href="https://www.plasmo.com" target="_blank">
          {" "}
          Plasmo
        </a>{" "}
        Extension!
      </h2>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
