import { createFileRoute } from "@tanstack/react-router";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export const Route = createFileRoute("/skills")({
    component: RouteComponent,
});

function RouteComponent() {
    useSmoothScroll({ enabled: true });

    return <div>Hello &quot;/skills/!&quot;</div>;
}
