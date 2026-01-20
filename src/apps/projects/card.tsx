import { FileCodeCorner, SquareArrowOutUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function ProjectCard({ imageSrc, imageAlt, title, href, gitURL, tech }: iProject) {
    return (
        <article
            tabIndex={0}
            className={cn(
                "group relative w-full overflow-hidden rounded transition-all duration-150",
                "hover:cursor-pointer hover:rounded-tl-none hover:rounded-tr-none hover:rounded-bl-xl focus-visible:ring-1",
                "focus:rounded-tl-none focus:rounded-tr-none focus:rounded-bl-xl focus:outline focus:outline-offset-1",
                "projects-card",
            )}
        >
            <aside className="relative h-7/10">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="size-full transition-transform duration-150 group-focus-within:scale-105 group-hover:scale-105"
                />

                <div
                    className={cn(
                        "pointer-events-none absolute inset-0 flex size-full scale-104 items-center justify-center",
                        "bg-black/75 opacity-0 backdrop-blur-xs transition-opacity duration-150",
                        "group-hover:pointer-events-auto group-hover:opacity-100",
                        "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                    )}
                >
                    <a href={gitURL} target="_blank" rel="noreferrer">
                        <FileCodeCorner />
                    </a>
                    <a href={href} target="_blank" rel="noreferrer">
                        <SquareArrowOutUpRight />
                    </a>
                </div>
            </aside>

            <aside
                className={cn(
                    "space-y-2 transition-transform duration-120",
                    "group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:scale-99",
                    "group-focus-within:translate-x-0.5 group-focus-within:-translate-y-1 group-focus-within:scale-99",
                )}
            >
                <h3>{title}</h3>

                <ul className="flex">
                    {[...tech].sort().map((value: string, index: number) => (
                        <li key={index} className="rounded-full px-3 py-1">
                            <span className="text-xs">{value}</span>
                        </li>
                    ))}
                </ul>
            </aside>
        </article>
    );
}
