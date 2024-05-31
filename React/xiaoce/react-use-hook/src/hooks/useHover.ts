import { cloneElement, useState } from "react";

const useHover = (element) => {
    const [state, setState] = useState(false);
    const onMouseEnter = (originalOnMouseEnter) => {
        originalOnMouseEnter?.();
        setState(true);
    };
    const onMouseLeave = (originalOnMouseLeave) => {
        originalOnMouseLeave?.();
        setState(false);
    };
    if(typeof element === 'function'){
        element = element(state)
    }
    const el = cloneElement(element,{
        onMouseEnter: () => onMouseEnter(element.props.onMouseEnter),
        onMouseLeave: () => onMouseLeave(element.props.onMouseLeave)
    })
    return [el, state];
};

export default useHover;
