import Job from "@/model/Job";
import Image from "next/image";

export default function JobCard({title, link, company, companyLogo, date, activities}: Job) {

    return (
        <>
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-gray-100"></div>
            <div className={"flex flex-row"}>
                <div className={"w-1/4"}>
                    <time
                        className="mb-1 text-xl font-normal leading-none text-gray-500"> {date} </time>
                </div>
                <div
                    className={"flex flex-col content-center justify-center pl-2 w-3/4 pr-10"}>
                    <div className={"flex flex-col"}>
                        <a href={link} className={"w-fit"}>
                            <div className={"flex flex-row justify-start items-center gap-5"}>
                                <Image
                                    className={"rounded-full"}
                                    src={companyLogo}
                                    alt={company}
                                    height={48}
                                    width={48}
                                />
                                <div className={"text-xl font-semibold text-gray-900"}> {company} </div>
                            </div>
                        </a>
                        <div
                            className={"mt-5 text-gray-600"}>
                            <h1 className={"text-lg font-medium"}> {title} </h1>
                            <ul
                                className={"list-disc list-outside text-base"}>
                                {activities.map((activity) => <li key={activity}> {activity} </li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}