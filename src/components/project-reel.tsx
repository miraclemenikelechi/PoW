// import "@styles/project-reel.scss";

// import { useBreakpoint } from "@/hooks/use-breakpoint";
// import { cn } from "@/lib/utils";
// import { iProject } from "@/types";

// export default function Component({ href, liveURL, previewImg, stack, title }: iProject) {
//     const isMobile = useBreakpoint({ bp: "mobile", type: "max" });

//     return (
//         <article
//             className={cn(
//                 "flex aspect-square flex-col items-center justify-start rounded-[1.25rem] border border-zinc-900",
//                 isMobile ? "" : "",
//             )}
//             id="project-reel"
//         >
//             <section className="flex aspect-auto h-1/2 w-full items-center justify-center overflow-hidden rounded-xl p-2 ">
//                 <img src={previewImg} alt="" className="size-full" />
//             </section>

//             {/* <hr className="w-full" /> */}

//             <section className="flex aspect-auto h-1/2 w-full items-center justify-center overflow-hidden rounded-xl p-2">
//                 <h2>title</h2>
//             </section>
//         </article>
//     );
// }
