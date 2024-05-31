import { useEffect } from "react";
import useHover from './hooks/useHover'

function App() {
    const element = (hovered)=>{
      return (
      <div>
        hover me! {hovered&&'thanks'}
      </div>
      )
    }
    const [hoverable,hovered] = useHover(element)
    return (
      <div>
        {hoverable}
        <div>{hovered? 'hovered':'xx'}</div>
      </div>
    )
}

export default App;
