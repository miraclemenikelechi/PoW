import "./index.scss";

import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { AboutText } from "@/apps/landing/about-text";
import { ProfilePic } from "@/apps/landing/profile-pic";
import { SkillsDesktopView } from "@/apps/skills/desktop";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    useSmoothScroll({ enabled: useBreakpoint({ bp: "tablet", type: "min" }) });

    return (
        <Suspense fallback={<></>}>
            {useBreakpoint({ bp: "tablet", type: "max" }) ? (
                <main className={cn("mx-auto grid max-w-7xl grid-rows-2", "lg:grid-cols-2", "home__wrapper")}>
                    <ProfilePic />
                    <AboutText />
                </main>
            ) : (
                <SkillsDesktopView />
            )}
        </Suspense>
    );
}
