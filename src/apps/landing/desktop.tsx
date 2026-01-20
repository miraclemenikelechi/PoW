import gsap from "gsap";
import { useEffect, useRef } from "react";

import { SERVICES } from "@/assets/data/service";
import { Service } from "@/components/service";
import { cn } from "@/lib/utils";

export function LandingDesktopView() {
    const backendIconsRef = useRef<HTMLDivElement | null>(null);
    const backendRef = useRef<HTMLElement | null>(null);
    const frontendIconsRef = useRef<HTMLDivElement | null>(null);
    const frontendRef = useRef<HTMLElement | null>(null);
    const textRef = useRef<HTMLElement | null>(null);

    useEffect(function () {
        if (
            !backendIconsRef.current ||
            !backendRef.current ||
            !frontendIconsRef.current ||
            !frontendRef.current ||
            !textRef.current
        )
            return;

        const frontendTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: frontendRef.current,
                start: "top center",
                end: "bottom 45%",
                toggleActions: "play reverse play reverse",
            },
        });
        frontendTimeline.fromTo(
            frontendIconsRef.current.children,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.25,
                ease: "power3.out",
            },
        );

        const backendTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: backendRef.current,
                start: "top 60%",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            },
        });
        backendTimeline
            .fromTo(
                textRef.current,
                {
                    text: "front",
                },
                {
                    text: "back",
                    ease: "power2.inOut",
                },
            )
            .fromTo(
                backendIconsRef.current.children,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.25,
                    ease: "power2.inOut",
                },
                "-=0.25",
            );
    }, []);

    return (
        <section className={cn("font-space-mono flex items-center justify-center text-gray-500")}>
            <div className={cn("w-full max-w-7xl p-5", "lg:p-10")}>
                <main className="relative grid grid-cols-2">
                    <aside className="sticky top-27 h-max space-y-40 p-10">
                        <h1 className="text-muted-foreground text-[10rem] leading-32 font-black uppercase">
                            <span ref={textRef} />
                            <br />
                            <span>end</span>
                        </h1>

                        <section className="relative">
                            <div
                                ref={frontendIconsRef}
                                className="absolute grid w-full grid-cols-5 place-items-center gap-10"
                            >
                                {SERVICES.ICONS.FRONTEND.map((value, index) => (
                                    <span className="size-20 rounded-lg bg-zinc-900 p-2.5" key={index}>
                                        <i>{value()}</i>
                                    </span>
                                ))}
                            </div>

                            <div
                                ref={backendIconsRef}
                                className="absolute grid w-full grid-cols-5 place-items-center gap-10"
                            >
                                {SERVICES.ICONS.BACKEND.map((value, index) => (
                                    <span className="size-20 rounded-lg bg-zinc-900 p-2.5" key={index}>
                                        <i>{value()}</i>
                                    </span>
                                ))}
                            </div>
                        </section>
                    </aside>

                    <aside className="max-h-max space-y-40 p-10">
                        <article ref={frontendRef}>
                            <Service type="frontend" />
                        </article>

                        <article ref={backendRef}>
                            <Service type="backend" />
                        </article>
                    </aside>
                </main>
            </div>
        </section>
    );
}
