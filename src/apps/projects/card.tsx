import { cn } from "@/lib/utils";

export function ProjectCard({ imageSrc, imageAlt, title, stack }: iProject) {
    return (
        <article className={cn("min-h-75 w-full", "projects-card")}>
            <span className="block h-3/4">
                <img src={imageSrc} alt={imageAlt} />
            </span>

            <section className="space-y-2">
                <h3>{title}</h3>

                <ul className="flex">
                    {stack.map((stack, index: number) => (
                        <li key={index} className="rounded-full px-3 py-1">
                            <span className="text-xs">{stack}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
}
