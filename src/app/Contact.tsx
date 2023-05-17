import {ContactInfo} from "@/model/ContactInfo";
import {contactInfos} from "@/data/ContactInfos";
import Image from "next/image";

function ContactMethod(props: ContactInfo) {

    return (
        <div className={"flex flex-row justify-start items-center m-5"}>
            <a href={props.link} className={"flex flex-col justify-center items-center"}>
                <Image src={props.logo} alt={props.name} className={"rounded-md"} width={20} height={20}/>
            </a>
        </div>
    )

}

export default function Contact() {

    return (
        <div id={"contact"} className={"w-full min-h-10 flex flex-row justify-center items-center bg-gray-700 p-10"}>
            <div className={"relative max-w-6xl"}>
                <div className={"relative flex flex-col justify-center items-center border-r-2 border-gray-500"}>
                    {contactInfos.map((contactInfo, index) => <ContactMethod {...contactInfo} key={index}/>)}
                </div>
            </div>
            <div className={"ml-5 max-w-md"}>
                <h1 className={"text-4xl text-white"}>Wanna chat? Here&apos;s where you can find me.</h1>
            </div>
        </div>

    )

}