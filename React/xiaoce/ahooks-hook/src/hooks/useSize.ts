import { RefObject, useEffect, useState } from "react";
type Size =
    | {
          width: number;
          height: number;
      }
    | undefined;
let useSize = (targetRef: RefObject<HTMLElement>): Size => {
    const [state, setState] = useState<Size>(() => {
        const el = targetRef.current;
        return el ? { width: el.clientWidth, height: el.clientHeight } : undefined;
    });
    useEffect(() => {
        const el = targetRef.current;
        if (!el) return;
        const resizeObserver = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                const { clientWidth, clientHeight } = entry.target;
                setState({ width: clientWidth, height: clientHeight });
            });
        });
        resizeObserver.observe(el);
        return () => {
            resizeObserver.disconnect();
        };
    }, []);
    return state;
};

export default useSize;
