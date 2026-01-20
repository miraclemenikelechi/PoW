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
    validateSearch: (search: { filter: ProjectCategoryFilter }) => ({
        filter:
            search.filter === "frontend" || search.filter === "backend" || search.filter === "template"
                ? search.filter
                : undefined,
    }),
});

function RouteComponent() {
    const isTablet = useBreakpoint({ bp: "tablet", type: "min" });
    const { filter } = Route.useSearch();

    const filteredProjects = PROJECTS.filter(function (project: iProject) {
        if (!filter) return true;
        return project.category.includes(filter);
    });

    return (
        <Suspense fallback={<ProjectsSkeleton />}>
            <main className={cn("my-4 px-5")} id="projects">
                <ProjectFilter />

                <section
                    className={cn("mx-auto grid max-w-7xl flex-1 gap-8", isTablet ? "grid-cols-3" : "grid-cols-1")}
                >
                    {filteredProjects.map((project: iProject, index: number) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </section>
            </main>
        </Suspense>
    );
}
