
import { getTranslations } from "next-intl/server";

type Section = {
    title: string;
    content: string[];
};

export default async function PolicyPage(
    { params }: { params: Promise<{ locale: string }> }
) {
    await params; // у Next 16 params async (навіть якщо не використовуєш)

    const t = await getTranslations("policy");
    const sections = t.raw("sections") as Section[];

    return (
        <main className="mx-auto max-w-4xl px-6 py-20">
            <h1 className="text-3xl md:text-4xl font-semibold mb-10">
                {t("title")}
            </h1>

            <div className="space-y-10">
                {sections.map((section, index) => (
                    <section key={index}>
                        <h2 className="text-xl font-semibold mb-4">
                            {section.title}
                        </h2>

                        <div className="space-y-3 text-gray-700 leading-relaxed">
                            {section.content.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
