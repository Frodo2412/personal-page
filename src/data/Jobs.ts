import Job from "@/model/Job";


export const jobs: Job[] = [
    {
        title: "Specialist Engineer",
        link: "https://www.globant.com/",
        company: "Globant",
        companyLogo: "/companies/globant.jpeg",
        date: "Feb. 2023 - Present",
        activities: [
            "Develop and maintain high performance microservices utilizing the Typelevel stack",
            "Help coworkers advance their Scala knowledge and expertise via pairgramming, presentations and recommendation of training resources",
            "Participated in the design and development of CI/CD pipelines, leveraging Jenkins to enforce quality gates and automate the deployment of applications to AWS"
        ]
    },
    {
        title: "Software Developer",
        link: "https://www.bqn.com.uy/",
        company: "BQN",
        companyLogo: "/companies/bqn.png",
        date: "Aug. 2021 - Feb. 2023",
        activities: [
            "Improved query efficiency by leveraging recursive queries",
            "Trained new hires in Scala",
            "Introduced new design patterns into internal libraries, increasing developer experience and efficiency",
            "Developed and maintained web services utilising Scala Play",
            "Implemented digital signature functionality for a web application using Scala and Java Cryptography",
        ]
    }
]
