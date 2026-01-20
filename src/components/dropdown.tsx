import { AnimatePresence, easeIn, easeOut, motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type DropdownButton<T extends string> = {
    render?: ReactNode;
    title: ReactNode;
    value: T;
};

interface DropdownProps<T extends string> {
    icon?: "filled" | "outlined";
    onChange: (value: T) => void;
    options: DropdownButton<T>[];
    styles?: Record<string, string>;
    value?: T;
}

export function Dropdown<T extends string>({ onChange, options, styles, value }: DropdownProps<T>) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const parentWrapperRef = useRef<HTMLElement | null>(null);

    const listVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.15,
                ease: easeOut,
            },
        },
        closed: {
            y: -15,
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: easeIn,
            },
        },
    };

    function handleSelect(value: T) {
        onChange(value);
        setIsOpen(false);
    }

    useEffect(function () {
        function handleClickOutside(event: MouseEvent) {
            if (parentWrapperRef.current && !parentWrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <section ref={parentWrapperRef} className={cn(styles?.parentWrapper, "relative w-max")}>
            <Button
                className={cn(
                    styles?.parentButton,
                    "h-7 min-w-20 cursor-pointer rounded-full",
                    "bg-(--primary--200) text-(--secondary--200)",
                    isOpen && "bg-primary/90",
                )}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xs capitalize">{options.find((item) => item.value === value)?.title}</span>
            </Button>

            <AnimatePresence>
                {isOpen ? (
                    <motion.ul
                        className="absolute top-[115%] z-5 w-full"
                        key={"home-dropdown"}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={listVariants}
                    >
                        {options
                            .filter((option) => option.value !== value)
                            .map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex h-7 w-full items-center justify-start rounded-full bg-(--primary--200)"
                                >
                                    <button onClick={() => handleSelect(item.value)} className="size-full">
                                        <span className="flex items-center justify-center text-xs text-(--secondary--100)">
                                            {item.render ?? item.title}
                                        </span>
                                    </button>
                                </motion.li>
                            ))}
                    </motion.ul>
                ) : null}
            </AnimatePresence>
        </section>
    );
}
