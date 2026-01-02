import { RenderUsername } from "@/components/nav-bar-username";
import { cn } from "@/lib/utils";
// import { iLink } from "@/types";

export default function DesktopNavbar() {
    const contactLinks: iLink[] = [
        { href: "https://www.x.com/trinityandtruth", title: "X" },
        { href: "https://www.linkedin.com/in/miraclemenikelechi/", title: "LinkedIn" },
        { href: "https://www.codepen.io/miraclemenikelechi", title: "CodePen" },
    ];

    return (
        <header
            className={cn(
                "font-doto sticky top-0 flex w-full items-center justify-between p-10 text-white",
                "col-start-1 col-end-3",
            )}
        >
            {/* <aside className="text-lg">hi, i'm miracle emenike kelechi </aside> */}
            <RenderUsername styles={{ className: "" }} />

            {/* <aside className="space-x-2">
                {contactLinks.map(function ({ title, href }, index) {
                    return (
                        <a href={href} key={index} target="_blank" rel="noreferrer">
                            [{title}]
                        </a>
                    );
                })}
            </aside> */}
        </header>
    );
}
