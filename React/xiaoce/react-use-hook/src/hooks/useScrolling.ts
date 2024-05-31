import { useEffect, useState } from "react";

const useScrolling = (ref) => {
    const [scrolling, setScrolling] = useState(false);
    useEffect(() => {
        if (ref.current) {
            let scollingTimer: number;
            const handleScrollEnd = () => {
                setScrolling(false);
            };
            const handleScroll = () => {
                setScrolling(true);
                clearTimeout(scollingTimer);
                scollingTimer = setTimeout(handleScrollEnd, 100);
            };
            ref.current?.addEventListener("scroll", handleScroll);
            return () => {
                if (ref.current) {
                    ref.current?.removeEventListener("scroll", handleScroll);
                }
            };
        }
        return () => {};
    }, [ref]);
    return scrolling;
};

export default useScrolling;
