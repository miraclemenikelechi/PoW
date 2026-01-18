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
    stack: string[];
    gitURL?: string;
    // liveURL?: string;
    // previewImg?: string;

    imageSrc?: string;
    imageAlt?: string;
}
