'use client'

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { useState } from "react";


interface ProjectData {
    image?: string;
    category?: string;
    name?: string;
    subtitle?: string;
    description?: string;
    link?: string;
    github?: string;
}

const projectData: ProjectData[] = [
    {
        image: '/work/cubix.png',
        category: 'Fullstack',
        name: "Cubix & Bets",
        subtitle: "Casino Cubix & Bets - Plataforma de casino con criptomonedas",
        description: "En este proyecto, participé en la creación de una plataforma de juegos de casino donde las transacciones se realizaban con criptomonedas. Mi principal rol fue en el desarrollo del Backend, donde me encargué de construir el flujo de creación de usuarios. Esto incluía la integración con la plataforma de juegos, permitiendo la creación de usuarios tanto en la plataforma externa como en nuestra base de datos local. Además, implementé medidas de seguridad en los endpoints, aplicándolas de forma global en todo el proyecto.También incorporé bibliotecas de tipado fuerte en el Backend para prevenir errores y mejorar el manejo de las respuestas, asegurando así una mayor robustez en el sistema.Adicionalmente, fui responsable de crear los tests de prueba y usabilidad, garantizando la fiabilidad y calidad de la plataforma.En el Frontend, mi contribución fue principalmente a nivel de lógica, donde desarrollé funciones que mejoraron la fluidez y usabilidad de la plataforma.",
        link: 'https://casino-cubix.vercel.app/',
        github: 'https://github.com/Jerebrrs/casino-cubix'

    },
    {
        image: '/work/donando.png',
        category: 'Fullstack',
        name: "Donando App",
        subtitle: "Web de donaciones, para organizaciones sin fin de lucro.",
        description: "Crear una plataforma web para facilitar la difusión y recaudación de fondos para campañas relacionadas con catástrofes ambientales y problemáticas sociales, proporcionando una interfaz intuitiva tanto para donantes como para las entidades que solicitan donaciones, esta donación se realiza de forma transparente a través de una pasarela de pago. Mi función se enfoco en la construcción del Backend, donde logramos desarrollar una aplicación solida y segura aplicando buenas practicas. Se utilizo las siguientes tecnologías : Javascript, Node.js,Express, Sequelize, PostgresQL, Cloudinary ,Multer, Json Web token, Bcrypt, Fly.io. Métodos Scrum en el ámbito de desarrollo, con roles definidos, comunicación grupal, sprint diarios.",
        link: 'https://donando.vercel.app',
        github: 'https://github.com/Jerebrrs/back-no-country-c18-03--m-nodeObjetivo'

    },
    {
        image: '/work/liga.png',
        category: 'Fullstack',
        name: "Liga Paceña de Futbool",
        subtitle: "Diario deportivo de la ciudad de La Paz, Entre Rios.",
        description: "Proyecto Futbol La Paz, proyecto propio construido desde 0. El objetivo del proyecto es crear un diario digital que informe sobre el futbol local de la region de La Paz, Entre Rios.Esta web en principio permite leer articulos periodisticos de diferentes comunicadores de la region. Actualmente esta en construccion dandoles nuevas funcionalidades.Tecnologias:Frontend: Javascript, React/Vite, Redux, HTML. CSS, Vercel.Backend:Typescript, Node.js , Express, Sequelize, PostgreSQL, Bcrypt, jsonwebtoken,Multer,Cloudinary, Realway.",
        link: 'https://lapazfutbol.vercel.app',
        github: 'https://github.com/Jerebrrs/backend-Lpf'

    },
    {
        image: '/work/wearfashion.png',
        category: 'Fullstack',
        name: "Wearfashion",
        subtitle: "Ecommerce de ropa Urbana.",
        description: "Ecommerce de ropa Urbana.",
        link: 'https://wearfashion.vercel.app',
        github: 'https://github.com/DanielJulianCardenasMora/proyecto_grupal_henry'

    },
]

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

