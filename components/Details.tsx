"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import type { ProjectData } from "@/app/data/data"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "./ui/badge"

interface ProjectCardProps {
  project: ProjectData
}

const ProjectDetails: React.FC<ProjectCardProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(project.image)

  const allImages = [project.image, ...(project.image || [])]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full h-full p-4 flex flex-col items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
          <p className="text-muted-foreground">{project.subtitle}</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{project.name}</DialogTitle>
          <DialogDescription className="text-lg">{project.subtitle}</DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
          <div className="order-2 lg:order-1">
            <div className="mb-4 hidden sm:block">
              <Image
                src={project.image || ""}
                width={400}
                height={300}
                alt={`${project.name} screenshot`}
                className="w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>
         
            {/* <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`flex-shrink-0 ${selectedImage === image ? "ring-2 ring-primary" : ""}`}
                >
                  <Image
                    src={"/placeholder.svg"}
                    width={80}
                    height={60}
                    alt={`${project.name} thumbnail ${index + 1}`}
                    className="w-20 h-15 object-cover rounded"
                  />
                </button>
              ))}
            </div> */}
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-between">
            <div>
              <h5 className="text-xl font-semibold mb-2">Descripción</h5>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <h5 className="text-xl font-semibold mb-2">Tecnologías utilizadas</h5>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills?.map((skill, index) => (
                <Image
                src={skill.image || ""}
                width={20}
                height={20}
                alt=""
                className="w-10 h-auto p-2"
                priority
              />
                ))}
              </div>
            </div>
            <div className="flex justify-start gap-4 mt-4">
              {project.link && (
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Ver proyecto
                  </a>
                </Button>
              )}
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Ver código
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDetails

