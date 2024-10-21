'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Button, Input, Textarea } from "./ui";

const Forms = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [formCompleted, setFormCompleted] = useState(false);
    const [message, setMessage] = useState('');

    // Función para enviar el email
    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_8ouqvjs', 'template_elp4i0i', form.current, '8E8On3410sP04sGPO')
                .then(() => {
                    setMessage('¡Mensaje enviado con éxito!');
                    form.current?.reset();  // Verificar si form.current no es null
                    setFormCompleted(false);
                }, (error) => {
                    setMessage(`Error al enviar el mensaje: ${error.text}`);
                });
        }
    };

    // Función para verificar si todos los campos están completos
    const handleInputChange = () => {
        if (form.current) {
            const inputs = form.current.querySelectorAll('input, textarea');
            let isCompleted = true;
            inputs.forEach((input) => {
                const element = input as HTMLInputElement | HTMLTextAreaElement;
                if (!element.value) {
                    isCompleted = false;
                }
            });
            setFormCompleted(isCompleted);
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} onChange={handleInputChange} className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input name="user_name" type="text" placeholder="Nombre.." required />
                <User className="absolute right-6" />
            </div>
            <div className="relative flex items-center">
                <Input name="user_email" type="email" placeholder="E-mail.." required />
                <MailIcon className="absolute right-6" />
            </div>
            <div className="relative flex items-center">
                <Textarea name="message" placeholder="Escribe tu Mensaje.." required />
                <MessageSquare className="absolute top-4 right-6" />
            </div>
            <Button type="submit" disabled={!formCompleted} className="flex items-center gap-x-1 max-w-[166px]">
                Enviar Mensaje <ArrowRightIcon size={20} />
            </Button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default Forms;
