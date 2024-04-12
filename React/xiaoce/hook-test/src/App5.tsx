import { useEffect, useRef } from 'react'

function App(){
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus()
  })
  return (
    <div>
      <input ref={inputRef} type="text"/>
    </div>
  )
}
export default App;