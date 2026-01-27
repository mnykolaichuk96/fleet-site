"use client";
// ⬆️ Client Component, бо:
// - використовує useForm (Formspree)
// - реагує на submit
// - має state (submitting / success)

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "@formspree/react";

// SVG / Icon компоненти
import { CriminalRecordIcon } from "@/components/icons/CriminalRecordIcon";
import { MedicalIcon } from "@/components/icons/MedicalIcon";
import { PhotoIcon } from "@/components/icons/PhotoIcon";


export default function CTA() {

    // Підключаємо переклади з namespace "home"
    // CTA є частиною home page
    const t = useTranslations("home");

    // useForm:
    // state  -> стан форми (submitting, succeeded)
    // handleSubmit -> handler для <form onSubmit>
    const [state, handleSubmit] = useForm("xdaeqbyg");

    return (
        <section className="py-28">

            {/* ===== INTRO / REQUIREMENTS ===== */}
            <div className="mx-auto max-w-6xl px-6 text-center">

                {/* Mały badge nad tytułem */}
                <span className="inline-block rounded-full border px-4 py-1 text-sm text-gray-500">
                    {t("cta.badge")}
                </span>

                {/* Główny tytuł sekcji */}
                <h2 className="mt-6 text-4xl font-semibold text-gray-900">
                    {t("cta.title")}
                </h2>

                {/* Trzy wymagania */}
                <div className="mt-16 grid gap-12 md:grid-cols-3">

                    {/* === WYMAGANIE 1 === */}
                    <div>
                        <CriminalRecordIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            {t("cta.requirements.criminal.title")}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            {t("cta.requirements.criminal.text")}
                        </p>
                    </div>

                    {/* === WYMAGANIE 2 === */}
                    <div>
                        <MedicalIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            {t("cta.requirements.medical.title")}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            {t("cta.requirements.medical.text")}
                        </p>
                    </div>

                    {/* === WYMAGANIE 3 === */}
                    <div>
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            {t("cta.requirements.photo.title")}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            {t("cta.requirements.photo.text")}
                        </p>
                    </div>

                </div>
            </div>


            {/* ===== FORMULARZ ===== */}
            <div className="
                mt-24 mx-auto max-w-3xl
                rounded-2xl bg-gray-50
                px-6 py-12
                text-center shadow-sm
            ">

                <h3 className="text-2xl font-semibold text-gray-900">
                    {t("cta.form.title")}
                </h3>

                <p className="mt-3 text-gray-600">
                    {t("cta.form.subtitle")}
                </p>

                {/* FORM */}
                <form
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="mt-8 grid gap-6 sm:grid-cols-2"
                >

                    {/* INPUT: NAME */}
                    <input
                        name="name"
                        type="text"
                        placeholder={t("cta.form.fields.name")}
                        required
                        className="input"
                    />

                    {/* INPUT: PHONE */}
                    <input
                        name="phone"
                        type="tel"
                        placeholder={t("cta.form.fields.phone")}
                        required
                        className="input"
                    />

                    {/* INPUT: EMAIL */}
                    <input
                        name="email"
                        type="email"
                        placeholder={t("cta.form.fields.email")}
                        required
                        className="input"
                    />

                    {/* SELECT: CITY (na razie tylko Rzeszów) */}
                    <select
                        name="city"
                        disabled
                        className="input bg-white text-gray-700"
                    >
                        <option value="Rzeszów">
                            {t("cta.form.fields.city")}
                        </option>
                    </select>

                    {/* CONSENT CHECKBOX */}
                    <label className="
                        sm:col-span-2 mx-auto
                        flex max-w-xl items-center gap-3
                        rounded-xl border
                        px-4 py-3
                        text-sm text-gray-600
                    ">
                        <input
                            type="checkbox"
                            name="consent"
                            required
                            className="h-4 w-4"
                        />
                        {t("cta.form.consent")}
                    </label>

                    {/* SUBMIT BUTTON */}
                    <div className="sm:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="
                                rounded-xl bg-red-600
                                px-12 py-4
                                text-white font-medium
                                hover:bg-red-700 transition
                                disabled:opacity-50
                            "
                        >
                            {state.submitting
                                ? t("cta.form.submitting")
                                : t("cta.form.submit")}
                        </button>
                    </div>

                    {/* SUCCESS MESSAGE */}
                    {state.succeeded && (
                        <p className="sm:col-span-2 text-center text-green-600 font-medium">
                            {t("cta.form.success")}
                        </p>
                    )}
                </form>

                {/* PHONE */}
                <p className="mt-6 text-sm text-gray-600">
                    {t("cta.phone.label")}{" "}
                    <a
                        href="tel:+48723000500"
                        className="font-medium text-gray-900"
                    >
                        +48 723 000 500
                    </a>
                </p>

            </div>
        </section>
    );
}
