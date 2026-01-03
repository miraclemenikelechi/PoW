import "./index.scss";

import { AnimatePresence, motion } from "motion/react";
import { Fragment, Suspense, useState } from "react";

import { RenderUsername } from "@/components/nav-bar-username";
import { MenuButton } from "@/components/nav-menu-button";
import { cn } from "@/lib/utils";

import { NAVIGATION_LINKS } from "./constants";
import { NavbarSkeleton } from "./skeleton";

export function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => setIsOpen((previous) => !previous);
    const closeMenu = () => setIsOpen(false);

    return (
        <Suspense fallback={<NavbarSkeleton />}>
            <header
                className={cn(
                    "font-doto sticky top-0 mx-auto flex max-w-7xl items-center justify-between p-5",
                    "lg:p-10",
                )}
            >
                <RenderUsername />

                <aside className={cn("hidden space-x-6", "lg:block")}>
                    {NAVIGATION_LINKS.map(function ({ title, href }, index) {
                        return (
                            <a
                                href={href}
                                key={index}
                                rel="noreferrer"
                                className={cn(
                                    "text-xl text-white transition hover:text-pink-200",
                                    "navigation-bar-link",
                                )}
                            >
                                [{title}]
                            </a>
                        );
                    })}
                </aside>

                <MenuButton isOpen={isOpen} onToggle={toggleMenu} />
            </header>

            <AnimatePresence>
                {isOpen && (
                    <Fragment>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMenu}
                        />

                        <motion.div
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1, opacity: 0 }}
                            className={cn("absolute size-full rounded bg-black/60", "navigation-bar-menu")}
                        >
                            <div className={cn("flex size-[90%] flex-col items-end space-y-6 rounded-xl p-5")}>
                                {NAVIGATION_LINKS.map(({ title, href }, index) => (
                                    <motion.a
                                        key={title}
                                        href={href}
                                        onClick={closeMenu}
                                        initial={{ opacity: 0, y: 5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 + index * 0.1 }}
                                        className="font-doto text-left text-4xl font-light tracking-wider text-white transition hover:text-pink-200"
                                    >
                                        [{title}]
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </Fragment>
                )}
            </AnimatePresence>
        </Suspense>
    );
}
