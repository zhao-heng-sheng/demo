import { useEffect, useRef } from "react";
import useHover from './hooks/useHover'
import useScrolling from './hooks/useScrolling'

function App() {
    const scrollRef = useRef(null)
    const scrolling = useScrolling(scrollRef)
    return (
      <div>
        <div>{scrolling?'滚动中':'没有滚动'}</div>
        <div ref={scrollRef} style={{height:'200px',overflow:'auto'}}>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
          <div>xxx</div>
        </div>
      </div>
    )

}

export default App;
