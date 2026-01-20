type BreakpointKey = "mobile" | "tablet";
type BreakpointType = "min" | "max";

type ProjectCategoryFilter = "frontend" | "backend" | "template";

interface Service {
    title: string;
    description: string;
}

interface iLink {
    title: string;
    href: string;
}

interface iProject extends iLink {
    category: string[];
    gitURL?: string;
    imageAlt?: string;
    imageSrc?: string;
    tech: string[];
}
