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
            <main className={cn("mx-auto my-4 grid max-w-7xl flex-1 gap-8 px-5", "lg:grid-cols-3")}>
                {[...Array.from({ length: 4 })].map(function () {
                    return (
                        <article className="h-75 w-full">
                            <span className="block h-3/4">
                                <img src="https://placehold.co/600x400/0C0C0C/white" alt="" />
                            </span>
                            <section className="text-white">
                                <h3>Lorem, ipsum.</h3>

                                <ul className="flex">
                                    {[...Array.from({ length: 4 })].map(function () {
                                        return <li className="p-1 bg-(--black--200)">tool</li>;
                                    })}
                                </ul>
                            </section>
                        </article>
                    );
                })}
            </main>
        </Suspense>
    );
}
