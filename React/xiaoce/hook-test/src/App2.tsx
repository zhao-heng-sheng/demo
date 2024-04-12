import { log } from "console";
import { useEffect, useState } from "react";

async function queryData() {
    const data = await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(666);
        }, 2000);
    });
    return data;
}

function App() {
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log('123123');
        
        // (async () => {
        //     let res = await queryData();
        //     setNum(res);
        // })();
        return ()=>{
            console.log("xxx");
        }
    },[num]);
    return <div onClick={() => setNum((num) => num + 1)}>{num}</div>;
}
export default App;
