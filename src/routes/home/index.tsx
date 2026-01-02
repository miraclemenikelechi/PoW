import "./index.scss";

import { cn } from "@/lib/utils";

import { AboutText } from "./components/about-text";
import { ProfilePic } from "./components/profile-pic";

export default function Home() {
    return (
        <main className={cn("mx-auto grid max-w-7xl grid-rows-2", "lg:grid-cols-2", "home__wrapper")}>
            <ProfilePic />
            <AboutText />
        </main>
    );
}
