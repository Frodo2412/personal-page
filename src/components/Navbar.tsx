'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useTheme} from "next-themes";

interface NavLinkProps {
    href: string;
    text: string;
}

function NavLink(props: NavLinkProps) {

    return (
        <li className={"flex items-center justify-center"}>
            <Link className={"self-center justify-self-center text-xl m-0.5 transition-all duration-500 " +
                "hover:text-2xl hover:m-0 hover:font-semibold " +
                "after:content-[''] after:block after:m-auto after:w-0 after:h-1 after:transition-all duration-500 " +
                "hover:after:w-full hover:after:bg-white hover:after:rounded-full hover:after:mt-1.5 hover:after:mb-0.5"
            }
                  href={props.href}>{props.text}
            </Link>
        </li>
    )

}

function Icon() {

    return (
        <Link href={'/'} className={"flex flex-row items-center"}>
            <Image
                src={"/profile.jpeg"}
                alt={"profile"}
                className={"rounded-full border-2 border-white mr-5"}
                width={80}
                height={80}
            />
            <div
                className={"after:content-[''] after:block after:m-auto after:w-0 after:h-1 after:transition-all duration-500 " +
                    "hover:after:w-full hover:after:bg-white hover:after:rounded-full hover:after:mt-1.5 hover:after:mb-0.5"}>
                <h1 className={"text-3xl"}>
                    Bruno
                    Lemus</h1>
                <h2>Functional Programming Evangelist</h2>
            </div>
        </Link>
    )

}

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

export default function Navbar(props: { links: NavLinkProps[] }) {

    const {theme, setTheme} = useTheme();

    const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark");

    return (
        <div
            className={"flex flex-row bg-gradient-to-b from-black to-transparent text-lg text-white p-5 pr-10"}>
            <div className={"flex justify-between items-center flex-1"}>
                <Icon/>
                <ul className={"hidden md:flex flex-1 justify-around items-center h-auto"}>
                    {props.links.map(link => <NavLink key={link.text} {...link} />)}
                </ul>
            </div>
            <button className={"flex items-center justify-center"} onClick={toggleDarkMode}>
                {theme === "light" ? <SunIcon/> : <MoonIcon/>}
            </button>
        </div>
    )

}