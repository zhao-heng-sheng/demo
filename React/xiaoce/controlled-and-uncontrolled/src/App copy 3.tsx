import { useState } from "react";

function Calendar(props: any) {
    const { value, onChange } = props;
    let changeValue = (date: Date) => {
        onChange?.(date);
    };
    return (
        <div>
            {value.toLocaleDateString()}
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-3"));
                }}
            >
                2024-5-3
            </div>
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-4"));
                }}
            >
                2024-5-4
            </div>
            <div
                onClick={() => {
                    changeValue(new Date("2024-5-5"));
                }}
            >
                2024-5-5
            </div>
        </div>
    );
}
function App() {
    const [value, setValue] = useState(new Date("2024-5-1"));
    return (
        <Calendar
            value={value}
            onChange={(date: any) => {
                setValue(date);
                console.log(date.toLocaleDateString());
            }}
        />
    );
}
export default App;
