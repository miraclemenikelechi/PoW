import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello &quot;/skills/!&quot;</div>;
}
