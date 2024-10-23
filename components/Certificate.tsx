'use client'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { certificateData } from '@/app/data/data'
import { Card } from './ui'
import Image from 'next/image'
import Link from 'next/link'
import { Link2Icon } from 'lucide-react'

const Certificate = () => {
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>Certificados</h2>

                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className='h-auto'
                >
                    {certificateData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card className="group overflow-hidden relative">

                                {/* Contenedor de la imagen, con hover group */}
                                <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 overflow-hidden'>
                                    <Image
                                        className="absolute bottom-0 shadow-2xl"
                                        src={item.image || "project"}
                                        layout="fill"
                                        objectFit="contain"
                                        alt={`Certificado ${index}`}
                                        priority
                                    />
                                    <div className="flex gap-x-4">
                                        <Link href={item.link || '/'} target="_blank" className='bg-slate-600 w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'>
                                            <Link2Icon className="text-white" />
                                        </Link>
                                    </div>




                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Certificate
