import "./index.scss";

import { createFileRoute } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

import { AboutText } from "../apps/landing/about-text";
import { ProfilePic } from "../apps/landing/profile-pic";

export const Route = createFileRoute("/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <main className={cn("mx-auto grid max-w-7xl grid-rows-2", "lg:grid-cols-2", "home__wrapper")}>
            <ProfilePic />
            <AboutText />
        </main>
    );
}
