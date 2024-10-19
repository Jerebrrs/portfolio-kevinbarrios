'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Button } from './ui';
import Link from 'next/link';
import ProjectCard from './ProjectCard'

interface ProjectData {
    image?: string;
    category?: string;
    name?: string;
    description?: string;
    link?: string;
    github?: string;
}

const projectData: ProjectData[] = [
    {
        image: '/work/5.png',
        category: 'react js',
        name: "Cubix Casino",
        description: "asdflakns   laknsdklnas lknalskdnlak nasldknlknasd lknlknasd lknlknad lknlknlkna lknlknasd lknlknlkna lknlknlknlknads lknlknlkn lknlknlk lknlkn lknlkn lkknlknasdlkn lknlknlk lknlknasd poijnlkn qwrelknlkna sd",
        link: '/',
        github: '/'

    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: "Nexa Website",
        description: "asdflakns   laknsdklnas lknalskdnlak nasldknlknasd lknlknasd lknlknad lknlknlkna lknlknasd lknlknlkna lknlknlknlknads lknlknlkn lknlknlk lknlkn lknlkn lkknlknasdlkn lknlknlk lknlknasd poijnlkn qwrelknlkna sd",
        link: '/',
        github: '/'

    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: "Nexa Website",
        description: "asdflakns   laknsdklnas lknalskdnlak nasldknlknasd lknlknasd lknlknad lknlknlkna lknlknasd lknlknlkna lknlknlknlknads lknlknlkn lknlknlk lknlkn lknlkn lkknlknasdlkn lknlknlk lknlknasd poijnlkn qwrelknlkna sd",
        link: '/',
        github: '/'

    },
    {
        image: '/work/4.png',
        category: 'Java',
        name: "Nexa Website",
        description: "asdflakns   laknsdklnas lknalskdnlak nasldknlknasd lknlknasd lknlknad lknlknlkna lknlknasd lknlknlkna lknlknlknlknads lknlknlkn lknlknlk lknlkn lknlkn lkknlknasdlkn lknlknlk lknlknasd poijnlkn qwrelknlkna sd",
        link: '/',
        github: '/'

    },
]


const Work: React.FC<ProjectData> = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
                    <h2 className='section-title mb-4 '>Ultimos Proyectos</h2>
                    <p className='subtitle mb-8'>Mira los proyectos increibles en los que trabaje.</p>
                    <Link href={'/projects'}><Button>Mis Proyectos</Button></Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        649: {
                            slidesPerView: 2,
                        },
                    }}
                        spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projectData.slice(0.4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Work;