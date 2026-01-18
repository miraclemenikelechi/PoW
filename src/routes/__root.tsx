import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Navbar } from "@/components/navbar";

export const Route = createRootRoute({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <section className="h-svh">
            <Navbar />
            <Outlet />
        </section>
    );
}
