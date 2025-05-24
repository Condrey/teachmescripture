import { notFound } from "next/navigation"
import AboutContent from "./about-content"
import { getProject } from "./action"

export default async function Page(){
    const project = await getProject()
    return <AboutContent project={project!}/>
}