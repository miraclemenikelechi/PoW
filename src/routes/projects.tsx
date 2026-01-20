import "./projects.scss";

import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { ProjectCard } from "@/apps/projects/card";
import { ProjectFilter } from "@/apps/projects/filter";
import { ProjectsSkeleton } from "@/apps/projects/skeleton";
import { PROJECTS } from "@/assets/data/projects";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
    component: RouteComponent,
});

function RouteComponent() {
    const isTablet = useBreakpoint({ bp: "tablet", type: "min" });

    return (
        <Suspense fallback={<ProjectsSkeleton />}>
            <main className={cn("my-4 px-5")} id="projects">
                <ProjectFilter />

                <section
                    className={cn("mx-auto grid max-w-7xl flex-1 gap-8", isTablet ? "grid-cols-3" : "grid-cols-1")}
                >
                    {PROJECTS.map((project: iProject, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </section>
            </main>
        </Suspense>
    );
}
