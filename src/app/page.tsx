import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/app/Hero";
import Experience from "@/app/Experience";
import Contact from "@/app/Contact";
import Skills from "@/app/Skills";
import background from "../../public/constellations.jpg";

export default function Home() {

    return (
        <main className={"dark:bg-gray-900 bg-white"}>

            <div className={"w-full bg-cover"} style={{backgroundImage: `url(${background.src})`}}>
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

            <Experience />
            <Skills/>
            <Contact/>

        </main>
    )
}
