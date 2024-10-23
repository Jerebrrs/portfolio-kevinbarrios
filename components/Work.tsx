'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { Button } from './ui';
import Link from 'next/link';
import ProjectCard from './ProjectCard'
import { projectData, ProjectData } from '@/app/data/data'


const Work: React.FC<ProjectData> = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
                    <h2 className='section-title mb-4 '>Ultimos Proyectos</h2>
                    <p className='subtitle mb-8'>Explora mis proyectos más recientes, desarrollados con tecnologías de vanguardia y soluciones innovadoras.</p>
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