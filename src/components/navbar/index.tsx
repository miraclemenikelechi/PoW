import "./index.scss";

import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Suspense, useState } from "react";

import { RenderUsername } from "@/components/nav-bar-username";
import { MenuButton } from "@/components/nav-menu-button";
import { cn } from "@/lib/utils";

import { NAVIGATION_LINKS } from "./constants";
import { NavbarSkeleton } from "./skeleton";

export function Navbar() {
    const MotionLinkButton = motion(Link);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((previous) => !previous);
    const closeMenu = () => setIsOpen(false);

    return (
        <Suspense fallback={<NavbarSkeleton />}>
            <header
                className={cn(
                    "font-doto sticky top-0 mx-auto flex max-w-7xl items-center justify-between p-5",
                    "lg:p-10",
                    `navigation-bar--${isOpen ? "open" : "close"}`,
                )}
                id="navigation-bar"
            >
                <RenderUsername />

                <nav className={cn("hidden gap-10", "lg:flex")}>
                    {NAVIGATION_LINKS.map(function ({ title, href }, index) {
                        return (
                            <Link
                                to={href}
                                key={index}
                                className={cn(
                                    "text-xl text-white transition-all duration-150 hover:text-pink-200",
                                    "navigation-bar-link",
                                )}
                            >
                                <span>{title}</span>
                            </Link>
                        );
                    })}
                </nav>

                <MenuButton isOpen={isOpen} onToggle={toggleMenu} />
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ scale: 1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1, opacity: 0 }}
                        className={cn("fixed size-full", "navigation-bar-menu")}
                    >
                        <nav className={cn("flex h-full w-[95%] flex-col items-end space-y-6 rounded-xl p-5")}>
                            {NAVIGATION_LINKS.map(({ title, href }, index) => (
                                <MotionLinkButton
                                    key={title}
                                    to={href}
                                    onClick={closeMenu}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 + index * 0.1 }}
                                    className="font-doto text-left text-4xl font-light tracking-wider text-white transition hover:text-pink-200"
                                >
                                    [{title}]
                                </MotionLinkButton>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </Suspense>
    );
}
