import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from 'lucide-react';
import React from 'react';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';
import { QualificationSection, skillsData } from '@/app/data/data';


interface InfoData {
    text?: string;
    icon?: React.ReactNode; 
}

const infoData: InfoData[] = [
    { icon: <User2 size={20} />, text: 'Kevin Jeremias Barrios' },
    { icon: <PhoneCall size={20} />, text: '+54 9 3435 33-0498' },
    { icon: <MailIcon size={20} />, text: 'kevinjeremiasbarrios@g,ail.com' },
    { icon: <Calendar size={20} />, text: '22 de Noviembre, 1996.' },
    { icon: <GraduationCap size={20} />, text: 'Full Stack Web Developer' },
    { icon: <HomeIcon size={20} />, text: 'Paraná, Entre Rios, Argentina.' },
];

const qualificationData: QualificationSection[] = [
    {
        title: 'Educacion',
        data: [
            {
                academia: 'Universidad Tecnologica Nacional - UTN',
                role: 'Tecnico Universitario en Programación.',
                years: 'Ene 2025 - Actualidad.',
            },
            {
                academia: 'Alura Latam + Oracle',
                role: 'Desarrollador Backend Java + Oracle.',
                years: 'Jun 2024 - Ene 2025.',
            },
            {
                academia: 'Soy Henry',
                role: 'Desarrollador Web Full Stack.',
                years: 'Sep 2023 - Abr 2024',
            },
            {
                academia: 'Argentina Programa 4.0',
                role: 'Backend Developer',
                years: 'Ene 2023 - Jul 2023',
            },
        ],
    },
    {
        title: 'Experiencia',
          data: [
      {
        company: "Bombieri",
        role: "Full Stack Web Developer",
        years: "Mar 2025 - Jun 2025",
      },
      {
        company: "Edtools",
        role: "Full Stack Web Developer",
        years: "Dic 2024- Feb 2025",
      },
      {
        company: "Sparrow Store",
        role: "Emprendedor",
        years: "Dic 2023 - Actualidad",
      },
      {
        company: "Selplast SA",
        role: "Administrador",
        years: "May 2018 - Oct 2023",
      },
    ],
    },
];



const About: React.FC = () => {
    // Tipar adecuadamente la función getData
    const getData = (arr: QualificationSection[], title: string): QualificationSection | undefined => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24 py-5">
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Sobre Mi</h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className=' hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-hero_shape w-[480px] h-[480px] bg-no-repeat relative'
                            ImgSrc='/perfil-remove.png' />
                    </div>
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informacion Personal</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Carrera Profesional</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Full Stack Developer</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:max-0'>
                                        En Frontend, manejo tecnologías como JavaScript, TypeScript y frameworks modernos como React y Next.js, además de trabajar con estilos usando CSS y Tailwind. En Backend, mi especialización está en Java y Spring Boot, complementada con experiencia en NestJS, Node.js, Express.js y GraphQL. También tengo conocimientos en bases de datos como SQLite, PostgreSQL y MongoDB, junto con herramientas clave como Docker y Google Cloud para despliegues en la nube.
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div >{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary '>Lenguajes</div>
                                            <div className='border-b border-border'></div>
                                            <div>Ingles, Español</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'> Mi Carrera como Profesional</h3>

                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'Experiencia')?.title}
                                                    </h4>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col gap-y-8'>
                                                        {getData(qualificationData, 'Experiencia')?.data.map((item, index) => {
                                                            const { role, years, company } = item;
                                                            return (
                                                                <div key={index} className='flex gap-x-8 group'> {/* Cambia el fondo para modo oscuro */}
                                                                    <div className='h-[84px] w-[1px] bg-border dark:bg-gray-500 relative ml-2'> {/* Cambia la línea en modo oscuro */}
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-dark absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2 text-black dark:text-white'> {/* Texto en modo oscuro */}
                                                                            {company}
                                                                        </div>
                                                                        <div className='text-lg leading-none mb-4 text-gray-700 dark:text-gray-300'> {/* Texto en modo oscuro */}
                                                                            {role}
                                                                        </div>
                                                                        <div className='text-base font-medium text-gray-600 dark:text-gray-400'> {/* Texto en modo oscuro */}
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap size={28} />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'Educacion')?.title}
                                                    </h4>
                                                </div>
                                                <div>
                                                    <div className='flex flex-col gap-y-4'>
                                                        {getData(qualificationData, 'Educacion')?.data.map((item, index) => {
                                                            const { role, years, academia } = item;

                                                            return (
                                                                <div key={index} className='flex gap-x-8 group'> {/* Cambia el fondo para modo oscuro */}
                                                                    <div className='h-[84px] w-[1px] bg-border dark:bg-gray-500 relative ml-2'> {/* Cambia la línea en modo oscuro */}
                                                                        <div className='w-[11px] h-[11px] rounded-full bg-primary dark:bg-primary-dark absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-semibold text-xl leading-none mb-2 text-black dark:text-white'> {/* Texto en modo oscuro */}
                                                                            {academia}
                                                                        </div>
                                                                        <div className='text-lg leading-none mb-4 text-gray-700 dark:text-gray-300'> {/* Texto en modo oscuro */}
                                                                            {role}
                                                                        </div>
                                                                        <div className='text-base font-medium text-gray-600 dark:text-gray-400'> {/* Texto en modo oscuro */}
                                                                            {years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>Tecnologias de uso diario</h3>
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Backend</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-y-3 justify-center xl:justify-start'>
                                                {getData(skillsData, 'Backend')?.data.map((item, index) => {
                                                    const { image } = item;
                                                    return (
                                                        image ? (
                                                            <div key={index} className="flex justify-center">
                                                                <div className="relative w-[48px] h-[48px]">
                                                                    <Image
                                                                        src={image}
                                                                        layout="fill"
                                                                        objectFit="contain" 
                                                                        alt={item.name || 'Skill icon'}
                                                                        className="drop-shadow-md hover:drop-shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : null
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2'>Frontend</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 justify-center xl:justify-start'>
                                                {getData(skillsData, 'Frontend')?.data.map((item, index) => {
                                                    const { image } = item;
                                                    return (
                                                        image ? (
                                                            <div key={index} className="flex justify-center">
                                                            <div className="relative w-[48px] h-[48px]">
                                                                <Image
                                                                    src={image}
                                                                    layout="fill"
                                                                    objectFit="contain" 
                                                                    alt={item.name || 'Skill icon'}
                                                                    className="drop-shadow-md hover:drop-shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                                                />
                                                            </div>

                                                        </div>
                                                        ) : null
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
