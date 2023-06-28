'use client'

import {ContactInfo} from "@/model/ContactInfo";
import {contactInfos} from "@/data/ContactInfos";
import Image from "next/image";
import React from "react";
import useElementOnScreen from "@/hooks/useElementOnScreen";

function ContactMethod(props: ContactInfo) {

    return (
        <div className={"flex flex-row justify-start items-center m-5"}>
            <a href={props.link} className={"flex flex-col justify-center items-center"}>
                <Image src={props.logo} alt={props.name} className={"rounded-md"} width={40} height={40}/>
            </a>
        </div>
    )

}

export default function Contact() {

    const [containerRef, isVisible] = useElementOnScreen({
        threshold: 0.5,
        reappear: true,
    });

    return (
        <div id={"contact"} ref={containerRef}
             className={"w-full min-h-10 bg-gray-700 p-10"}>
            <div
                className={"flex flex-row justify-center items-center transition duration-1000" + `${isVisible ? "opacity-100 blur-none translate-x-0" : "opacity-0 blur-lg -translate-x-20"}`}>
                <div className={"relative max-w-6xl"}>
                    <div className={"relative flex flex-col justify-center items-center border-gray-500"}>
                        {contactInfos.map((contactInfo, index) => <ContactMethod {...contactInfo} key={index}/>)}
                    </div>
                </div>
                <div className={"flex-grow-0 border-gray-300 border-r-2 pr-5"}/>
                <div className={"ml-5 max-w-md"}>
                    <h1 className={"text-4xl text-white"}>Wanna chat? Here&apos;s where you can find me.</h1>
                </div>
            </div>
        </div>

    )

}