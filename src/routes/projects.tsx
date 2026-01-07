import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { ProjectsSkeleton } from "@/apps/projects/skeleton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Suspense fallback={<ProjectsSkeleton />}>
            <main className={cn("mx-auto my-4 max-w-7xl flex-1 gap-4 px-4")}></main>
        </Suspense>
    );
}
