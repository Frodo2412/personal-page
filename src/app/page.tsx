import React from "react";
import Navbar from "@/components/Navbar";
import {jobs} from "@/data/Jobs";
import JobCard from "@/app/JobCard";

export default function Home() {

    return (
        <main className={"bg-gray-900"}>

            <div className={"w-full bg-cover bg-[url(/constellations.jpg)]"}>
                <Navbar
                    links={[
                        {href: '/blog/', text: "Blog"},
                        {href: '/#experience', text: "Experience"},
                        {href: '/#skills', text: "Technologies"},
                        {href: '/#contact', text: "Contact"},
                    ]}
                />
                <div className={"w-full min-h-10 flex items-center justify-center p-20 text-white animate-blur"}>
                    <div className={"flex bg-slate-900/50 p-10 max-w-6xl md:flex-row flex-col"}>
                        <p className={"hidden md:block text-6xl text-right max-w-5xl animate-fadeRight"}>
                            Do you want to build <strong>efficient</strong> software that <strong>scales</strong>?
                        </p>
                        <div className={"flex-grow-0 border-gray-300 border-r-2 pr-5 animate-expand"}/>
                        <div className={"flex flex-col content-center justify-center ml-5 animate-fadeDown"}>
                            <h1 className={"text-6xl"}>Hello there, I&apos;m Bruno.</h1>
                            <p className={"text-lg"}>
                                I&apos;m a software engineer with a passion for big scale, highly concurrent distributed
                                systems.
                                I strongly believe the best way to build them is by leveraging the power of functional
                                programming.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id={"experience"} className={"flex flex-col justify-around content-around text-lg w-full"}>
                <div className={"flex flex-row justify-center items-center bg-zinc-900"}>
                    <h1 className="text-6xl font-bold text-white text-center bg-transparent m-10">Where I&apos;ve
                        worked</h1>
                </div>
                <div
                    className={"flex flex-row justify-center content-center text-black bg-gray-100 p-10"}>
                    <ol className={"relative border-l border-gray-300 max-w-5xl"}>
                        {jobs.map((job) =>
                            <li key={job.company} className={"mb-10 ml-4"}>
                                <JobCard key={job.title + job.company} {...job}/>
                            </li>)}
                    </ol>
                </div>
            </div>

        </main>
    )
}
