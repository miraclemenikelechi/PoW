import "./index.scss";

import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { LandingDesktopView } from "@/apps/landing/desktop";
import { LandingMobileView } from "@/apps/landing/mobile";
import { LandingSkeleton } from "@/apps/landing/skeleton";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    useSmoothScroll({ enabled: useBreakpoint({ bp: "tablet", type: "min" }) });

    return (
        <Suspense fallback={<LandingSkeleton />}>
            {useBreakpoint({ bp: "tablet", type: "max" }) ? <LandingMobileView /> : <LandingDesktopView />}
        </Suspense>
    );
}
