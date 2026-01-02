import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Fragment } from "react";

import { Navbar } from "@/views/navbar";

export const Route = createRootRoute({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    );
}
