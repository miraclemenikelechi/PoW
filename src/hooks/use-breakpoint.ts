import { createContext, useContext, useEffect, useState } from "react";

export const BreakpointContext = createContext({
    mobile: 640,
    tablet: 1024,
});

function Breakpoints() {
    return useContext(BreakpointContext);
}

interface useBreakpointProps {
    bp: BreakpointKey | number;
    type: BreakpointType;
}

export function useBreakpoint({ bp, type }: useBreakpointProps) {
    const breakPoints = Breakpoints();

    const isCustomBreakpoint = typeof bp === "number";
    const breakPointValue = isCustomBreakpoint ? bp : breakPoints[bp];

    const [isMatched, setIsMatched] = useState<boolean>(false);

    useEffect(
        function () {
            const mediaQuery =
                type === "min" ? `(min-width: ${breakPointValue}px)` : `(max-width: ${breakPointValue}px)`;

            const mediaQueryList = window.matchMedia(mediaQuery);

            function handleChange(event: MediaQueryListEvent): void {
                setIsMatched(event.matches);
            }

            setIsMatched(mediaQueryList.matches);
            mediaQueryList.addEventListener("change", handleChange);

            return function () {
                mediaQueryList.removeEventListener("change", handleChange);
            };
        },
        [breakPointValue, type],
    );

    return isMatched;
}
