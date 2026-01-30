// app/warunki-wynajmu/components/RentalConditionsIntro.tsx

"use client";

import { useTranslations } from "next-intl";

export default function RentalConditionsIntro() {
  const t = useTranslations("rental-conditions");

  return (
    <section className="pt-8 lg:pt-12 pb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          {t("intro.title")}
        </h1>
        <p className="text-gray-600">
          {t("intro.description")}
        </p>
      </div>
    </section>
  );
}
