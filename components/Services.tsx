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
        description: 'Diseño tu propia web a medida de tus requerimientos.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Desarrollo de Software',
        description: 'Diseño tu propia web a medida de tus requerimientos.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Movile',
        description: 'Diseño tu propia web a medida de tus requerimientos.'
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
                            <Card key={index} className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
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