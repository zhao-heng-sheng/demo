import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  useEffect(()=>{
    console.log(window.location);
    console.log("zxcvx")
  })

  return (
    <div>X</div>
  )
}

export default IndexPopup
