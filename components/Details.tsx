'use client'
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

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

const Details: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.subtitle}</p>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="order-1 lg:order-1 hidden lg:flex">
                        <Image className="w-full h-auto shadow-2xl" src={project.image || "project"} width={400} height={400} alt="" priority />
                    </div>
                    <div className="order-2 lg:order-2">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">{project.name}</DialogTitle>
                            <DialogDescription className="text-lg">
                                {project.description}
                            </DialogDescription>
                        </DialogHeader>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Details