'use client'
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ProjectData, QualificationSection } from "@/app/data/data";


interface ProjectCardProps {
    project: ProjectData;
}

const Details: React.FC<ProjectCardProps> = ({ project }) => {
    const getData = (arr: QualificationSection[], title: string): QualificationSection | undefined => {
        return arr.find((item) => item.title === title);
    };
    return (
        <Dialog>
            <DialogTrigger className="justify-center text-center">
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
                            <div className="flex items-center justify-center">
                                <DialogFooter className="flex-row flex-wrap gap-3">

                                    {project.skills?.map((item, index) => {
                                        const { image } = item;
                                        return (
                                            image ? (
                                                <div key={index} className="flex items-start justify-start">
                                                    <div className="relative w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] ">
                                                        <Image
                                                            src={image}
                                                            layout="fill"
                                                            objectFit="contain"
                                                            alt={'Skill icon'}
                                                            className="drop-shadow-md hover:drop-shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                                        />
                                                    </div>

                                                </div>
                                            ) : null
                                        );
                                    })}
                                </DialogFooter>
                            </div>

                        </DialogHeader>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default Details