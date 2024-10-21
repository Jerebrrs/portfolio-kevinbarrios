import { Blocks, GanttChartSquare, Gem } from "lucide-react"
import { title } from "process"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";


interface Services {
    title?: string;
    icon?: React.ReactNode;  // El tipo adecuado para un elemento JSX
    description?: string;
}


const servicesData: Services[] = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Diseño Web',
        description: 'Dransformo ideas en experiencias digitales visualmente atractivas y fáciles de usar, asegurando que cada proyecto web sea intuitivo y eficiente para los usuarios finales.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Desarrollo de Software Escalable',
        description: 'Desarrollo aplicaciones robustas y escalables que se adaptan al crecimiento de tu negocio, usando tecnologías modernas para garantizar alto rendimiento y estabilidad.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Innovación Tecnológica',
        description: 'Me enfoco en implementar soluciones innovadoras que resuelvan problemas de manera creativa, aprovechando lo último en tecnología para impulsar tu proyecto al siguiente nivel.'
    }
]
const Services: React.FC<Services> = () => {
    return (
        <section className="mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">Mis Servicios</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
                    {servicesData.map((items, index) => {
                        return (
                            <Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relativehover:drop-shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{items.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb4">{items.title}</CardTitle>
                                    <CardDescription className="text-lg">{items.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Services