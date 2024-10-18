import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from 'lucide-react';
import React from 'react';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import Image from 'next/image';

// Define el tipo para la información personal
interface InfoData {
    text?: string;
    icon?: React.ReactNode;  // El tipo adecuado para un elemento JSX
}

// Define el tipo para los datos de educación y experiencia
interface QualificationItem {
    academia?: string;
    company?: string;
    name?: string;
    image?: string;
    role?: string;
    years?: string;
}

interface QualificationSection {
    title: string;
    data: QualificationItem[];
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
                academia: 'Soy Henry',
                role: 'Full Stack Web Developer',
                years: '2023-2024',
            },
            {
                academia: 'Alura Latam + Oracle Next Educacion',
                role: 'Desarrollador Backend',
                years: '2024-Actualidad',
            },
            {
                academia: 'Soy Henry',
                role: 'Full Stack Web Developer',
                years: '2023-2024',
            },
        ],
    },
    {
        title: 'Experiencia',
        data: [
            {
                company: 'Cubix & Bets Casino',
                role: 'Full Stack Web Developer',
                years: '2023-2024',
            },
            {
                company: 'No Country',
                role: 'Desarrollador Backend',
                years: '2024-Actualidad',
            },
            {
                company: 'Soy Henry',
                role: 'Full Stack Web Developer',
                years: '2023-2024',
            },
        ],
    },
];

const skillsData: QualificationSection[] = [
    {
        title: 'Frontend',
        data: [
            { name: 'React', image: '/images/react-logo.png' },
            { name: 'Redux', image: '/images/redux-logo.png' },
        ],
    },
    {
        title: 'Backend',
        data: [
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
            { name: 'NestJS', image: '/nestjs.png' },
        ],
    },
];

const About: React.FC = () => {
    // Tipar adecuadamente la función getData
    const getData = (arr: QualificationSection[], title: string): QualificationSection | undefined => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Sobre Mi</h2>
                <div className='flex flex-col xl:flex-row'>
                    <div className=' hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[555px] h-[556px] bg-no-repeat relative'
                            ImgSrc='/perfil-remove.png' />
                    </div>
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Informacion Personal</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Cualidades</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Soy Full Stack Developer, apasionado por seguir conociendo y aprendiendo.</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:max-0'>
                                            Cuento con sólidos conocimientos en diversas tecnologías como Html, Css, Git/Git hub, así como frameworks Frontend
                                            como React/Redux. Mi enfoque principal se centra en el BackEnd donde tengo experiencia con tecnologías como Typescript,
                                            Node.js, Express.js, SQL, Docker, MongoDb.
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
                                                    <div className='flex flex-col gap-y-8'>
                                                        {getData(qualificationData, 'Educacion')?.data.map((item, index) => {
                                                            const { role, years, academia } = item;
                                                            console.log(academia);

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
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div>
                                                {getData(skillsData, 'Frontend')?.data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                            <div>{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2'>Tools</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 justify-center xl:justify-start'>
                                                {getData(skillsData, 'Backend')?.data.map((item, index) => {
                                                    const { image } = item;
                                                    return (
                                                        image ? (
                                                            <div key={index} className="flex justify-center">
                                                                <Image
                                                                    src={image}
                                                                    width={48}
                                                                    height={48}
                                                                    alt={item.name || 'Skill icon'}
                                                                     className="drop-shadow-md hover:drop-shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
                                                                />
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
