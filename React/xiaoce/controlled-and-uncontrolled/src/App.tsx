import { ChangeEvent, useState } from "react";

interface CalendarProps {
    defaultValue?: Date;
    onChange: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
    const { defaultValue = new Date(), onChange } = props;
    const [value,setValue] = useState(defaultValue)
    let changeValue = (date:Date)=>{
      setValue(date);
      onChange?.(date)
    }
    return (
      <div>
        {value.toLocaleDateString()}
        <div onClick={()=>changeValue(new Date('2024-3-1'))}>2024-3-1</div>
        <div onClick={()=>changeValue(new Date('2024-3-2'))}>2024-3-2</div>
        <div onClick={()=>changeValue(new Date('2024-3-3'))}>2024-3-3</div>
      </div>
    )
}

function App() {
    return (
        <Calendar
            defaultValue={new Date("2024-1-4")}
            onChange={(date) => {
                console.log(date.toLocaleDateString());
            }}
        />
    );
}
export default App;
