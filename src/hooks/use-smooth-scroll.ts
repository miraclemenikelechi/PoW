import gsap from "gsap";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function useSmoothScroll({ enabled }: { enabled: boolean }) {
    useEffect(
        function () {
            if (!enabled) return;

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
                gsap.ticker.remove((time) => lenis.raf(time * 1000));
            };
        },
        [enabled],
    );
}
