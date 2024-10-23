'use client'

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useState } from "react";
import { ProjectData, projectData } from "../data/data";



const uniqueCategories: string[] = ["All Projects"].concat(
    Array.from(new Set(projectData.map((item) => item.category).filter(Boolean) as string[]))
)


export default function Projects() {
    const [categorias, setCategorias] = useState(uniqueCategories);
    const [category, setCategory] = useState('All Projects');
    const filterProjects: ProjectData[] = projectData.filter(project => {
        return category === 'All Projects' ? project : project.category === category
    })
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">Mis Proyectos</h2>
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {categorias.map((category, index) => {
                            return (
                                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index}
                                    className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>
                            )
                        })}
                    </TabsList>
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filterProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            )
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

