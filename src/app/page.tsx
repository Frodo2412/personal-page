'use client';

import React, {useState} from "react";
import Navbar from "@/app/Navbar";
import Hero from "@/app/Hero";
import Experience from "@/app/Experience";
import Contact from "@/app/Contact";
import Skills from "@/app/Skills";
import background from "../../public/constellations.jpg";

function SunIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
        </svg>

    )
}

function MoonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
    )
}

export default function Home() {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => setDarkMode(isDarkMode => !isDarkMode)

    return (
        <main className={darkMode ? "bg-gray-900 dark" : "bg-white"}>

            <div className={"w-full bg-cover"} style={{backgroundImage: `url(${background.src})`}}>
                <div
                    className={"flex flex-row bg-gradient-to-b from-black to-transparent text-lg text-white p-5 pr-10"}>
                    <Navbar className={"flex-1"}/>
                    <button className={"flex items-center justify-center"} onClick={toggleDarkMode}>
                        {darkMode ? <SunIcon/> : <MoonIcon/>}
                    </button>
                </div>
                <Hero/>
            </div>

            <Experience/>

            <Skills/>
            <Contact/>

        </main>
    )
}
