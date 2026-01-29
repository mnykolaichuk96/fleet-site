"use client";

import { useTranslations } from "next-intl";
import { useForm } from "@formspree/react";

export function ContactFormSection() {
    const t = useTranslations("home.contactForm");
    const phoneT = useTranslations("home.phone");
    const [state, handleSubmit] = useForm("xdaeqbyg");

    return (
        <section className="pt-2 pb-16">
            <div
                className="
          mx-auto max-w-3xl
          rounded-2xl bg-[#0B1C2D]/10
          px-6 py-12
          text-center shadow-sm
        "
            >
                <h3 className="text-2xl font-semibold text-gray-900">
                    {t("title")}
                </h3>

                <p className="mt-3 text-gray-600">
                    {t("subtitle")}
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 grid gap-6 sm:grid-cols-2"
                >
                    <input
                        name="name"
                        placeholder={t("fields.name")}
                        required
                        className="input"
                    />
                    <input
                        name="phone"
                        placeholder={t("fields.phone")}
                        required
                        className="input"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder={t("fields.email")}
                        required
                        className="input"
                    />

                    <select
                        name="city"
                        disabled
                        className="input bg-white text-gray-700"
                    >
                        <option>{t("fields.city")}</option>
                    </select>

                    <label
                        className="
              sm:col-span-2 mx-auto
              flex max-w-xl items-center gap-3
              rounded-xl border px-4 py-3
              text-sm text-gray-600
            "
                    >
                        <input type="checkbox" required />
                        {t("consent")}
                    </label>

                    <div className="sm:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="
                rounded-xl bg-[#D97706]
                px-12 py-4 text-white font-medium
                hover:bg-[#B45309] transition
                disabled:opacity-50
              "
                        >
                            {state.submitting ? t("submitting") : t("submit")}
                        </button>
                    </div>

                    {state.succeeded && (
                        <p className="sm:col-span-2 text-green-600 font-medium">
                            {t("success")}
                        </p>
                    )}
                </form>

                <p className="mt-6 text-sm text-gray-600">
                    {phoneT("label")}{" "}
                    <a
                        href={`tel:${phoneT("numberPl")}`}
                        className="font-medium text-gray-900"
                    >
                        {phoneT("numberPl")}
                    </a>
                </p>
            </div>
        </section>
    );
}
