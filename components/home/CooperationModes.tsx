import Link from 'next/link';

/**
 * Sekcja: Formy współpracy
 *
 * Zawiera 3 modele pracy:
 * 1. Twoje auto
 * 2. Wynajem
 * 3. Auto Ginger Partner
 *
 * Brak logiki JS – czysta prezentacja
 */
export default function CooperationModes() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Tytuł sekcji */}
                <h2 className="text-3xl font-semibold text-center mb-14">
                    Jak możesz z nami pracować?
                </h2>

                {/* Grid z trzema kolumnami */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* === KARTA 1: TWOJE AUTO === */}
                    <div className="bg-white rounded-2xl p-8 border">

                        {/* Ikona (placeholder – docelowo SVG) */}
                        <div className="mb-6 text-4xl">🚗</div>

                        <h3 className="text-xl font-semibold mb-3">
                            Twoje auto
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Masz własny samochód? Pomożemy Ci rozpocząć
                            <strong> legalną współpracę </strong>
                            z Bolt i Uber.
                        </p>

                        {/* Lista benefitów */}
                        <ul className="space-y-3 text-sm">
                            <li>✔ Rozliczenia i umowa</li>
                            <li>✔ Wsparcie formalne</li>
                            <li>✔ Pełna elastyczność</li>
                        </ul>

                        {/* Link pomocniczy */}
                        <Link
                            href="/drivers"
                            className="inline-block mt-6 text-sm text-gray-500 hover:text-black"
                        >
                            Dowiedz się więcej →
                        </Link>
                    </div>

                    {/* === KARTA 2: WYNAJEM === */}
                    <div className="bg-white rounded-2xl p-8 border ring-1 ring-red-100">

                        <div className="mb-6 text-4xl">🔑</div>

                        <h3 className="text-xl font-semibold mb-3">
                            Wynajem samochodu
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Nie masz auta? Oferujemy nowoczesne samochody
                            gotowe do pracy w taxi.
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>✔ Hybrydy i automaty</li>
                            <li>✔ Bez wkładu własnego</li>
                            <li>✔ Serwis i ubezpieczenie</li>
                        </ul>

                        {/* GŁÓWNY CTA */}
                        <Link
                            href="/cars"
                            className="inline-block mt-8 rounded-xl bg-red-600 px-5 py-3 text-white text-sm font-medium hover:bg-red-700"
                        >
                            Zobacz dostępne auta
                        </Link>
                    </div>

                    {/* === KARTA 3: AUTO GINGER PARTNER === */}
                    <div className="bg-white rounded-2xl p-8 border">

                        <div className="mb-6 text-4xl">🚕</div>

                        <h3 className="text-xl font-semibold mb-3">
                            Auto Ginger Partner
                        </h3>

                        <p className="text-gray-600 mb-6">
                            Pracuj na samochodzie należącym do Ginger Partner —
                            my zajmiemy się resztą.
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>✔ Minimum formalności</li>
                            <li>✔ Stałe warunki</li>
                            <li>✔ Szybki start</li>
                        </ul>

                        <Link
                            href="/apply"
                            className="inline-block mt-8 rounded-xl border px-5 py-3 text-sm font-medium hover:bg-gray-50"
                        >
                            Zgłoś się
                        </Link>
                    </div>

                </div>

                {/* Tekst pomocniczy pod kartami */}
                <p className="mt-12 text-center text-sm text-gray-500">
                    Nie wiesz, który model wybrać? Skontaktuj się z nami — doradzimy.
                </p>

            </div>
        </section>
    );
}
