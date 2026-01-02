import { Outlet } from "react-router";

import { Navbar } from "@/views/navbar";

export function BaseLayout() {
    return (
        <section className="h-svh text-white">
            <Navbar />
            <Outlet />
        </section>
    );
}
