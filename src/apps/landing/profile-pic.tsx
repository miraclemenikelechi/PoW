import { cn } from "@/lib/utils";

export function ProfilePic() {
    return (
        <section className="flex items-center justify-center p-5">
            <span className={cn("inline-flex size-full items-center justify-center overflow-hidden rounded-lg", "")}>
                <img src="https://placehold.co/600x400/000015/fff1f2/png" alt="profile picture" />
            </span>
        </section>
    );
}
