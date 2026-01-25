'use client';

import Link from "next/link";
import { CriminalRecordIcon } from "@/components/icons/CriminalRecordIcon";
import { MedicalIcon } from "@/components/icons/MedicalIcon";
import { PhotoIcon } from "@/components/icons/PhotoIcon";
import { useForm } from '@formspree/react';


export default function CTA() {
    const [state, handleSubmit] = useForm("xdaeqbyg");
    return (
        <section className="py-28">
            <div className="mx-auto max-w-6xl px-6 text-center">

    <span className="inline-block rounded-full border px-4 py-1 text-sm text-gray-500">
      ZANIM ROZPOCZNIESZ
    </span>

                <h2 className="mt-6 text-4xl font-semibold text-gray-900">
                    Co musisz mieć, aby rozpocząć<br />pracę jako kierowca?
                </h2>

                <div className="mt-16 grid gap-12 md:grid-cols-3">

                    {/* BLOCK 1 */}
                    <div>
                        <CriminalRecordIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            Zaświadczenie o niekaralności
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Do uzyskania w sądzie lub przez Krajowy Rejestr Karny.
                            Ważne 30 dni.
                        </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div>
                        <MedicalIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            Badania lekarskie i psychologiczne
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Skierowanie dostaniesz od nas. Zwrócimy część kosztów
                            po 350 przejazdach.
                        </p>
                    </div>

                    {/* BLOCK 3 */}
                    <div>
                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-6 text-lg font-medium">
                            Zdjęcie do identyfikatora
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            Wykonamy je bezpłatnie w naszym biurze.
                            Nic nie musisz przynosić.
                        </p>
                    </div>

                </div>
            </div>

                {/* ===== Form block ===== */}
                <div className="mt-24 mx-auto max-w-3xl rounded-2xl bg-gray-50 px-6 py-12 text-center shadow-sm">

                    <h3 className="text-2xl font-semibold text-gray-900">
                        Zostaw kontakt — resztą zajmiemy się my
                    </h3>

                    <p className="mt-3 text-gray-600">
                        Napisz swoje imię, telefon i miasto — oddzwonimy jeszcze dziś
                        i pomożemy Ci szybko zacząć pracę.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 grid gap-6 sm:grid-cols-2"
                    >
                        {/* Inputs */}
                        <input
                            name="name"
                            type="text"
                            placeholder="Twoje imię"
                            required
                            className="rounded-xl border px-4 py-3 text-sm"
                        />

                        <input
                            name="phone"
                            type="tel"
                            placeholder="Numer telefonu"
                            required
                            className="rounded-xl border px-4 py-3 text-sm"
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Adres email"
                            required
                            className="rounded-xl border px-4 py-3 text-sm"
                        />

                        <select
                            name="city"
                            disabled
                            className="rounded-xl border px-4 py-3 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="Rzeszów">Rzeszów</option>
                        </select>


                        {/* Checkbox — на всю ширину */}
                        <label className="sm:col-span-2 mx-auto flex max-w-xl items-center gap-3 rounded-xl border px-4 py-3 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                name="consent"
                                required
                                className="h-4 w-4"
                            />
                            Wyrażam zgodę na przetwarzanie moich danych osobowych.
                        </label>

                        {/* Button — на всю ширину, по центру */}
                        <div className="sm:col-span-2 flex justify-center">
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="rounded-xl bg-red-600 px-12 py-4 text-white font-medium hover:bg-red-700 transition disabled:opacity-50"
                            >
                                {state.submitting ? "Wysyłanie..." : "Wyślij zgłoszenie"}
                            </button>
                        </div>

                        {/* Success */}
                        {state.succeeded && (
                            <p className="sm:col-span-2 text-center text-green-600 font-medium">
                                Zgłoszenie wysłane ✔ Skontaktujemy się z Tobą.
                            </p>
                        )}
                    </form>


                    {/* Phone */}
                    <p className="mt-6 text-sm text-gray-600">
                        Masz pytania? Zadzwoń:{" "}
                        <a href="tel:+48723000500" className="font-medium text-gray-900">
                            +48 723 000 500
                        </a>
                    </p>

                </div>
        </section>
    );
}
