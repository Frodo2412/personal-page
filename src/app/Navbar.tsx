import Image from "next/image";
import Link from "next/link";

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
        <div className={"flex flex-row items-center"}>
            <Image
                src={"/profile.jpeg"}
                alt={"profile"}
                className={"rounded-full border-2 border-white mr-5"}
                width={80}
                height={80}
            />
            <div>
                <h1 className={"text-3xl"}>Bruno Lemus</h1>
                <h2>Functional Programming Evangelist</h2>
            </div>
        </div>
    )

}

export default function Navbar(props: { className: string }) {

    return (
        <div className={"flex justify-between items-center " + props.className}>
            <Icon/>
            <ul className={"hidden md:flex flex-1 justify-around items-center h-auto"}>
                <NavLink href={"#"} text={"Home"}/>
                <NavLink href={"/posts/"} text={"Blog"}/>
                <NavLink href={"#"} text={"Experience"}/>
                <NavLink href={"#"} text={"Technologies"}/>
                <NavLink href={"#"} text={"Contact"}/>
            </ul>
        </div>
    )

}