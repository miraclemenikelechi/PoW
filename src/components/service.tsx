import { Fragment, useState } from "react";

import { SERVICES } from "@/assets/data/service";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface RenderServicesProps {
    type: "frontend" | "backend";
}

export function Service({ type }: RenderServicesProps) {
    const [isAccordionOpen, setIsAccordionOpen] = useState<string>("item-0");
    const services = type === "frontend" ? SERVICES.FRONTEND : SERVICES.BACKEND;

    const displayTitle = { frontend: "front end", backend: "back end" }[type];

    return (
        <Fragment>
            <h4 className="border-b pb-2.5">
                [<b className="text-muted-foreground text-lg capitalize">{displayTitle}</b>] services
            </h4>

            <Accordion type="single" collapsible={false} defaultValue={isAccordionOpen}>
                {services.map((value: Service, index: number) => {
                    const openAccordionIndex = `item-${index}`;

                    return (
                        <AccordionItem key={index} value={openAccordionIndex} className="py-5">
                            <AccordionTrigger
                                className={cn(
                                    "capitalize outline-none hover:no-underline",
                                    isAccordionOpen === openAccordionIndex ? "text-muted/90" : "text-muted-foreground",
                                )}
                                onClick={() => setIsAccordionOpen(openAccordionIndex)}
                            >
                                {value.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-lg">
                                <span
                                    className="text-muted"
                                    dangerouslySetInnerHTML={{
                                        __html: value.description,
                                    }}
                                />
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
            </Accordion>
        </Fragment>
    );
}
