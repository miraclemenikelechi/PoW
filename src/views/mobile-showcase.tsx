import "@styles/showcase.scss";

import { PROJECTS } from "@/assets/data/projects";
import ProjectReel from "@/components/project-reel";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";

export default function Component() {
    const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

    return (
        <section
            className={cn(
                "mx-auto my-4 max-w-(--breakpoint-2xl) flex-1 gap-4 px-4",
                isMobile ? "showcase--mobile" : "showcase--desktop",
            )}
            id="showcase"
        >
            {PROJECTS.map(function (value, index) {
                return <ProjectReel key={index} {...value} />;
            })}
        </section>
    );
}
