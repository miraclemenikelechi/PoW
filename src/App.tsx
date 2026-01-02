import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import Lenis from "lenis";
import { lazy, Suspense, useEffect } from "react";

import { useBreakpoint } from "./hooks/use-breakpoint";
const DesktopView = lazy(() => import("./views/desktop"));
const MobileView = lazy(() => import("./views/mobile"));

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function AWOLOWO() {
    useEffect(function () {
        const lenis = new Lenis({ lerp: 0.025, smoothWheel: true });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return function () {
            lenis.destroy();
            ScrollTrigger.killAll();
        };
    }, []);

    const fallback = (
        <div className="font-space-mono text-pink--100 flex h-screen items-center justify-center text-xs">
            Hello WOrld ;)
        </div>
    );

    return (
        <Suspense fallback={fallback}>
            {useBreakpoint({ bp: "tablet", type: "max" }) ? <MobileView /> : <DesktopView />}
        </Suspense>
    );
}
