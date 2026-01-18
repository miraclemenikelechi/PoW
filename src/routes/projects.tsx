import "./projects.scss";

import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { ProjectCard } from "@/apps/projects/card";
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
            <main className={cn("mx-auto my-4 grid max-w-7xl flex-1 gap-8 px-5", "lg:grid-cols-3")} id="projects">
                {PROJECTS.map((project: iProject, index: number) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </main>
        </Suspense>
    );
}
