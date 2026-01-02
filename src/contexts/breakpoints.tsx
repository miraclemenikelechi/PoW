import { ReactNode } from "react";

import { BreakpointContext } from "../hooks/use-breakpoint";

export function BreakpointProvider({ children }: { children: ReactNode }) {
    return <BreakpointContext.Provider value={{ mobile: 640, tablet: 1024 }}>{children}</BreakpointContext.Provider>;
}
