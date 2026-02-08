"use client";

import { useTranslations } from "next-intl";
import { useForm } from "@formspree/react";
import {ContactForm} from "@/components/cta/ContactForm";


export function ContactFormSection({}) {

    return (
        <section id="contact-form">
            <ContactForm />
        </section>
    );
}
