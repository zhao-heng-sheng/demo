import { useEffect, useRef, useState } from "react";

function App() {
    return (
        <Calendar
            defaultValue={new Date("2023-1-1")}
            onChange={(date:any) => {
                console.log(date.toLocaleDateString());
            }}
        />
    );
}
function Calendar(props: any) {
    const { value: propsValue, defaultValue, onChange } = props;
    const [value, setValue] = useState(() => {
        if (propsValue !== undefined) return propsValue;
        return defaultValue;
    });
    const isFirstRender = useRef(true);
    useEffect(() => {
        if (propsValue === undefined && !isFirstRender.current) {
            setValue(propsValue);
        }
        isFirstRender.current = false;
    }, [propsValue]);
    const mergedValue = propsValue ?? value;
    function changeValue(date: Date) {
        if (propsValue === undefined) {
            setValue(date);
        }
        onChange?.(date);
    }
    return (
        <div>
            {mergedValue?.toLocaleDateString()}
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-1"));
                }}
            >
                2023-5-1
            </div>
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-2"));
                }}
            >
                2023-5-2
            </div>
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-3"));
                }}
            >
                2023-5-3
            </div>
        </div>
    );
}
export default App;
