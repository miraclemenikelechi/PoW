import { Fragment } from "react";

export default function Component() {
    return (
        <section className={`space-y-8 border p-4`}>
            <Title />
            <BriefAbout />
        </section>
    );
}

function Title() {
    return <h1 className={`text-3xl font-bold`}>Hi, I&apos;m Miracle</h1>;
}

function BriefAbout() {
    const yearsOfExp = 4;

    return (
        <Fragment>
            <p className={`text-xl`}>
                Full-Stack Software Engineer with {yearsOfExp} years of experience building web applications with
                JavaScript, Typescript, Express, Python specializing in front-end on JavaScript libraries like React,
                frameworks like Next, React-router, TanStack and back-end frameworks on 🐍 with FastAPI, building
                RESTful APIs.
            </p>
            <p className={`text-xl`}>
                I am passionate about building web applications that provide excellent user experiences, are scalable,
                and are easy to maintain 💜
            </p>
        </Fragment>
    );
}
