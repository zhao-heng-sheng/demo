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
        (async () => {
            let res = await queryData();
            setNum(res);
        })();
        // queryData().then((data) => {
        //     setNum(data);
        // });
    }, []);
    return <div onClick={() => setNum((num) => num + 1)}>{num}</div>;
}
export default App;
