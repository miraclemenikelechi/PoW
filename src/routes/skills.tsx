import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { SkillsSkeleton } from "@/apps/landing/skeleton";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const SkillsDesktopView = lazy(() =>
    import("@/apps/skills/desktop").then((module) => ({ default: module.SkillsDesktopView })),
);

export const Route = createFileRoute("/skills")({
    component: RouteComponent,
});

function RouteComponent() {
    useSmoothScroll({ enabled: useBreakpoint({ bp: "tablet", type: "min" }) });

    return (
        <Suspense fallback={<SkillsSkeleton />}>
            {useBreakpoint({ bp: "tablet", type: "max" }) ? <></> : <SkillsDesktopView />}
        </Suspense>
    );
}
