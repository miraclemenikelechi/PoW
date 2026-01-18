import "@styles/username_flicker.scss";

import { useLayoutEffect, useRef } from "react";

import { ALPHABETS } from "../lib/constants";
import { cn } from "../lib/utils";

export function RenderUsername({ styles }: { styles?: Record<string, string> }) {
    const usernameRef = useRef<HTMLAnchorElement | null>(null);

    useLayoutEffect(function () {
        let iterations = 0;

        if (usernameRef.current) {
            const username = usernameRef.current.dataset.username;
            if (!username) return;

            const interval = setInterval(function () {
                if (!usernameRef.current) {
                    clearInterval(interval);
                    return;
                }

                usernameRef.current.innerText = username
                    .split("")
                    .map(function (_: string, index: number) {
                        if (index < iterations) return username[index];

                        return ALPHABETS.LETTERS[Math.floor(Math.random() * ALPHABETS.TOTAL)];
                    })
                    .join("");

                iterations += 1 / 3;
                if (iterations > username.length) {
                    clearInterval(interval);
                }
            }, 25);
        }
    }, []);

    return (
        <span
            className={cn("font-bold", "username-flicker-text", styles?.className)}
            data-username="miraclemenikelechi"
            ref={usernameRef}
            style={{
                fontSize: `clamp(0.25rem, 6vw, 3rem)`,
            }}
        >
            miraclemenikelechi
        </span>
    );
}
