import Language from "@/model/Language";

const scalaKnown: Language = {
    name: "Scala",
    logo: "https://cdn.worldvectorlogo.com/logos/scala-4.svg",
    link: "/languages/scala.png",
    technologies: [
        {
            name: "Cats",
            link: "https://typelevel.org/cats/",
            logo: "/techs/cats.png",
        },
        {
            name: "Cats-Effect",
            link: "https://typelevel.org/cats-effect/",
            logo: "/techs/cats-effect.svg",
        },
        {
            name: "Http4s",
            link: "https://http4s.org/",
            logo: "/techs/http4s.svg",
        }, {
            name: "Doobie",
            link: "https://tpolecat.github.io/doobie/",
            logo: "/techs/doobie.svg",
        }, {
            name: "Circe",
            link: "https://circe.github.io/circe/",
            logo: "/techs/circe.png",
        }, {
            name: "Fs2",
            link: "https://fs2.io/",
            logo: "/techs/fs2.png",
        }
    ]
}
export const knownTechnologies: Language[] = [scalaKnown]

