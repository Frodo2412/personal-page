import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                    "md:hover:after:w-full md:hover:after:bg-white md:hover:after:rounded-full md:hover:after:mt-1.5 md:hover:after:mb-0.5"}>
                <h1 className={"text-3xl"}>
                    Bruno
                    Lemus</h1>
                <h2>Functional Programming Evangelist</h2>
            </div>
        </Link>
    )

}

export default function Navbar(props: { links: NavLinkProps[] }) {

    return (
        <div
            className={"flex flex-row bg-gradient-to-b from-black to-transparent text-lg text-white p-5 pr-10"}>
            <div className={"flex justify-between items-center flex-1"}>
                <Icon/>
                <ul className={"hidden md:flex flex-1 justify-around items-center h-auto"}>
                    {props.links.map(link => <NavLink key={link.text} {...link} />)}
                </ul>
            </div>
        </div>
    )

}