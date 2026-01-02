type BreakpointKey = "mobile" | "tablet";
type BreakpointType = "min" | "max";

interface Service {
    title: string;
    description: string;
}

interface iLink {
    title: string;
    href: string;
}

interface iProject extends iLink {
    liveURL: string;
    previewImg: string;
    stack: string[];
}
