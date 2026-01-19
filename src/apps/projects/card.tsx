import { cn } from "@/lib/utils";
import { FileCodeCorner, SquareArrowOutUpRight } from "lucide-react";

export function ProjectCard({ imageSrc, imageAlt, title, stack, href, gitURL }: iProject) {
    return (
        <article
            tabIndex={0}
            className={cn(
                "group relative w-full overflow-hidden rounded",
                "focus-visible:ring-primary hover:cursor-pointer focus:outline-none focus-visible:ring-2",
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
                        "absolute inset-0 flex w-full items-center justify-center",
                        "bg-black/60 opacity-0 transition-opacity duration-150",
                        "group-hover:opacity-100",
                        "group-focus-within:opacity-100",
                    )}
                >
                    <a href={gitURL} target="_blank">
                        <FileCodeCorner />
                    </a>
                    <a href={href} target="_blank">
                        <SquareArrowOutUpRight />
                    </a>
                </div>
            </aside>

            <aside className="space-y-2">
                <h3>{title}</h3>

                <ul className="flex">
                    {stack.map((value, index: number) => (
                        <li key={index} className="rounded-full px-3 py-1">
                            <span className="text-xs">{value}</span>
                        </li>
                    ))}
                </ul>
            </aside>
        </article>
    );
}
