import {ChangeEvent} from "react"

export default function App(){
  function onChange(event: ChangeEvent<HTMLInputElement>){
    console.log(event.target.value)
  }
  return (
    <input defaultValue={'guang'} onChange={onChange} />
  )
}