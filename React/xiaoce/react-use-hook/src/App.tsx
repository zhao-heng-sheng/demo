import { useEffect } from "react";
import useCookie from "./hooks/useCookie";

function App() {
    const [value, updateCookie, deleteCookie] = useCookie("xxx");
    useEffect(() => {
        deleteCookie();
    }, []);
    const updateCookieHandler = () => {
        updateCookie("new value");
    };
    return (
        <div>
            <p>cookie 值: {value}</p>
            <button onClick={updateCookieHandler}>更新 Cookie</button>
            <br />
            <button onClick={deleteCookie}>删除 Cookie</button>
        </div>
    );
}

export default App;
