export const scrollToContactForm = (retries = 10) => {
    const el = document.getElementById("contact-form");

    if (el) {
        const headerOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
        return;
    }

    // ⬇️ форма ще не в DOM → чекаємо
    if (retries > 0) {
        setTimeout(() => scrollToContactForm(retries - 1), 100);
    }
};
