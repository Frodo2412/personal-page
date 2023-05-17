import Technology from "@/model/Technology";
import Language from "@/model/Language";
import {knownTechnologies} from "@/data/Technologies";
import Image from "next/image";

function TechnologyCard(props: { tech: Technology }) {

    return (
        <a
            href={props.tech.link}
            className={"flex flex-col items-center justify-center bg-white rounded-md shadow-md m-5 w-30 h-30 p-5"}
        >
            <Image
                src={props.tech.logo}
                alt={props.tech.name}
                width={100}
                height={100}
            />
            <h1 className={"text-gray-900 text-lg"}>
                {props.tech.name}
            </h1>
        </a>
    )

}

function LanguageSection(props: { lang: Language }) {

    return (
        <div className={"pb-10"}>
            <div className={"flex flex-row border-b-2 border-gray-900 dark:border-gray-50 mb-2 p-2 max-w-5xl"}>
                <Image
                    className={"mr-5 rounded-md"}
                    src={props.lang.logo}
                    alt={props.lang.name}
                    width={50}
                    height={50}
                />
                <h1 className={"text-gray-900 dark:text-white text-5xl"}>{props.lang.name}</h1>
            </div>
            <div className={"flex flex-wrap"}>
                {props.lang.technologies.map((technology: Technology) =>
                    <TechnologyCard
                        key={technology.name}
                        tech={technology}
                    />
                )}
            </div>
        </div>
    );

}

function Section(props: { title: string, technologies: Language[] }) {

    return (
        <div className={"flex flex-row m-10"}>
            <div className={"border-r border-gray-200 dark:border-gray-700 mr-5 w-1/3"}>
                <h1 className={"text-gray-900 dark:text-white text-5xl mr-5"}>{props.title}</h1>
            </div>
            <div className={"flex flex-col w-3/4"}>
                {props.technologies.map((lang: Language) =>
                    <LanguageSection
                        key={lang.name}
                        lang={lang}
                    />
                )}
            </div>
        </div>
    )

}


export default function Skills() {

    return (
        <div className={"w-full min-h-10 flex flex-col justify-center items-center"}>
            <ol className={"relative max-w-6xl"}>
                <li><Section title={"What I know"} technologies={knownTechnologies}/></li>
            </ol>
        </div>
    )

}