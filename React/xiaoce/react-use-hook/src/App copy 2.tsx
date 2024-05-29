import { useEffect, useState } from "react";
import useMountedState from "./hooks/useMountedState";
import { useLifecycles } from "react-use";

function App() {
    useLifecycles(()=>console.log('mounted'),()=>console.log('unmounted'))
    return null
}

export default App;
