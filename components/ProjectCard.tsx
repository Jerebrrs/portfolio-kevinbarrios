import { Badge, Card, CardHeader } from "./ui";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon, Github } from "lucide-react";
import Details from "./Details";

interface ProjectData {
    image?: string;
    category?: string;
    name?: string;
    subtitle?: string;
    description?: string;
    link?: string;
    github?: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader>
                <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_projects_bg_light xl:dark:bg-work_projects_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image className="absolute bottom-0 shadow-2xl" src={project.image || "project"} width={247} height={250} alt="" priority />
                    <div className="flex gap-x-4">
                        <Link href={project.link || '/'} className="bg-slate-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" target="_blank">
                            <Link2Icon className="text-white" />
                        </Link>

                        <Link href={project.github || '/'} className="bg-slate-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200" target="_blank">
                            <Github className="text-white" />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full justify-center px-8 py-6">
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
                <div className="flex justify-center">
                <Details project={project}  />
                </div>
               
            </div>
        </Card>
    );
};


export default ProjectCard;
