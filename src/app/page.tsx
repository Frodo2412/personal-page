import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/app/Hero";
import {jobs} from "@/data/Jobs";
import JobCard from "@/app/JobCard";

export default function Home() {

    return (
        <main className={"bg-gray-900"}>

            <div className={"w-full bg-cover"} style={{backgroundImage: "url(/constellations.jpg)"}}>
                <Navbar
                    links={[
                        {href: '/blog/', text: "Blog"},
                        {href: '/#experience', text: "Experience"},
                        {href: '/#skills', text: "Technologies"},
                        {href: '/#contact', text: "Contact"},
                    ]}
                />
                <Hero/>
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
