
import Forms from "@/components/Forms";
import { HomeIcon, MailIcon, PhoneCall } from "lucide-react";

export default function Contact() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">

                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                            <span className="w-[30px] h-[2px] bg-primary"></span>
                            <div>Hola 👋</div>
                        </div>
                        <h1 className="h1 max-w-md mb-8">Trabajemos Juntos!</h1>
                        <p className="subtitle max-w-[400px]">Contactame y te dare soluciones a tus dudas, o solo podremos charlar.</p>
                    </div>
                    <div className="hidden xl:flex w-full bg-contact_ilust_light dark:bg-contact_ilust_dark bg-contain bg-top bg-no-repeat"></div>
                </div>
                <div>
                    <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                        <div className="flex flex-col gap-y-4 xl:mb-24 text-base xl:text-lg">
                            <div className="flex items-center gap-x-8">
                                <MailIcon size={18} className="text-primary" />
                                <div>kevinjeremiasbarrios@gmail.com</div>
                            </div>
                            <div className="flex items-center gap-x-8">
                                <HomeIcon size={18} className="text-primary" />
                                <div>Paraná, Entre Rios, Argentina.</div>
                            </div>
                            <div className="flex items-center gap-x-8">
                                <PhoneCall size={18} className="text-primary" />
                                <div>+54 9 343 5330498</div>
                            </div>
                        </div>

                        <Forms />
                    </div>
                </div>
            </div>
        </section>
    );
}
