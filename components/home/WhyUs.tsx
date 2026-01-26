export default function WhyUs() {
    return (
        <section className="container mx-auto px-4 py-20">
            {/* HEADER */}
            <h2 className="text-3xl font-bold text-center mb-12">
                Dlaczego my?
            </h2>

            {/* CARDS */}
            <div className="grid gap-8 md:grid-cols-3">
                {/* CARD 1 */}
                <div className="rounded-2xl border bg-white p-8 transition hover:shadow-lg hover:border-gray-300">
                    <div className="text-5xl mb-6">🚗</div>

                    <h3 className="text-xl font-semibold mb-4">
                        Rozliczenie elastyczne nawet do 0 zł
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Dopasowane do Ciebie formy rozliczeń. Możliwość rozliczenia
                        abonamentowego, procentowego lub nawet 0 zł na start.
                    </p>
                </div>

                {/* CARD 2 — HIGHLIGHT */}
                <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-8 shadow-md transition hover:shadow-xl">
                    <div className="text-5xl mb-6">🔑</div>

                    <h3 className="text-xl font-semibold mb-4">
                        Zwracamy połowę VATu za paliwo
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        Zwracamy 50% VATu za paliwo. Nie pobieramy VATu z napiwków
                        ani z bonusów — wszystko trafia do kierowcy.
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="rounded-2xl border bg-white p-8 transition hover:shadow-lg hover:border-gray-300">
                    <div className="text-5xl mb-6">🚕</div>

                    <h3 className="text-xl font-semibold mb-4">
                        Wszystkie koszty po naszej stronie
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        Zwracamy pieniądze za badania. Oferujemy do 60% od obrotu.
                        100% napiwków i bonusów trafia do kierowców.
                        Wszystkie koszty utrzymania samochodu są po naszej stronie.
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
                <p className="text-gray-600 mb-6">
                    Masz pytania lub chcesz dobrać najlepszy model współpracy?
                </p>

                <button className="rounded-lg bg-red-600 px-6 py-3 text-white font-medium hover:bg-red-700 transition">
                    Skontaktuj się z nami
                </button>
            </div>
        </section>
    );
}
