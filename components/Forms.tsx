'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import { Button, Input, Textarea } from "./ui"


const Forms = () => {
    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input className="" type="name" id="name" placeholder="Nombre.." />
                <User className="absolute right-6" />
            </div>
            <div className="relative flex items-center">
                <Input className="" type="emaol" id="email" placeholder="E-mail.." />
                <MailIcon className="absolute right-6" />
            </div>
            <div className="relative flex items-center">
                <Textarea placeholder="Escribe tu Mensaje.." />
                <MessageSquare className="absolute top-4 right-6" />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">Enviar Mensaje <ArrowRightIcon size={20}/></Button>
        </form>
    )
}

export default Forms