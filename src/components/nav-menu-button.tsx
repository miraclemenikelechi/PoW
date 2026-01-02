import "@styles/nav_menu_button.scss";

import { AlignRight, X } from "lucide-react";

import { cn } from "@/lib/utils";

interface MenuButtonProps {
    isOpen: boolean;
    onToggle: () => void;
}

export function MenuButton({ isOpen, onToggle }: MenuButtonProps) {
    return (
        <section className={cn(`flex items-center justify-center`, `lg:hidden`)}>
            <button
                onClick={onToggle}
                className={`relative size-10 nav-menu-button--${isOpen ? "open" : "close"}`}
                id={`nav-menu-button`}
            >
                <span className={`flex size-10 items-center justify-center`}>
                    <i>{isOpen ? <X /> : <AlignRight />}</i>
                </span>
            </button>
        </section>
    );
}
