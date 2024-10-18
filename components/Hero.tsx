
import Link from 'next/link'
import { RiArrowDownSLine, RiBriefcase2Fill, RiTodoFill } from 'react-icons/ri'
import { Button } from './ui'
import { Download, Send } from 'lucide-react'
import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'

const Hero = () => {
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className="container mx-auto">
                <div className='flex justify-between gap-x-8'>
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center
                    xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
                            Full Stack Web Developer
                        </div>
                        <h1 className='h1'>Hola, soy Kevin Jeremias</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Soy un desarrollador con Background en Ciencias Económicas, lo cual me ha permitido desarrollar soft skills como pensamiento lógico y resolución de problemas, aplicándolos en diferentes entornos de desarrollo.</p>
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href={'/contact'}>
                                <Button className=' gap-x-2'>Contactame <Send size={18} /></Button>
                                <Button variant='secondary' className=' gap-x-2'>Download CV <Download size={18} /></Button>
                            </Link>
                        </div>

                        <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>

                    <div className='hidden xl:flex relative'>
                        <Badge containerStyles='absolute top-[24%] -left-[37rem]' icon={<RiBriefcase2Fill />} endCountNum={2} badgeText='Años de experiencia.' />
                        <Badge containerStyles='absolute top-[80%] -left-[33rem]' icon={<RiTodoFill />} endCountNum={9} badgeText='Proyectos Finalizados.' endCountText='+' />
                        <Badge containerStyles='absolute top-[55%] -right-10' icon={<RiTodoFill />} endCountNum={9} badgeText='Certificados' endCountText='k' />
                        <div className='bg-hero_shape_light dark:bg-hero_shape_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat' ImgSrc='/perfil-remove.png' />
                        </div>
                    </div>
                </div>
                <div className=' hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>

    )
}

export default Hero