import { Variants } from "motion/react";

export const PROJECT_CARDS_VARIANT: Variants = {
    hidden(isDesktop: boolean) {
        return {
            opacity: 0,
            y: isDesktop ? 24 : 12,
            scale: isDesktop ? 0.95 : 1,
        };
    },

    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};
